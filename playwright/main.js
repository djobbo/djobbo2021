const { chromium } = require('playwright');
const fsPromises = require('fs').promises;
const path = require('path');

const headless = true;
const margin = '0.4in';

(async () => {
	const browser = await chromium.launch({ headless });

	console.log('Created Browser');

	const context = await browser.newContext({
		viewport: { width: 2480, height: 3508 },
	});
	console.log('Created Browser Context');

	const page = await context.newPage();
	console.log('Opened New Page');

	await page.goto('localhost:3000');
	console.log('Navigated to Portfolio');

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
	const filename = `dist/resume_${Date.now()}.pdf`;
	await fsPromises.writeFile(`dist/resume_${Date.now()}.pdf`, pdf);
	console.log(`Generated PDF File: ${path.join(__dirname, filename)}`);

	await browser.close();
	console.log('DONE');
})();
