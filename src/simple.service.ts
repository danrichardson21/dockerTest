import { Router, Request, Response } from 'express';
import { injectable } from 'inversify';

@injectable()
export class SimpleService {

    public init(router: Router): void {
        router.get('/profile', (req, res) => {
            this.profile(req, res);
        });
    }

    private profile(req: Request, res: Response): void {
        const person: Person = {
            firstName: 'Dan',
            lastName: 'Richardson'
        };

        res.send(JSON.stringify(person));
    }

}


interface Person {
    firstName: string;
    lastName: string;
}