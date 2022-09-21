const { create, enquiries } = require('../repositories/enquiry.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createEnquiry = async (req, res) => {
    try {
        const { id } = req.user;
        await create({
            userId: id,
            ...req.body
        });
        return __SSR(res, "enquiry submitted")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getEnquiries = async (req, res) => {
    try {
        const { limit, offset, search } = req.body;
        const { count, rows } = await enquiries(limit, offset, search);
        if (rows.length == 0) {
            throw new Error("Not found")
        }
        return __SSR(res, "Enquiries", { count, rows })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}


module.exports = {
    createEnquiry, getEnquiries
}