import Rollbar from 'rollbar';

const rollbarConfig = {
    accessToken: '1d88de51167544d1957c05dc46c79a18',
    environment: 'testenv',
    revision: process.env.GITHUB_SHA,
};

const rollbar = new Rollbar(rollbarConfig);

export { rollbar };