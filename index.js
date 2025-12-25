module.exports = function (cb) {
  cb(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    },
    body: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Auth0 Extension</title>
        </head>
        <body>
          <h1>Hello nileninja!</h1>
        </body>
      </html>
    `
  });
};
