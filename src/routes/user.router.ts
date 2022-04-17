const express = require('express');
export const router = express.Router();
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

import { testConnection, signUp } from "../controllers/user.controller";

router.use([jsonParser]);

router.get('/test', testConnection);
router.post('/signUp', signUp);
