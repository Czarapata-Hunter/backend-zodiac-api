const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiacs-data');
const { horoscopes } = require('../lib/horoscopes-data');

describe('zodiacs routes', () => {
  it('/zodiacs should return list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
});

describe('horoscopes routes', () => {
  it('/horoscopes should return list of horoscopes', async () => {
    const res = await request(app).get('/horoscopes');
    const expected = horoscopes.map((horoscope) => {
      return { sign: horoscope.sign, scope: horoscope.scope };
    });
    expect(res.body).toEqual(expected);
  });

  it('/horoscopes/:sign should return horoscope detail', async () => {
    const res = await request(app).get('/horoscopes/scorpio');
    const scorpio = {
      sign: 'scorpio',
      scope: 'A colony of Scorpions',
    };
    expect(res.body).toEqual(scorpio);
  });
});
