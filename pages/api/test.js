import dbConnect from "../../server/utils/dbConnect";

dbConnect();

export default async (req, res) => {
    res.json({ test: 'test'})
}
