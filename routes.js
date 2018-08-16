import express from 'express'
import ThLotory from './controllers/thlottory'
const router = express.Router();

router.get('/api', ThLotory);


module.exports = router;
