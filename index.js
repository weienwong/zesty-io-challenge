const http = require('http');

const PORT_NUMBER = 3000;

const createResponseBody = (email, firstName, lastName, github, website) => {
  const body = {
    email,
    name: {
      first: firstName,
      last: lastName
    },
    github,
    website
  };

  return JSON.stringify(body);
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/code/challenge/':
      const responseBody = createResponseBody('weienwong.93@gmail.com', 'Wei-En', 'Wong', 'https://github.com/weienwong', '');

      res.writeHead(201, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(responseBody);

      break;
    default:
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end();

  }
});

module.exports = {
  createResponseBody
}

server.listen(PORT_NUMBER, () => {
  console.log(`Server listening to port ${PORT_NUMBER}`);
});
