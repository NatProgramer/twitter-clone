import { Value } from '@libsql/client/.';

export interface Post {
  id: Value;
  mainText: Value;
  createdAt: Value;
  updatedAt: Value;
  userId: Value;
}
