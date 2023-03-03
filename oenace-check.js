var oenace3digits;

fetch('https://osterr-forschungsforderungsges-mbh.github.io/ekzp/oenace-3steller.json')
    .then((response) => response.json())
    .then((json) => {
        oenace3digits = json;
        console.log(json);
    });


function allowedOenace(input) {
    const blacklist = ['10', '02', '03']; // TODO in ressourcen auslagern
    const whitelist = ['101', '022', '123'];
    if (input.length == 0) return null;
    if (!parseInt(input) || isNaN(input) || !input.match(/^[0-9]+$/)) return false;
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

