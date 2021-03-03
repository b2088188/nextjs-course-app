const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_SERVER,
} = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_DEVELOPMENT_SERVER)
		return {
			...defaultConfig,
			// Do the modification here
		};

	if (phase === PHASE_PRODUCTION_SERVER)
		return {
			...defaultConfig,
			// Do the modification here
		};

	return defaultConfig;
};
