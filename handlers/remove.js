'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event) => {
    const params = {
        TableName: 'products',
        Key: {
            id: event.pathParameters.id
        }
    };
    return dynamoDb.delete(params).promise();
};
