import * as express from "express";
import * as http from 'http';
import * as path from "path";

export class Server {
    public app: express.Application;

    public static start(port: number|string) {
        const server = new Server();
        const httpServer = http.createServer(server.app);
        httpServer.listen(port);
    }

    constructor() {
        this.app = express();
        this.config();
        this.api();
    }

    public api() {
    }

    public config() {
        const filePath = path.join(__dirname, "../client");
        this.app.use('/static', express.static(filePath));
        this.app.get('/', (request, response) => response.sendFile(path.join(filePath, "index.html")));
    }
}

Server.start(process.env.PORT || 8080);