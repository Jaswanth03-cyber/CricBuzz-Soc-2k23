// venue related queries

const allvenues = "SELECT * FROM venue ;" ;

const venuedetails = "SELECT * FROM VENUE WHERE venue.venue_id = $1 ;" ;

const maxminvenueruns = ` WITH venue_runs(runs) as (
        SELECT SUM(ball_by_ball.runs_scored+ball_by_ball.extra_runs) as runs
        FROM ball_by_ball, match
        WHERE ball_by_ball.match_id=match.match_id AND match.venue_id=$1
        GROUP BY ball_by_ball.match_id, ball_by_ball.innings_no       
)
SELECT ((COUNT(runs)-1)/2)+1 as matches, MAX(runs), MIN(runs)
FROM venue_runs ;
` ;
const venuemaxchased = `WITH venue_runs(runs) as (
        SELECT SUM(ball_by_ball.runs_scored+ball_by_ball.extra_runs) as runs
        FROM ball_by_ball, match
        WHERE ball_by_ball.match_id=match.match_id AND ball_by_ball.innings_no=1 AND match.win_type='wickets' AND match.venue_id=$1
        GROUP BY ball_by_ball.match_id, ball_by_ball.innings_no  
)
SELECT MAX(runs) FROM venue_runs ;
` ;
const venuefirstinngsavg = `WITH m1(season_year, runs) as (
        SELECT match.season_year, SUM(ball_by_ball.runs_scored+ball_by_ball.extra_runs) as runs
        FROM ball_by_ball, match
        WHERE ball_by_ball.match_id=match.match_id AND ball_by_ball.innings_no=1 AND match.venue_id=$1
        GROUP BY ball_by_ball.match_id, match.season_year
)
SELECT m1.season_year, SUM(runs)*1.0/COUNT(runs) as avgs
FROM m1
GROUP BY m1.season_year
ORDER BY m1.season_year ;
` ;

const venuewins = `SELECT SUM( CASE WHEN win_type='runs' THEN 1 ELSE 0 END ) as bat_first, SUM( CASE WHEN win_type='wickets' THEN 1 ELSE 0 END ) as bat_second
        FROM match
        WHERE match.venue_id=$1 ;` ;

const addvenue = `WITH max_id(value) as (
SELECT max(venue.venue_id) FROM venue)
INSERT INTO venue (venue_id, venue_name, country_name, city_name, capacity) VALUES(max_id.value+1, $1, $2, $3, $4)" ;
` ;


//player statistics related queries


// match summary related queries

module.exports = {
    allvenues,
    venuedetails,
    maxminvenueruns,
    venuemaxchased,
    venuefirstinngsavg,
    venuewins,
    addvenue
};