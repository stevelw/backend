import * as express from 'express'

export function index(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).json({working: true})
}