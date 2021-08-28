import chromium from 'chrome-aws-lambda';
import type { NextApiHandler } from 'next';
import { chromium as playwrightChromium } from 'playwright-core';

const handler: NextApiHandler = async (req, res) => {
	const marginX = '0.4in';
	const marginY = '0.2in';

	const execPath = await chromium.executablePath;

	// https://github.com/alixaxel/chrome-aws-lambda/wiki/HOWTO:-Local-Development
	if (process.env.NODE_ENV !== 'production')
		process.env.AWS_LAMBDA_FUNCTION_NAME = 'TEST_FUNCTION';

	if (!execPath) {
		res.status(500).end('Failed to Generate Resume.');
		return;
	}

	const browser = await playwrightChromium.launch({
		args: chromium.args,
		executablePath: execPath,
		headless: chromium.headless,
	});

	const page = await browser.newPage({
		viewport: {
			width: 2480,
			height: 3508,
		},
	});

	const url = `${
		process.env.NODE_ENV === 'production' ? 'https://' : 'http://'
	}${req.headers.host}/resume`;

	await page.goto(url, { timeout: 15 * 1000 });

	const data = await page.pdf({
		format: 'A4',
		scale: 0.65,
		margin: {
			top: marginY,
			left: marginX,
			right: marginX,
			bottom: marginY,
		},
	});

	await browser.close();

	res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
	res.setHeader('Content-Type', 'application/pdf');

	res.end(data);
};

export default handler;
