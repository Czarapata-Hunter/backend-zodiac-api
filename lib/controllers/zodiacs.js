const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    let match;
    for (const zodiac of zodiacs) {
      if (zodiac.id === req.params.id) {
        match = zodiac;
      }
    }

    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];
    for (const zodiac of zodiacs) {
      filteredData.push({ id: zodiac.id, name: zodiac.name });
    }
    res.json(filteredData);
  });
