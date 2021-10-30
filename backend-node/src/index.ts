import { App } from './server'

async function main() {
    const app = new App(3000);
    await app.listen();
}

main();