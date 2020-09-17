const express = require('express')
const router = express.Router()

router.route('/').get().post();
router.route('/:id').get().patch().delete();

module.exports=router