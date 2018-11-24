import { schema, normalize } from 'normalizr';

const Client = new schema.Entity('clients');

const Record = new schema.Entity('records', {
  owner: Client,
});

const News = new schema.Entity('news', {
  contribution: [Record],
});

const Stack = new schema.Entity('stacks', {
  news: [News],
});

const Event = new schema.Entity('events', {
  stack: [Stack],
  subscribers: [Client],
});

export { Client, Record, News, Stack, Event, normalize };
