import { App } from '@slack/bolt';
import { container } from 'tsyringe';

export abstract class BaseController {
  #app: App;

  constructor() {
    this.#app = container.resolve<App>('app');
  }

  // protected get app() {
  //   return this.#app;
  // }

  protected registerEvent(eventName: string, handler: (...args: any[]) => Promise<void>) {
    console.log(`Registering event: ${eventName}`);
    this.#app.event(eventName, handler);
  }
}
