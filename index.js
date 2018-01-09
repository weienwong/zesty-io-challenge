const http = require('http');

const PORT_NUMBER = 3000;

const createResponseBody = (email, firstName, lastName, github_repo_link, website) => {
  const body = {
    email,
    name: {
      first: firstName,
      last: lastName
    },
    github_repo_link,
    website
  };

  return JSON.stringify(body);
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/code/challenge/':
      const responseBody = createResponseBody('weienwong.93@gmail.com', 'Wei-En', 'Wong', 'https://github.com/weienwong/zesty-io-challenge', 'https://zestyio-code-challenge.herokuapp.com/');

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

const port = process.env.PORT || PORT_NUMBER;

server.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
