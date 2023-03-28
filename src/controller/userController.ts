import {Request, Response} from 'express'

class UserController{
    public async find(req: Request, res: Response){
        return res.json("Gabriel")
    }
}

export default new UserController()