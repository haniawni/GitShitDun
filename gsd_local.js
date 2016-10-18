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

    //.command('mindful', 'Launch repeating timer for mindfulness tracking',require())
    //.demand(1, ['t','np','ns'])

    .boolean('nopop')
    .describe('nopop','Disable Popups')
    .alias('np','nopop')

    .boolean('nosound')
    .describe('nosound','Disable Sound')
    .alias('ns','nosound')
    
    .describe('t','Inter-mindfulness-check interval')

    .nargs('t',1)
    .default('t',30)

    .alias('h','help')

    .argv
    //
    //.alias('m', 'mindful')
    //.example('$0 mindful -t repeat_time=30 -p=True', 'count the lines in the given file')



console.log(argv) 
console.log(argv.t)
console.log(argv.np)
console.log(argv.ns)  