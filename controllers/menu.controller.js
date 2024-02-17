const menuModel = require(`../models/index`).menu

const Op = require(`sequelize`).Op

exports.getAllMenu = async (request, response) => {
   
    let menus = await menuModel.findAll()
    return response.json({
        success: true, 
        data: menus,
        message: `All Menus have been loaded`
    })
}


exports.findMenu = async (request, response) => {
    
    let keyword = request.body.keyword

    
    let menus = await MenuModel.findAll({
        where: {
            [Op.or]: [
                { id: { [Op.substring]: keyword } },
                { nama_menu: { [Op.substring]: keyword } },
                { jenis: { [Op.substring]: keyword } },
                { deskripsi: { [Op.substring]: keyword } },
                { gambar: { [Op.substring]: keyword } },
                { harga: {[Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true, 
        data: menus,
        message: `All Menus have been loaded`
    })
} 


exports.addMenu = (request, response) => {

    let newMenu = {
        nama_menu: request.body.nama_menu, 
        jenis: request.body.jenis,
        deskripsi: request.body.deskripsi,
        gambar: request.body.gambar,
        harga: request.body.harga
}


menuModel.create(newMenu)
    .then(result => {

 return response.json({
    success: true,
    data: result,
    message: `New Menu has been inserted`
})
})
.catch(error => {

    return response.json({
        success: false, 
        message: error.message
})
})
}

exports.updateMenu = (request, response) => {

let dataMenu = {
    nama_menu: request.body.nama_menu, 
    jenis: request.body.jenis,
    deskripsi: request.body.deskripsi,
    gambar: request.body.gambar,
    harga: request.body.harga
}

    let idMenu = request.params.id


    menuModel.update(dataMenu, { where: { id: idMenu } })
        .then(result => {

    return response.json({
    success: true,
    message: `Data Menu has been updated`
})
})
.catch(error => {

return response.json({
    success: false, 
    message: error.message
})
})
}


exports.deleteMenu = (request, response) => {

let idMenu = request.params.id

 menuModel.destroy({ where: { id: idMenu } }).thenm 
(result => {
     
    return response.json({
    success: true,
    message: `Data Menu has been updated`
    })
    })
    .catch(error => {
    
    return response.json({
    success: false,
    message: error.message
})
})
}