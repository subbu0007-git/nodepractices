const express = require('express');
const { handlegenrateShortenurl, handlecountvistofthaturl } = require('../controlers/uri.js');

const routes = express.Router();

routes.post('/', handlegenrateShortenurl);

routes.get('/:shorid', handlecountvistofthaturl)

module.exports = routes;