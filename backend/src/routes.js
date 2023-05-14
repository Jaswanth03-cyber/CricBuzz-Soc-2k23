const { Router } = require('express');

const router = Router();

const controller = require('./controllers/controller.js');

// venue routes
router.get("/venues", controller.allvenues);
router.get("/venue/:venue_id/info", controller.venuedetails) ;
router.get("/venue/:venue_id/maxmin", controller.venuemaxmin) ;
router.get("/venue/:venue_id/maxchased", controller.venuemaxchased) ;
router.get("/venue/:venue_id/wins", controller.venuewins) ;
router.get("/venue/:venue_id/firstinngsavg", controller.venuefirstinngsavg) ;
router.post("/venues/add", controller.venueadd) ;

// player info routes



// match info routes

module.exports = router;