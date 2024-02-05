import { Value } from '@libsql/client';
export interface User {
    username: Value;
    user_password: Value;
    user_id: Value;
    user_avatar: Value;
    createdAt: Value;
}
