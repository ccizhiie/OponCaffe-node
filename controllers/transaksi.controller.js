const transaksiModel = require(`../models/index`).transaksi

const Op = require(`sequelize`).Op

exports.getAllTransaksi = async (request, response) => {
   
    let transaksis = await transaksiModel.findAll()
    return response.json({
        success: true, 
        data: transaksis,
        message: `All Transaksis have been loaded`
    })
}


exports.findTransaksi = async (request, response) => {
    
    let keyword = request.body.keyword

    
    let transaksis = await TransaksiModel.findAll({
        where: {
            [Op.or]: [
                { id: { [Op.substring]: keyword } },
                { tgl_transaksi: { [Op.substring]: keyword } },
                { id_user: { [Op.substring]: keyword } },
                { id_meja: { [Op.substring]: keyword } },
                { nama_pelanggan: { [Op.substring]: keyword } },
                { status: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true, 
        data: transaksis,
        message: `All Transaksis have been loaded`
    })
} 


exports.addTransaksi = (request, response) => {

    let newTransaksi = {
        tgl_transaksi: request.body.tgl_transaksi, 
        id_user: request.body.id_user,
        id_meja: request.body.id_meja,
        status: request.body.status
}


transaksiModel.create(newTransaksi)
    .then(result => {

 return response.json({
    success: true,
    data: result,
    message: `New Transaksi has been inserted`
})
})
.catch(error => {

    return response.json({
        success: false, 
        message: error.message
})
})
}

exports.updateTransaksi = (request, response) => {

let dataTransaksi = {
        tgl_transaksi: request.body.tgl_transaksi, 
        id_user: request.body.id_user,
        id_meja: request.body.id_meja,
        status: request.body.status
}

 
    let idTransaksi = request.params.id


    transaksiModel.update(dataTransaksi, { where: { id: idTransaksi } })
        .then(result => {

    return response.json({
    success: true,
    message: `Data Transaksi has been updated`
})
})
.catch(error => {

return response.json({
    success: false, 
    message: error.message
})
})
}


exports.deleteTransaksi = (request, response) => {

let idTransaksi = request.params.id

 transaksiModel.destroy({ where: { id: idTransaksi } })
.then(result => {
     
    return response.json({
    success: true,
    message: `Data Transaksi has been updated`
    })
    })
    .catch(error => {
    
    return response.json({
    success: false,
    message: error.message
})
})
}