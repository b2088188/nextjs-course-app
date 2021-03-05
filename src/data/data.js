const notes = [...Array(15).keys()].map((_, i) => ({
	id: Date.now() + i,
	title: `Note ${i}`
}));

module.exports = notes;
