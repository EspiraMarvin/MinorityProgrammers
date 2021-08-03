import dbConnect from "../../../server/utils/dbConnect";
const { Dao, Social } = require('../../../server/models/Dao')

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                // find all the Daos in our database with their respective socials
                let data = []
                const socials = await  Social.find({})
                const daos = await Dao.find({}).map(daos => {
                   daos.forEach((dao ) => {
                       const daoId = JSON.stringify(dao._id)
                       socials.filter((social) => {
                           if (JSON.stringify(social['_id']) === daoId){
                               let daoInfo = { dao, social }
                               data.push(daoInfo)
                           }
                       })
                    })
                    return data
                })
                res.status(200).json({ success: true, data: data })

            }catch (e) {
                res.status(400).json({ success: false, message: e.message })
            }
            break;
        case 'POST':
            try {

                const dao = await Dao.create(req.body)
                // get dao id to be used to reference social media document/model
                const daoId = dao._id

                const social = new Social({
                    _id: daoId,
                    twitter_handle: req.body.twitter_handle,
                    github_organization_handle: req.body. github_organization_handle,
                    telegram_handle: req.body.telegram_handle,
                    linkedin_company_name: req.body.linkedin_company_name,
                    discord_link: req.body.discord_link,
                    twitter_followers: req.body.twitter_followers
                })
                social.save()

                res.status(201).json({ success: true, dao: dao, social: social })
            }catch (e) {
                res.status(400).json({ success: false, error: e, errorMessage: e.message })
            }
            break;
        default:
            res.status(400).json({ success: false, error : res.error})
            break;
    }
}

