const fs = require('fs');
const config = require('./config.json');
var lvlname;
var originalLvlname;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('What world would you like to search?> ', answer => {
    originalLvlname = answer;
    lvlname = originalLvlname.toLowerCase();

    fs.readdir(config.mcWorldsAddress, function(err, files) {
        if (err) {
            console.log('Problem at finding com.mojang: ' + err);
            return;
        };
    
        files.forEach(findLevelName);
    });

    readline.close();
});

function findLevelName(directory) {
    fs.readFile((config.mcWorldsAddress + "\\" + directory + '\\levelname.txt'), 'utf8', function (err, levelname) {
        if (err) {
            console.log('Problem when reading levelname.txt: ', err);
               return;
        }
        if (levelname.toLowerCase() == lvlname) {
            console.log('The world folder "' + originalLvlname + '" is "' + directory + '"');
            console.log('Folder address: ' + config.mcWorldsAddress + "\\" + directory);
        };
    });
};