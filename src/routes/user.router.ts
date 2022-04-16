const express = require('express');
export const router = express.Router();
import { testConnection } from "../controllers/user.controller";

router.get('/test', testConnection);
