"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    });
    await app.listen(configService.get('PORT'));
    console.log(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map