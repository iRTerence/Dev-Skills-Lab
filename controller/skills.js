var express = require('express');
var router = express.Router();
var skills = require('../models/skills');

function id(req, res, next) {
    res.send('lmao')
  }

  function addPage (req, res, next) {
    res.render('skill/addskill')
  }


  function index(req, res, next) {
    res.render('skill/index', {skills: skills.getAll()
    })
  
  }

  function addSkill(req,res)  {
    // console.log(req.body.newskill)
      skills.getAll().push(req.body.newskill)
      res.redirect('/skills')
    }

    function showId(req, res, next) {
      let { id } = req.params
      res.render('skill/show', {
          skill: skills.getId(id),
          id: req.params
      })
      
    }
    function showEdit (req,res) {
      const skill =  skills.getAll()
      let {id} = req.params
      let placeholder = skills[{id}.id]
      res.render('skill/edit', {
        skill: skill[id],
        id: req.params
      })
    }
    function edit (req,res)  {
      const { id } = req.params
      const skill =  skills.getAll()
      let nSkill = req.body.editskill
      skill[{id}.id] = nSkill
      res.redirect('/skills')
    }

    function del (req,res) {
      const { id } = req.params
      const skill =  skills.getAll()
      const idx = skill.findIndex(c => skill[c] === skill[{id}.id]);
      skill.splice(idx, 1);
      res.redirect('/skills')
    }

module.exports = {
    id,
    index,
    addPage,
    addSkill,
    showId,
    showEdit,
    edit,
    del,
}

