import {Request, Response} from 'express'

class HealthCheckController{
    public async check(req: Request, res: Response){
        return res.json("Meu amor é lindo")
    }

}

export default new HealthCheckController()