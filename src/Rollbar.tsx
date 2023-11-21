import Rollbar from 'rollbar';


const rollbarConfig: Rollbar.Configuration = {
    accessToken: 'd5c419a929244d08a86978e65f63e4d0',
    environment: 'testenv',
    // Otras opciones de configuración específicas de TypeScript
};

const rollbar = new Rollbar(rollbarConfig);


export { rollbar };