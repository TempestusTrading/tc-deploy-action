const core = require("@actions/core")
const github = require("@actions/github")

const main = async () => {
	try {
		const num = core.getInput("num")
		core.setOutput("num_squared", num * num)
	} catch(error) {
		core.setFailed(error.message)
	}
}