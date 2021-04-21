const { chromium } = require('playwright');
const fsPromises = require('fs').promises;

const headless = true;
const margin = '0.45in';

(async () => {
	const browser = await chromium.launch({ headless });

	const context = await browser.newContext({
		viewport: { width: 2480, height: 3508 },
	});

	const page = await context.newPage();

	await page.goto('localhost:3000');

	const pdf = await page.pdf({
		format: 'A4',
		scale: 0.65,
		margin: {
			top: margin,
			left: margin,
			right: margin,
			bottom: margin,
		},
	});
	await fsPromises.writeFile(`dist/resume_${Date.now()}.pdf`, pdf);

	await browser.close();
})();
