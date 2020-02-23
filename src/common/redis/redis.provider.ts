import Redis from 'ioredis';

const config = require(`./redisConfig/redis.${process.env.NODE_ENV}`);
const redis = new Redis(config);

export const redisProvider = {
  provide: 'RedisService',
  useValue: redis
};
