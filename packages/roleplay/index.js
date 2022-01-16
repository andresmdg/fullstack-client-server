
const { events, commands } = require('./src/config/handling/index');

(async () => {

	await events(mp, '../../app/events/');
	await commands(mp, '../../app/commands/');

})();

// ><