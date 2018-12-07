'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria-controller');
const auth = require('../middlewares/authentication');

let _crtl = new controller();

router.get('/', auth, _crtl.get);
router.get('/:id', auth, _crtl.getById);
router.post('/', auth, _crtl.post);
router.put('/:id', auth, _crtl.put);
router.delete('/:id', auth, _crtl.delete);

module.exports = router;