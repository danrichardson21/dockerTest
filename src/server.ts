import * as express from 'express';
import * as bodyParser from 'body-parser';
import { inject, injectable, postConstruct} from 'inversify';
import { SimpleService } from './simple.service';

@injectable()
export class Server {

    private app: express.Application;
    private service: SimpleService;
    
    constructor(@inject('simple.service') service: SimpleService) {
        this.app = express();
        this.app.set("port", process.env.port || 3000);
        this.service = service;
    }

    @postConstruct()
    public startServer(): void {
        const router = express.Router();

        this.service.init(router);

        this.app.use(bodyParser.json());
        this.app.use(router);
        this.app.listen(this.app.get("port"), () => {
            console.log('server started');
        });
    }

}