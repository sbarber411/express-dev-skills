const Skill = require('../models/skill')


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function deleteSkill(req, res){

    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res){
    console.log('create controller function is firing');
    console.log(req.body, "<- req.body, is the contents of the form")
    
    Skill.create(req.body)

    res.redirect('/skills')
}

function newSkill(req, res){
    res.render('skills/new')
}


function show(req, res){
    console.log(req.params, " <- req.params");


    const skillFromDB = Skill.getOne(req.params.id)
    

    res.render('skills/show', {skill: skillFromDB})
}

function index (req, res, next){
    console.log(req.test, ' <- req.test')

    const allSkills = Skill.getAll();
    
    res.render('skills/index', {skills: allSkills})
 }
