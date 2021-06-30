//only connect to mysql

const mysql = require("mysql"); //activate mysql functions that we have in library

//properties for connection
const properties = {
    host: "34.126.172.116",
    user: "root",
    password: "fintechsglab",
    port: 3306,
    database: "market",
  };

//define connection with the properties defined

let connection = mysql.createConnection(properties);

//to connect to server that is defined by the properties
//simple error message
connection.connect((error) => {
    if (error) {
      console.error("Connection to MySQL failed! \n" + error); //same as console.log - for normal print output, console.error - for error output
    } else {
      console.log("Connected to MySQL!");
    }
  });

// execute query - result or error
/* connection.query(
    `select amount from transactions`, // mysql query in string format
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result); //use simple array format the look for specific value
      }
    }
  ); */

  module.exports = {
    connection,
};