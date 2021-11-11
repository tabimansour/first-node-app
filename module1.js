var link = 'http://www.abimansour.com/';

function getLog(message) {
    console.log(message);
}

module.exports = getLog;
/* first name is globally while the second name is locally */
module.exports.mainUrl = link;