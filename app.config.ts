const pckgJson = require('./package.json');

const PROJECT_NAME = 'Simple-Vite-React-Ts-Template';

export default function generateGlobals(isProd: boolean) {
    const title = PROJECT_NAME;
    const appVersion = `Version-${pckgJson.version}`;

    const base = '/' + title;

    return {
        __TITLE__: JSON.stringify(title),
        __BASE__: JSON.stringify(base),
        __IS_PRODUCTION__: isProd,
        __APP_VERSION__: JSON.stringify(appVersion),
    };
}
