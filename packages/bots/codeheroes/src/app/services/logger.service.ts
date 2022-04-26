import { autoInjectable, singleton } from 'tsyringe';

// @singleton()
@autoInjectable()
export class LoggerService {
  constructor() {
    console.log('logger service constructor');
  }

  log(message: string) {
    console.log(`${new Date().toISOString()} ${message}`);
  }
}
