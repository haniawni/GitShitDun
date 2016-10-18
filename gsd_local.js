// var argv = require('yargs')
//     .usage('Usage: $0 <command> [options]')
//     .command('count', 'Count the lines in a file')
//     .example('$0 count -f foo.js', 'count the lines in the given file')
//     .alias('f', 'file')
//     .nargs('f', 1)
//     .describe('f', 'Load a file')
//     .demand(1, ['f'])
//     .help('h')
//     .alias('h', 'help')
//     .epilog('copyright 2015')
//     .argv;
var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')

    .commandDir('scripts')
    .demand(1)
    .help()
    .argv
