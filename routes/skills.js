var express = require('express');
const app = require('../app');
var router = express.Router();
var skills = require('../models/skills');
const skillsCtrl = require('../controller/skills')
router.use(express.urlencoded({ extended: false }));


router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.addPage)

router.post('/', skillsCtrl.addSkill)

router.get('/:id', skillsCtrl.showId)
  
router.get('/:id/edit', skillsCtrl.showEdit)

router.patch('/:id/', skillsCtrl.edit)

router.delete('/:id', skillsCtrl.del)

module.exports = router;


