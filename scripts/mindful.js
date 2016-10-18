var moment = require('moment');
const notifier = require('node-notifier');
const path = require('path');
const open = require('open');


exports.command = 'mindful'
exports.aliases = 'm'
exports.desc = 'Launch repeating timer for mindfulness tracking'
exports.builder = (yargs) => yargs
    .usage('Usage: $0 mindful [options]')

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
    .help()

var timmy;
var interval;
exports.handler = function (argv) {
    interval  = argv.t;
    console.log("Starting Mindfulness Checks once every "+argv.t+"min")
    if(argv.ns){
        if(argv.np){
            console.log("Disabling both sound and popup. Dying now.")
            process.exit(1)

        }
        console.log('Disabling Sound')
    }
    if(argv.np){
        console.log("Disabling Popups")
    }

    timmy = setTimeout(mindfulCheck, 60*1000*interval)
}

function mindfulCheck() {
    console.log('Mindfulness Check! at '+moment().format('MMMM Do YYYY, h:mm:ss a'))
    mindNotify()
}

function mindNotify(){
    notifier.notify({
      title: 'Testwaff',
      message: 'Hello from node, Mr. User!',
      open: "https://docs.google.com/forms/d/e/1FAIpQLSdvMp55RKtcl55AATO1PkhOD9TPGNjrEBO1u5V3ciaQjs7Wwg/viewform",
      //icon: path.join(__dirname, 'coulson.jpg'), // Absolute path (doesn't work on balloons)
      sound: true, // Only Notification Center or Windows Toasters
      wait: true // Wait with callback, until user action is taken against notification
    }, function (err, response) {
        if(err) {
            throw err;
        }
      // Response is response from notification
    });
}

notifier.on('click', function (notifierObject, options) {
    // Triggers if `wait: true` and user clicks notification
    open('https://docs.google.com/forms/d/e/1FAIpQLSdvMp55RKtcl55AATO1PkhOD9TPGNjrEBO1u5V3ciaQjs7Wwg/viewform')
    console.log("   MINDFULNESS VERIFIED.")
    timmy = setTimeout(mindfulCheck, 60*1000*interval)
});

notifier.on('timeout', function (notifierObject, options) {
    // Triggers if `wait: true` and notification closes
    console.log("   ~Notification timeout, retrying...")
    mindNotify();
});



//     //.command('mindful', '',require())
//     //.demand(1, ['t','np','ns'])

//     .boolean('nopop')
//     .describe('nopop','Disable Popups')
//     .alias('np','nopop')

//     .boolean('nosound')
//     .describe('nosound','Disable Sound')
//     .alias('ns','nosound')
    
//     .describe('t','Inter-mindfulness-check interval')
//     .nargs('t',1)
//     .default('t',30)

//     .alias('h','help')

//     .argv
//     //
//     //.alias('m', 'mindful')
//     //.example('$0 mindful -t repeat_time=30 -p=True', 'count the lines in the given file')
