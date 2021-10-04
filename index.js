var imp = require('./information');
var cowsay = require("cowsay");
console.log(cowsay.say({
    text : `hello im ${imp.nom} im student in ${imp.nomCampus}`,
    e : "oO",
    T : "U "
}));