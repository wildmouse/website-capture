const fs = require("fs");
const webdriverio = require("webdriverio")

const directoryToSave = "";
const namePrefix = "gm"
const nameSuffix = ""

const main = async () => {
    const browser = await webdriverio.remote({ capabilities: { browserName: 'chrome' } });
    browser.setWindowSize(1600, 1600);

    for (let seed = 0; seed < 10000; seed++) {
        await browser.url(`http://localhost:8080/?seed=${seed}`);
        await browser.executeAsync((done) => {
            setTimeout(done, 500);
        });
        await browser.saveScreenshot(`${directoryToSave}${namePrefix}${seed}${nameSuffix}.png`);
    }
}

main()
