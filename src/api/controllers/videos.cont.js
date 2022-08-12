const { updateVideos, videos } = require('../repositories/videos.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteVideos = async (req, res) => {
    try {
        await updateVideos(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, "Erro while updating data")
    }
}

const getVideos = async (req, res) => {
    try {
        const {limit, offset, search} = req.body
        const rows = await videos(limit, offset, search);
        if (rows.length == 0){
            throw new Error("Not found")
        }
        return __SSR(res, "Videos", { rows })
    } catch (error) {
        return __SFR(res, 403, "Erro while updating data")
    }
}

module.exports = {
    createUpdateDeleteVideos, getVideos
}