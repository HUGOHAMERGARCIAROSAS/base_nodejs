const { response } = require("express");

const getUsers = (req, res = response) => {
    const { id, name} = req.query;
    res.json({
        message: 'get api',
        id,
        name
    });
};

const postUsers = (req, res = response) => {
    const {id,name} = req.body;
    res.json({
        message: 'post api',
        id,
        name
    });
}

const putUsers = (req, res = response) => {
    const {id} = req.params;
    res.json({
        message: 'put api',
        id
    });
}

const deleteUsers = (req, res = response) => {
    res.json({message: 'delete api'});
}



module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}