const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data');

module.exports = Router()
  .get('/:sign', (req, res) => {
    let match;
    for (const horoscope of horoscopes) {
      if (horoscope.sign === req.params.sign) {
        match = horoscope;
      }
    }

    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];
    for (const horoscope of horoscopes) {
      filteredData.push({ sign: horoscope.sign, scope: horoscope.scope });
    }
    res.json(filteredData);
  });
