import dbConnect from "../../../server/utils/dbConnect";
import Dao from '../../../server/models/Dao'
import Social from '../../../server/models/Social'

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                // find all the Daos in our database
                const daos = await Dao.find({})

                res.status(200).json({ success: true, data: daos})

            }catch (e) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
              // const dao = await Dao.create(req.body)
              const dao =  new Dao(req.body)
              //   await dao.save()
                console.log('daooooooooooooo', dao)

                const daoId = dao._id
                console.log('daoIdddddddd', daoId)
                const daoSocial = dao.social_media
                console.log('daoIdddddddd', daoSocial)

                const social = new Social(req.body)
                console.log('sociallll', social)

                res.status(201).json({ success: true, data: dao })
            }catch (e) {
                res.status(400).json({ success: false, error: e.message })
            }
            break;
        default:
            res.status(400)
            break;
    }
}

