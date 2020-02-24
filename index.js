const fs = require('fs');

fs.readdir('.', (err, filenames) => {
    if (err) {
        // error handling code here
        console.log(err);
    };

    console.log(filenames);
});