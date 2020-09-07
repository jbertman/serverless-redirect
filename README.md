# serverless-redirect

Change the handler as follows and deploy with `serverless -v deploy`

```javascript
'use strict';

module.exports.redirect = (event, context, callback) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: 'https://www.google.com',
    },
    body: '',
  };

  callback(null, response);
};

```
