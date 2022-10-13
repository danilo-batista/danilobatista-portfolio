const path = require("path");
const dirname = path.resolve();
const mainController = {
    index: (request, response) => {
        response.sendFile(path.join(dirname, "src/views/home.html"));
    },
    about: (request, response) => {
        response.sendFile(path.join(dirname, "src/views/about.html"));
    }
};

module.exports = mainController;