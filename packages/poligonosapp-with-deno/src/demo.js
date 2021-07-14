import { poligonos } from './polygons.geojson'
// import { LoadingExample } from './loading-example';

// import { Component, OnInit } from '@angular/core';

// import * as L from 'leaflet';
// import * as L from '@poligonosdemos/leaflet';// snyk monitor
// @ts-ignore
//import {L} from '@poligonosdemos/leaflet';
// import {GeoJSON} from '@types/geojson';

import graphql from 'babel-plugin-relay/macro'
// instead of:
//   import { graphql } from "babel-plugin-relay"

graphql`
    query UserQuery {
        viewer {
            id
        }
    }
`

var { L, GeoJSON, Polygon } = require('poligonosapp');

// const $ = require('jquery');

// import * as $ from 'jquery';

// $('#mapid').width();

alert('loading polygons...')

// import * as LT from '@types/leaflet';

// Lighthouse Perfomance 19 async promise ?????
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
// async function  lazyloadingwebvitals(){

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

import AuthService from './auth.service';

const authService = new AuthService()

L.tileLayer.accessToken = authService.LEAFLET_ACCESS_TOKEN // || process.env.leaflet-secret;

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' +
  authService.LEAFLET_ACCESS_TOKEN,
  {
    attribution:
      // eslint-disable-next-line max-len
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

// @ts-ignore
const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(mymap);

L.geoJSON(poligonos).addTo(mymap)

const myLayer = L.geoJSON().addTo(mymap)
myLayer.addData(poligonos)

module.exports = myLayer
