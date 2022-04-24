import { singleton } from 'tsyringe';

@singleton()
export class LoggerService {
  // constructor() {}

  log(message: string) {
    console.log(`${new Date().toISOString()} ${message}`);
  }
}
