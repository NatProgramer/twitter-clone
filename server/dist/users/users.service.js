"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const client_1 = require("@libsql/client");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
let UsersService = class UsersService {
    constructor(configService) {
        this.configService = configService;
    }
    async getUsers() {
        const tursoClient = (0, client_1.createClient)({
            url: process.env.DATABASE_URL ?? '',
            authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
        });
        const users = await tursoClient.execute('SELECT * FROM Users');
        return users.rows.map((user) => {
            return {
                username: user[0],
                user_password: user[1],
                user_id: user[2],
                user_avatar: user[3],
                createdAt: user[4],
            };
        });
    }
    createUser(username, userPassword, userAvatar) {
        const tursoClient = (0, client_1.createClient)({
            url: process.env.DATABASE_URL ?? '',
            authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
        });
        const createdUserDate = new Date().getTime();
        tursoClient.execute({
            sql: 'INSERT INTO Users VALUES (?, ?, ?, ?, ?)',
            args: [username, userPassword, (0, crypto_1.randomUUID)(), userAvatar, createdUserDate],
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map