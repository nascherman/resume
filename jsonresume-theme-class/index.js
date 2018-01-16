var fs = require("fs");
var path = require('path');
var Handlebars = require("handlebars");

function render(resume) {
    var template = fs.readFileSync(__dirname + "/resume.handlebars", "utf-8");
    var partials = fs.readdirSync(path.resolve(__dirname, './template-partials'));
    partials.forEach(partial => {
       var templatePartial = fs.readFileSync(partial);
       Handlebars.registerPartial(partial.split('.')[0], templatePartial);
    });

    return Handlebars.compile(template)({
        resume: resume
    });
}

module.exports = {
    render: render
};
