import { bootstrap, runMigrations } from '@vendure/core';
import { config } from './vendure-config';
import express from 'express';
const app = express();

app.set('trust proxy', true);

runMigrations(config)
    .then(() => bootstrap(config))
    .catch(err => {
        console.log(err);
    });
