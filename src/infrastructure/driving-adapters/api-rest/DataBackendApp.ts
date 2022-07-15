import {Server} from './Server'


// get server. Prepare and... launch!!
export class DataBackendApp {
    server?: Server

    async start (): Promise<void> {
        const port : string = process.env.PORT ?? '4001'
        this.server = new Server(port)
        return await this.server.listen()
    }

    async stop (): Promise<void> {
        return await this.server?.stop()
    }
}