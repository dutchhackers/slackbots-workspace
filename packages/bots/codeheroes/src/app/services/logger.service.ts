import { singleton } from 'tsyringe';

@singleton()
export class LoggerService {
  constructor() {
    console.log('logger service constructor');
  }

  log(message: string) {
    console.log(`${new Date().toISOString()} ${message}`);
  }

  debug(message: string) {
    console.log(`${new Date().toISOString()} ${message}`);
  }
}
