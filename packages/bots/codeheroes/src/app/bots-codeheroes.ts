import 'reflect-metadata';
import { container } from 'tsyringe';

import { PlayerService, TeamService } from './services';

const playerService = container.resolve(PlayerService);
const teamService = container.resolve(TeamService);

async function main() {
  console.log(`Running Bot`);

  const playersData = playerService.getAll();
  console.log(`Number of players: ${playersData.length}`);
  console.log(`Players: ${playersData.map(player => player.name).join(', ')}`);

  const teamsData = teamService.getAll();
  console.log(`Number of teams: ${teamsData.length}`);
  console.log(`Teams: ${teamsData.map(team => team.name).join(', ')}`);
}

main();
