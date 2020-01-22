const express = require('express');

const Knex = require('Knex');

const knexConfigeration = {
    client: 'sqlite3',
    connection: {
        filename: '/data/car-dealer.db3'
    },
    useNullAsDefault: true,
}

const db = knex(knexConfigeration)

