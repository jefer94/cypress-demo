const { exec, copyFile } = require('./utils')
const path = require('path')
const fs = require('fs')

async function gitClone() {
    await exec('git clone https://github.com/breatheco-de/apiv2 api');
    process.chdir('api');
    await exec('git checkout .');
    await exec('git branch development');
    process.chdir('..');
}

function configureApi() {
    process.chdir('api');
    fixFilePaths = ['scripts/docker-entrypoint.sh']
    copyFile('.env.example', '.env');

    for (filePath of fixFilePaths) {
        absoluteFilePath = path.resolve(__dirname, '../api', filePath)
        const data = fs.readFileSync(absoluteFilePath, 'utf8')

        fs.writeFileSync(filePath, data)
    }

    process.chdir('..');
}

async function docker() {
    process.chdir('api');
    await exec('docker build ./ -t breathecode --rm=false');
    await exec('docker-compose up -d');
    process.chdir('..');
}

async function run() {
    const cypressCommand = process.argv.slice(2)[0];
    exec(`node ${path.resolve(__dirname, '../node_modules/react-scripts/bin/react-scripts.js')} start`);
    await exec(`node ${path.resolve(__dirname, '../node_modules/cypress/bin/cypress')} ${cypressCommand}`);
}

async function main() {
    // await gitClone();
    // configureApi();
    // await docker();
    await run();
}

main()
