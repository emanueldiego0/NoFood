'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');
const auth = require('../middlewares/authentication');
let _crtl = new controller();

//public
router.post('/autenticar', _crtl.autenticar);
router.post('/registrar', _crtl.post);

//auth requerida
router.get('/', auth, _crtl.get);
router.get('/:id', auth, _crtl.getById);
router.post('/', auth, _crtl.post);
router.put('/:id', auth, _crtl.put);
router.delete('/:id', auth, _crtl.delete);

module.exports = router;