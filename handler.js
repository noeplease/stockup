'use strict';

const addProduct = require('./handlers/create');
const viewProduct = require('./handlers/view');
const listProducts = require('./handlers/list');
const removeProduct = require('./handlers/remove');

const create = (event, context, callback) => {
    const data = JSON.parse(event.body);
    addProduct(data)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

const list = (event, context, callback) => {
    listProducts()
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

const view = (event, context, callback) => {
    viewProduct(event.pathParameters.id)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};


const remove = (event, context, callback) => {
    removeProduct(event.pathParameters.id)
        .then(result => {
            const response = { body: JSON.stringify({message: 'Product removed.'}) };
            callback(null, response);
        })
        .catch(callback);
};


module.exports = {
    create,
    view,
    remove,
    list
};
