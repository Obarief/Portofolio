const UsersModel = require('../models/users')

const getAllUsers = async (req,res) => {
    try{
        const [data] = await UsersModel.getAllUsers();
        // dalam execute mengembalikan nilai rows dan fields maka hanya mengambil rows lalu diubah rows menjadi data
        res.status(200).json({
            message: "GET all users success",
            data: data
        })

    }catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewUsers = async (req, res) => {
    const {body} = req;
    if(!body.name || !body.email || !body.address){
        return res.status(400).json({
            message: 'Anda Menginputkan Data Yang Salah',
            data: null
        })
    }
    try {
        await UsersModel.createNewUsers(body);
        res.status(201).json({
            message: "Create new users success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateUsers = async (req,res) => {
    const {id} = req.params
    const {body} = req
    try {
        await UsersModel.updateUsers(body, id)
        res.status(200).json({
            message: "UPDATE users success",
            data: {
                ID: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteUsers = async (req, res) => {
    const {id} = req.params
    try {
        await UsersModel.deleteUsers(id);
        res.status(200).json({
            message: "DELETE users success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}