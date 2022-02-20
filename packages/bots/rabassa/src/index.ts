import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: join(process.cwd(), 'packages/bots/rabassa/.env') });

import './app/bots-rabassa';
