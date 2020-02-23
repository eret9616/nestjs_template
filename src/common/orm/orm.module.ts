import { Module } from '@nestjs/common';

const ormConfig = require(`./ormConfig/orm.${process.env.NODE_ENV}`);

@Module({
  imports: ormConfig
})
export class OrmModule {}
