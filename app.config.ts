const pckgJson = require('./package.json');

export default function generateGlobals(isProd: boolean) {
    return {
        title: 'App Title',
        baseUrl: `/`,
        isProd: isProd,
        appVersion: `Version-${pckgJson.version}`,
    };
}
