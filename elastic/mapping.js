const client = require("./connection");

client.indices
  .putMapping({
    index: "iotdata",
    type: "all",
    body: {}
  })
  .then(msg => {
    console.log(msg);
  })
  .catch(error => {
    console.log(error);
  });
