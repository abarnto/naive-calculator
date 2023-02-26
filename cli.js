const calculator = require('./lib/main.js');

(() => {
    const [,,operation, ...args] = process.argv;
    if (['--help', '-h'].includes(operation)) {
        console.log(`
        Usage: yarn calculate OPERATION ARG1 ARG2 [...ARGN]
        Allowed operations:
            - sum
            - substraction
            - multiply
            - divide (only )
        `);
        return;
    }
    try {
        const result = calculator[operation](...args);
        const logArgs = operation === 'divide' ? `${args.slice(0, 2).join(' with ')}` : `[${args.join(',')}]`
        console.log(`
        If you ${operation} ${logArgs} the result is: ${JSON.stringify(result)}.
        `);
    } catch {
        console.error('ILLEGAL OPERATION. Run `yarn calculate --help` for more info.');
    }
})();
