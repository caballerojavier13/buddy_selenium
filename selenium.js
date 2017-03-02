var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

console.log(process.env.EID);


webdriverio
  .remote(options)
  .init()
  .url('http://buddy.works')
  .saveScreenshot('buddyworks-' + process.env.EID + '.png') 
  .end();