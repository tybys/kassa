// просто рандомный хэш
function hash() {
	let text = '';
	let r = Math.random().toString(36).substring(7);

	debugger
	return `${r}#RAND_HASH#`;
}