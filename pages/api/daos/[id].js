import dbConnect from "../../../server/utils/dbConnect";
import { Dao, Social } from '../../../server/models/Dao'

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method){
        case 'GET':
            try {
                const dao = await Dao.findById(id)
                if (!dao){
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true , data: dao})

            } catch (e){
                return res.status(400).json({ success: false , message: e.message })
            }
            break;
        case 'PUT':
            try {
                const dao = await Dao.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if (!dao){
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true , data: dao})

            } catch (e) {
                return res.status(400).json({ success: false , message: e.message })
            }
            break;
        case 'DELETE':
            try {
                const deletedDao = await Dao.deleteOne( {_id: id})
                const deleteDaoSocial = await Social.deleteOne({_id: id})

                if (!deletedDao || !deleteDaoSocial) {
                    return  res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true , data: {}})

            } catch (e) {
                return res.status(400).json({ success: false , message: e.message })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }

}
