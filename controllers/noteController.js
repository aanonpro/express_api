const noteModel = require('../models/note');
const userModel = require('../models/user');


const createNote = async (req, res) => {
   

    const user = await userModel.findOne();
    // console.log(user.id);

    const {title, description} = req.body;

    const newNote = new noteModel({
        title : title,
        description : description,
        user_id : user.id,
    });

    try {
        
        await newNote.save();
        res.status(201).json(newNote);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "something went wrong"});
    }

}

const updateNote = async (req, res) => {
    
    const id = req.params.id;

    const user = await userModel.findOne();

    const {title, description} = req.body;

    const newNote = {
        title: title,
        description: description,
        user_id: user.id,
    }

    try {
        
        await noteModel.update(newNote,{where:{id: id}});
        res.status(200).json(newNote);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "something went wrong"});
    }

}

const deleteNote = async (req, res) => {

    const id = req.params.id;
    try {
        
        const note = await noteModel.destroy({where: {id: id}});
        res.status(202).json(note);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "something went wrong"});
    }

}

const getNote = async (req, res) => {
    
    try {
        
        const notes = await noteModel.findAll({user_id: req.user_id});
        res.status(200).json(notes);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "something went wrong"});
    }

}

module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getNote,
}