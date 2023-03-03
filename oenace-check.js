var oenace3digits = {};
fetch('oenace-3steller.json')
    .then((response) => response.json())
    .then((json) => {
        oenace3digits = json;
        console.log(json);
    });

var blacklist = [];
fetch('oenace-blacklist')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, url: ${response.url}`);
        }
        return response.text();
    })
    .then((lines) => {
        blacklist = lines.replaceAll("\r", "").split("\n");
        console.log(blacklist);
    });

var whitelist = [];
fetch('oenace-whitelist')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, url: ${response.url}`);
        }
        return response.text();
    })
    .then((lines) => {
        whitelist = lines.replaceAll("\r", "").split("\n");
        console.log(whitelist);
    });



function allowedOenace(input) {
    if (input.length == 0 || parseInt(input) == 0) return null;
    if (blacklist.length == 0 || whitelist.length == 0 || Object.keys(oenace3digits).length == 0) {
        console.log(`validierungsdaten unvollständig. blacklist: ${blacklist.length}, whitelist: ${whitelist.length}, oenace3digits: ${Object.keys(oenace3digits).length}`);
        return null;
    }
    if (!parseInt(input) || isNaN(input) || !input.match(/^[0-9]+$/)) return false;
    if (input.length >= 3 && oenace3digits[input.substring(0, 3)] === undefined) return false;
    if (input.length < 5) return null;
    if (input.length > 5) return false;
    if (blacklist.includes(input.substring(0, 2))) {
        if (whitelist.includes(input.substring(0, 3))) {
            return true;
        }
        return false;
    }
    return true;
}

