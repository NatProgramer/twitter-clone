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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@libsql/client");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
let PostsService = class PostsService {
    constructor(configService) {
        this.configService = configService;
    }
    async getPosts() {
        const tursoClient = (0, client_1.createClient)({
            url: process.env.DATABASE_URL ?? '',
            authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
        });
        const posts = await tursoClient.execute('SELECT * FROM Posts');
        return posts.rows.map((post) => {
            return {
                mainText: post[0],
                id: post[1],
                userId: post[2],
                createdAt: post[3],
                updatedAt: post[4],
            };
        });
    }
    async createPost(content, userId) {
        const tursoClient = (0, client_1.createClient)({
            url: process.env.DATABASE_URL ?? '',
            authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
        });
        const createdDate = new Date().getTime();
        tursoClient.execute({
            sql: `INSERT INTO Posts VALUES (?, ?, ?, ?, ?)`,
            args: [content, (0, crypto_1.randomUUID)(), userId, createdDate, 0],
        });
        return common_1.HttpStatus.OK;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PostsService);
//# sourceMappingURL=posts.service.js.map