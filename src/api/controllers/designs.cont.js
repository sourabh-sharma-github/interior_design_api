const { UserDesignLikes, UserDesignViews, Designs, DesignsImages, Designer, DesignerReviews, DesignerReviewsImages, DesignTrendingTypes } = require('../../models');
const { __SSR, __SFR } = require('../../services/req-res.service')
const { Op, literal } = require("sequelize");

const createDesigner = async (req, res) => {
    try {
        await Designer.create(req.body)
        return __SSR(res, "Designer added suceessfully!");
    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

const getDesigner = async (req, res) => {
    try {
        const { designerId } = req.body;
        const designer = await Designer.findOne({
            where: {
                id: designerId
            },
            attributes: {
                exclude: ['updatedAt', 'deletedAt']
            }
        })

        return __SSR(res, "Designer", { data: designer });
    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

const createDesignerReview = async (req, res) => {
    try {
        const { id } = req.user;
        let { serviceRendered, designConcept, qualityOfRenovation, valueForMoney, images } = req.body;

        // const designer = await Designer.count({
        //     where: {
        //         id: designerId
        //     }
        // })+
        // if (!designer){
        //     throw new Error('Designer not found on given id')
        // }

        const average = Math.round((serviceRendered + designConcept + qualityOfRenovation + valueForMoney) / 4);
        const review = await DesignerReviews.create({
            userId: id,
            average,
            ...req.body
        })

        if (images && images.length) {
            images.forEach((image) => {
                image.designerReviewId = review.id
            })
            await DesignerReviewsImages.bulkCreate(images)
        }

        return __SSR(res, "Review added successfully");

    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

const getDesignerReviews = async (req, res) => {
    try {
        const { designerId, limit, offset } = req.body;

        const { count, rows } = await DesignerReviews.findAndCountAll({
            limit,
            offset,
            where: { designerId },
            attributes: {
                exclude: ['updatedAt', 'deletedAt']
            }
        })

        return __SSR(res, "Designer reviews", { count, rows });
    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

const likeUnlikeDesign = async (req, res) => {
    try {
        const { id } = req.user;
        const { designId } = req.body;
        const where = { userId: id, designId }

        const designCount = await Designs.count({
            where: { id: designId }
        })
        if (designCount == 0) {
            throw new Error('Design not found on given designId')
        }

        const designLike = await UserDesignLikes.findOne({ where })
        if (designLike) {
            await UserDesignLikes.destroy({ where, force: true })
        } else {
            await UserDesignLikes.create(where)
        }
        await Designs.update({
            likes: literal(designLike ? 'likes - 1' : 'likes + 1')
        }, { where: { id: designId } });
        const msg = designLike ? 'Design unliked.' : 'Design liked';
        return __SSR(res, msg)
    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

const viewDesign = async (req, res) => {
    try {
        const { id } = req.user;
        const { designId } = req.body;
        const where = { userId: id, designId };
        const designCount = await Designs.count({
            where: { id: designId }
        })
        if (designCount == 0) {
            throw new Error('Design not found on given designId')
        }
        const designView = await UserDesignViews.findOne({ where })
        if (!designView) {
            await UserDesignViews.create(where)
            await Designs.update({
                likes: literal('views + 1')
            }, { where: { id: designId } });
        }

        return __SSR(res, "View added")
    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

const addDesign = async (req, res) => {
    try {
        let { designerId, images, trendingTypes } = req.body;
        const designerCount = await Designer.count({
            where: { id: designerId }
        })
        if (designerCount == 0) {
            throw new Error('Designer not found on given designId')
        }
        const design = await Designs.create({
            ...req.body,
            designerId
        })

        images.forEach((image) => {
            image.designId = design.id
        })
        await DesignsImages.bulkCreate(images)

        let arrayTrendingTypes = new Array;
        trendingTypes.forEach((t) => {
            arrayTrendingTypes.push({
                designId: design.id,
                type: t,
            })
        })
        await DesignTrendingTypes.bulkCreate(arrayTrendingTypes);

        return __SSR(res, "Design added");
    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

const getDesigns = async (req, res) => {
    try {
        const { designerId, propertyTypeId, trendingTypes } = req.body;

        let where = new Object;
        if (designerId) where['designerId'] = designerId;
        if (propertyTypeId) where['designerId'] = propertyTypeId;

        let include = [{
            model: DesignsImages,
            as: 'design_images',
            required: true
        }]

        if (trendingTypes && trendingTypes.length) {
            include.push({
                model: DesignTrendingTypes,
                as: 'trending_types',
                where: {
                    type: {
                        [Op.in]: trendingTypes
                    }
                },
                required: true
            })
        }

        const { count, rows } = await Designs.findAndCountAll({
            where,
            include
        })
        return __SSR(res, "Designs", {
            count, rows
        });


    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

const getDesigners = async (req, res)=>{
    try {

        const { count, rows } = await Designer.findAndCountAll()
        return __SSR(res, "Designers", {
            count, rows
        });
    } catch (error) {
        return __SFR(res, 400, error.message, error)
    }
}

module.exports = {
    likeUnlikeDesign, viewDesign, createDesigner, getDesigner, createDesignerReview,
    getDesignerReviews, addDesign, getDesigns, getDesigners
}