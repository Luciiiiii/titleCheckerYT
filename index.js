const colors = require('colors');
const chalk = require('chalk');
const fs = require('fs');
const prompt = require(`prompt`);
const blocked = [...new Set(require('fs').readFileSync('blockedwords.txt', 'utf-8').replace(/\r/g, '').split('\n'))];
var blocks = 0;
process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

function send(block, title){
	if(title.includes(block)){
		console.log(chalk.hex("#FF7F50")(`[WARN] Title Includes Blocked Word │ Blocked Word: ${block}`));
		blocks++;
		process.title = `[YT Title Checker] Title │ "${title}" │ Blocks: ${blocks}`;
		
	}
	else{
		return;
	}
}


function printAsciiLogo() {
console.log(`
${chalk.yellow('┌───────────────────────────────────────────────────────────────────────────────────────────────────┐')}
${chalk.yellow('│')} ${chalk.red('████████╗██╗████████╗██╗     ███████╗  ')}${chalk.hex('#FFFAFA')('   ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗███████╗██████╗ ')} ${chalk.yellow('│')}
${chalk.yellow('│')} ${chalk.red('╚══██╔══╝██║╚══██╔══╝██║     ██╔════╝  ')}${chalk.hex('#FFFAFA')('  ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝██╔════╝██╔══██╗')} ${chalk.yellow('│')}
${chalk.yellow('│')} ${chalk.red('   ██║   ██║   ██║   ██║     █████╗    ')}${chalk.hex('#FFFAFA')('  ██║     ███████║█████╗  ██║     █████╔╝ █████╗  ██████╔╝')} ${chalk.yellow('│')}
${chalk.yellow('│')} ${chalk.red('   ██║   ██║   ██║   ██║     ██╔══╝    ')}${chalk.hex('#FFFAFA')('  ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ██╔══╝  ██╔══██╗')} ${chalk.yellow('│')}
${chalk.yellow('│')} ${chalk.red('   ██║   ██║   ██║   ███████╗███████╗  ')}${chalk.hex('#FFFAFA')('  ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗███████╗██║  ██║')} ${chalk.yellow('│')}
${chalk.yellow('│')} ${chalk.red('   ╚═╝   ╚═╝   ╚═╝   ╚══════╝╚══════╝  ')}${chalk.hex('#FFFAFA')('   ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝')} ${chalk.yellow('│')}
${chalk.yellow('└───────────────────────────────────────────────────────────────────────────────────────────────────┘')}       
`);    
}
                                                                                       
process.title = `[YT Title Checker] Made by Luci`;
printAsciiLogo();
console.log(`[INFO]: Please Enter the Title of Your Youtube Video!`.inverse);
console.log(`[WARN]: Please be warned! Filter is very sensitive e.g "hello" will trigger due to it including "hell"`.inverse);
prompt.start();
prompt.get(['title'], function(err, result) { console.log('');
    const title = result.title.toLowerCase();
	process.title = `[YT Title Checker] Title │ "${title}" │ Blocks: ${blocks}`;
	console.log(`[INFO] Title │ ${title}`.inverse);
	blocked.forEach(block => send(block, title));
	if(blocks == 0){
		console.log(chalk.hex("66ff00")(`[PASS] Title "${title}" Contains no Blocked Words`.inverse));
	}
	else{
		console.log(chalk.hex("#FF0000")(`[FAILED] Title "${title}" Contains "${blocks}" Blocked Words`.inverse));
	}
});

//Updates Coming Soon!
//Please subscribe to my channel c: https://youtube.com/Luciii