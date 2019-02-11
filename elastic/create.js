const client = require("./connection");

client.indices
  .create({
    index: "iotdata"
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));
