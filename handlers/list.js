'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event) => {
    return dynamoDb.scan({ TableName: 'products' }).promise();
};
