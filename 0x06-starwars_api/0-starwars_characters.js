#!/usr/bin/node

const request = require('request');

const req = (arr, i) => {
  if (!arr || i === arr.length) return;
  request(arr[i], (err, response, body) => {
    if (err) {
      throw err;
    } else {
      console.log(JSON.parse(body).name);
      req(arr, i + 1);
    }
  });
};

request(
  `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`,
  (err, response, body) => {
    if (err) {
      throw err;
    } else {
      const chars = JSON.parse(body).characters;
      req(chars, 0);
    }
  }
);
