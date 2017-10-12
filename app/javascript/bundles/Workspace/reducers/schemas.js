import { schema, normalize } from 'normalizr';

const Task = new schema.Entity('tasks');

const Column = new schema.Entity('columns', {
  tasks: [Task],
});

const Board = new schema.Entity('boards', {
  columns: [Column],
});

export const normalizeBoard = data => normalize(data, Board);

export const normalizeBoards = data => normalize(data, [Board]);

export const normalizeColumn = data => normalize(data, Column);

export const normalizeTask = data => normalize(data, Task);
