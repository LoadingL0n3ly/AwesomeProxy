const request = require('request');

module.exports = (req, res) => {
	if (!req.body || !req.body.url) {
		return res.status(400).json({ error: 'No url provided' });
	}
	const URL = req.body.url;
	console.log('Valid URL');

	// Making a request and piping the response to the serverless response object.
	request(URL).pipe(res);
};
