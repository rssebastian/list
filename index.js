#!/usr/bin/env node 

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        // error handling code here
        console.log(err);
    };

    console.log(filenames);
});