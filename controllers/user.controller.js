const userModel = require(`../models/index`).user

const Op = require(`sequelize`).Op

exports.getAllUser = async (request, response) => {
   
    let users = await userModel.findAll()
    return response.json({
        success: true, 
        data: users,
        message: `All Users have been loaded`
    })
}


exports.findUser = async (request, response) => {
    
    let keyword = request.body.keyword

    
    let users = await UserModel.findAll({
        where: {
            [Op.or]: [
                { id: { [Op.substring]: keyword } },
                { nama_user: { [Op.substring]: keyword } },
                { role: { [Op.substring]: keyword } },
                { username: { [Op.substring]: keyword } },
                { password: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true, 
        data: users,
        message: `All Users have been loaded`
    })
} 


exports.addUser = (request, response) => {

    let newUser = {
        nama_user: request.body.nama_user, 
        role: request.body.role,
        username: request.body.username,
        password: request.body.password
}


userModel.create(newUser)
    .then(result => {

 return response.json({
    success: true,
    data: result,
    message: `New User has been inserted`
})
})
.catch(error => {

    return response.json({
        success: false, 
        message: error.message
})
})
}

exports.updateUser = (request, response) => {

let dataUser = {
        nama_user: request.body.nama_user, 
        role: request.body.role,
        username: request.body.username,
        password: request.body.password
}

    let idUser = request.params.id


    userModel.update(dataUser, { where: { id: idUser } })
        .then(result => {

    return response.json({
    success: true,
    message: `Data User has been updated`
})
})
.catch(error => {

return response.json({
    success: false, 
    message: error.message
})
})
}


exports.deleteUser = (request, response) => {

let idUser = request.params.id

 userModel.destroy({ where: { id: idUser } }).thenm 
(result => {
     
    return response.json({
    success: true,
    message: `Data User has been updated`
    })
    })
    .catch(error => {
    
    return response.json({
    success: false,
    message: error.message
})
})
}