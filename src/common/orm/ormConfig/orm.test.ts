import path = require('path');
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions[] = [
  {
    type: 'mysql',
    name: 'xxx',
    host: 'xxx',
    port: 9999,
    username: 'root',
    password: 'xxx',
    database: 'db',
    entities: [path.join(__dirname, '../entity/**/*.entity.js')]
  }
];

module.exports = config.map(item => TypeOrmModule.forRoot(item));
