const pool = require('../../db.js');
const queries = require('../queries.js');

// venue related control logic  
const allvenues = async(req, res) => {
    try {
        const info = await pool.query(queries.allvenues);
        return res.status(200).json(info.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message :"server Error"});
    }
};

const venuedetails = async(req, res) => {
    try{
        const {venue_id} = req.params ;
        const venueinfo = await pool.query(queries.venuedetails, [venue_id]) ;
        return res.status(200).json(venueinfo.rows) ;
    }
    catch(error){
        console.log(error.message) ;
        res.status(500).json({message : "Server Error"}) ;
    }
};

const venuemaxmin = async(req, res) => {
    try{
        const {venue_id} = req.params ;
        const venueinfo = await pool.query(queries.maxminvenueruns, [venue_id]) ;
        return res.status(200).json(venueinfo.rows) ;
    }
    catch(error){
        console.log(error.message) ;
        res.status(500).json({message : "Server Error"}) ;
    }
};

const venuemaxchased = async(req, res) => {
    try{
        const {venue_id} = req.params ;
        const venueinfo = await pool.query(queries.venuemaxchased, [venue_id]) ;
        return res.status(200).json(venueinfo.rows) ;
    }
    catch(error){
        console.log(error.message) ;
        res.status(500).json({message : "Server Error"}) ;
    }
};

const venuewins = async(req, res) => {
    try{
        const {venue_id} = req.params ;
        const venueinfo = await pool.query(queries.venuewins, [venue_id]) ;
        return res.status(200).json(venueinfo.rows) ;
    }
    catch(error){
        console.log(error.message) ;
        res.status(500).json({message : "Server Error"}) ;
    }
};

const venuefirstinngsavg = async(req, res) => {
    try{
        const {venue_id} = req.params ;
        const venueinfo = await pool.query(queries.venuefirstinngsavg, [venue_id]) ;
        return res.status(200).json(venueinfo.rows) ;
    }
    catch(error){
        console.log(error.message) ;
        res.status(500).json({message : "Server Error"}) ;
    }
};

const venueadd = async(req, res) => {
    try{
        const {venue_name, country_name, city_name, capacity} = req.body ;
        const venueinfo = await pool.query(queries.addvenue, [venue_name, country_name, city_name, capacity]) ;
        return res.status(200).json(venueinfo.rows) ;
    }
    catch(error){
        console.log(error.message) ;
        res.status(500).json({message : "Server Error"}) ;
    }
};

// player statistics related control logic 



// match related control logic 


module.exports = {
    allvenues,
    venuedetails,
    venuemaxmin,
    venuemaxchased,
    venuewins,
    venuefirstinngsavg,
    venueadd,
}