const axios = require('axios');
const dbPool = require('../db');

module.exports = function (app) {
  app.get('/api/capsules/all', getAllCapsules);
  app.get('/api/landing-pad', getLandingPad);
};

async function getAllCapsules(req, res) {
  let returnData = {};
  try {
    const { data } = await axios.get(
      `https://api.spacexdata.com/v3/capsules?sort=original_launch`
    );
    returnData = data;
  } catch (error) {
    return res
      .status(500)
      .send({ message: 'Something went wrong, please try again.' });
  }
  return res.status(200).send({ returnData });
}

async function getLandingPad(req, res) {
  let returnData = {};
  const { landingId } = req.query;

  if (landingId === '') {
    return res.status(404).send({ message: 'Please enter any value' });
  }

  const queryResponse = await dbPool.query(
    `SELECT * FROM spaceData where id='${landingId}'`
  );

  if (queryResponse.length > 0) {
    const { id, spaceItem } = queryResponse[0];
    const { full_name, status, location } = JSON.parse(spaceItem);
    returnData = { id, full_name, status, location };
  } else {
    try {
      const { data } = await axios.get(
        `https://api.spacexdata.com/v3/landpads/${landingId}`
      );
      returnData = {
        id: data.id,
        full_name: data.full_name,
        status: data.status,
        location: data.location,
      };

      const { full_name, status, location } = returnData;

      await dbPool.query(
        `INSERT INTO spaceData (id, spaceItem) VALUES ('${
          returnData.id
        }', '${JSON.stringify({ full_name, status, location })}')`
      );
    } catch (error) {
      return res.status(404).send({
        message: 'Landing Pad not found, please try again with another ID',
      });
    }
  }

  return res.status(200).send({ returnData });
}
