import { autoInjectable } from 'tsyringe';
import { LoggerService, TeamService } from '../services';
import { BaseController } from './base.controller';

@autoInjectable()
export class TeamController extends BaseController {
  constructor(private teamService?: TeamService, private logger?: LoggerService) {
    super();

    this.onInit();
  }

  private onInit() {
    this.logger.debug('onInit');
  }
}
