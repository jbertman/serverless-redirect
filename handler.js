'use strict';

module.exports.redirect = (event, context, callback) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: 'http://localhost:8888',
    },
    body: '',
  };

  callback(null, response);
};
