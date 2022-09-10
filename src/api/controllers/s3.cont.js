const { __SSR, __SFR } = require('../../services/req-res.service')

const {S3} = require("aws-sdk");
const s3bucket = new S3({
    accessKeyId: 'AKIAZKYXAHB4WE2IOGJC',
    secretAccessKey: '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',
    region: 'us-east-1'
});


const createImageUrl = async function (req, res) {
    try {
        if (!req.files) {
            throw new Error("Something went wrong while uploading file.");
        } else {
            let file = req.files.file;
            let name = file.name;
            let name_arr = name.split(".");
            let ext = name_arr[name_arr.length - 1];
            let new_name = new Date() + "." + ext;

            const params = {
                Bucket: "renoguru-dev",
                // Key: file.name,
                Key: new_name,
                Body: file.data,
                ContentType: file.mimetype,
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