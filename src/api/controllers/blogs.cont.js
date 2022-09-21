const { updateBlogs, blogs, blog } = require('../repositories/blogs.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteBlogs = async (req, res) => {
    try {
        await updateBlogs(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getBlogs = async (req, res) => {
    try {
        const { limit, offset, search } = req.body;
        const rows = await blogs(limit, offset, search);
        if (rows.length == 0) {
            throw new Error("Not found")
        }
        return __SSR(res, "Blogs", { rows })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const data= await blog(id);
        return __SSR(res, "Blog", data)
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

module.exports = {
    createUpdateDeleteBlogs, getBlogs, getBlog
}