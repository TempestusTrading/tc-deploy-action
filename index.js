const core = require("@actions/core")
const github = require("@actions/github")

const main = async () => {
	try {
		const owner = core.getInput("owner")
		// Need to locate the owner of the repo
		// Need to build the repo container on Tempestus Compute servers
		// Need to run the repo container on Tempestus Compute servers
		//
	} catch(error) {
		core.setFailed(error.message)
	}
}