const { __SSR, __SFR } = require('../../services/req-res.service')

const {S3} = require("aws-sdk");
const s3bucket = new S3({
    accessKeyId: 'AKIAZKYXAHB4WE2IOGJC',
    secretAccessKey: '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',
    region: 'us-east-1'
});


const createImageUrl = async function (req, res) {
    try {
        console.error("req.files", req.files)
        if (!req.files) {
            throw new Error("Something went wrong while uploading file.");
        } else {
            const { file } = req.files;
            const { name, data, mimetype } = file;
            const name_arr = name.split(".");
            const ext = name_arr[name_arr.length - 1];
            const new_name = new Date() + "." + ext;

            const params = {
                Bucket: "renoguru-dev",
                Key: new_name,
                Body: data,
                ContentType: mimetype,
                ACL: 'public-read'
            };

            s3bucket.upload(params, function (err, data) {
                if (err) {
                    console.error("Error while uploading file:: ",  err );
                    throw new Error(err)
                }
                return __SSR(res,"Uploaded successfully", {
                    url: data.Location
                });
            });
        }
    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

module.exports = {
    createImageUrl
}