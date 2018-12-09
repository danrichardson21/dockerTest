import { Container } from 'inversify';
import 'reflect-metadata';
import { Server } from './server';
import { SimpleService } from './simple.service';

const container = new Container();
container.bind<Server>(Server).toSelf();
container.bind<SimpleService>('simple.service').to(SimpleService);

const server = container.get<Server>(Server);