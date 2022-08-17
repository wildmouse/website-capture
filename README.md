# website-capture

## How to capture 

Run `node src/index.js` to capture for all seed values. 

Webpage `localhost:8080/?seed=[seed]` will be captured with seed(0-10000) and saved as `[seed].png` 

To custom filename and save directory, set following variables: 

- `directoryToSave`: directory to save capture.
- `namePrefix`: prefix of file name.
- `nameSuffix`: suffix of file name.
