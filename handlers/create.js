'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (event) => {
    const body = JSON.parse(event.body);
    const data = {
        name: body.name,
        id: uuid.v1(),
        addedAt: Date.now(),
    };

    const params = {
        TableName: 'products',
        Item: data
    };
    return dynamoDb.put(params).promise()
        .then(result => params.Item)
};
