import Rollbar from 'rollbar';

const rollbarConfig = {
    accessToken: 'd5c419a929244d08a86978e65f63e4d0',
    environment: 'testenv',
    revision: process.env.GITHUB_SHA,
};

const rollbar = new Rollbar(rollbarConfig);

export { rollbar };