import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getAvoById = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB()
    const ID = req.query.id
    const avo = await db.getById(ID as string)


    res.status(200).json(avo)
}

export default getAvoById