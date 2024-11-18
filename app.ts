import express, {Express, Request, Response} from 'express'
import * as root from './controllers/root'

const app: Express = express()

app.use('/api', root.index)

app.all('/*', (req: express.Request, res: express.Response) => {
    res.status(404).send({msg: 'Not found'})
})

export default app