'use strict';

var fs = require('fs');
var path = require('path');
var eloquent = require('./jsonresume-theme-personal');

var resumeJSON = JSON.parse(fs.readFileSync(path.join(__dirname, 'config/resume.json'), 'utf-8'));
var resumeHTML = eloquent.render(resumeJSON);

fs.writeFile(path.join(__dirname, 'build/index.html'), resumeHTML, function(err) {
    console.error(err || 'Resume exported');
});