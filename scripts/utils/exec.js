const { spawn } = require('child_process');

module.exports = function exec(command='') {
    return new Promise((resolve) => {
        console.log(`>>> ${command}`)
        const [arg0, ...args] = command.split(' ')
        const child = spawn(arg0, args);

        child.stdout.setEncoding('utf8');
        child.stdout.on('data', (chunk) => {
            console.log(chunk)
        });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', (chunk) => {
            console.log(chunk)
        });

        child.on('close', (code) => {
            resolve()
        });
    })

}
