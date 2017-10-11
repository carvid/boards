import { schema, normalize } from 'normalizr';

const Board = new schema.Entity('boards');
// const ConsumerFieldValue = new schema.Entity('consumerFieldValues');
// const Purchase = new schema.Entity('purchases', {
//   memberships: [Membership],
//   consumerFieldValues: [ConsumerFieldValue],
// });

export const normalizeBoard = data => normalize(data, Board);

export const normalizeBoards = data => normalize(data, [Board]);
