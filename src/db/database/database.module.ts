import { Global, Module } from '@nestjs/common';
import { DRIZZLE, DATABASE_URL } from './database.constants';
import { drizzle } from 'drizzle-orm/node-mssql';
import * as schema from '../schemas/index';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: () => {
        return drizzle(DATABASE_URL, { schema });
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
