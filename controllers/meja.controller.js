const mejaModel = require(`../models/index`).meja

const Op = require(`sequelize`).Op

exports.getAllMeja = async (request, response) => {
   
    let mejas = await mejaModel.findAll()
    return response.json({
        success: true, 
        data: mejas,
        message: `All Mejas have been loaded`
    })
}


exports.findMeja = async (request, response) => {
    
    let keyword = request.body.keyword

    
    let mejas = await MejaModel.findAll({
        where: {
            [Op.or]: [
                { id: { [Op.substring]: keyword } },
                { nomor_meja: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true, 
        data: mejas,
        message: `All Mejas have been loaded`
    })
} 


exports.addMeja = (request, response) => {

    let newMeja = {
        nomor_meja: request.body.nomor_meja
}


mejaModel.create(newMeja)
    .then(result => {

 return response.json({
    success: true,
    data: result,
    message: `New Meja has been inserted`
})
})
.catch(error => {

    return response.json({
        success: false, 
        message: error.message
})
})
}

exports.updateMeja = (request, response) => {

let dataMeja = {
    nomor_meja: request.body.nomor_meja
}

    let idMeja = request.params.id


    mejaModel.update(dataMeja, { where: { id: idMeja } })
        .then(result => {

    return response.json({
    success: true,
    message: `Data Meja has been updated`
})
})
.catch(error => {

return response.json({
    success: false, 
    message: error.message
})
})
}


exports.deleteMeja = (request, response) => {

let idMeja = request.params.id

 mejaModel.destroy({ where: { id: idMeja } }).thenm 
(result => {
     
    return response.json({
    success: true,
    message: `Data Meja has been updated`
    })
    })
    .catch(error => {
    
    return response.json({
    success: false,
    message: error.message
})
})
}