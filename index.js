const fs = require('fs');
var lvlname;
var originalLvlname;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('¿Qué mundo deseas buscar?> ', answer => {
    originalLvlname = answer;
    lvlname = originalLvlname.toLowerCase();

    fs.readdir('C:\\Users\\Samuel\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\minecraftWorlds', function(err, files) {
        if (err) {
            console.log('Error al encontrar com.mojang: ' + err);
            return;
        };
    
        files.forEach(findLevelName);
    });

    readline.close();
});

function findLevelName(directory) {
    if (directory != "exportados") {
        fs.readFile(('C:\\Users\\Samuel\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\minecraftWorlds\\' + directory + '\\levelname.txt'), 'utf8', function (err, levelname) {
            if (err) {
                console.log('Error al leer levelname.txt: ', err);
                   return;
            }
            if (levelname.toLowerCase() == lvlname) {
                console.log('La carpeta del mundo "' + originalLvlname + '" es "' + directory + '"');
                console.log('Dirección: C:\\Users\\Samuel\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\minecraftWorlds\\' + directory);
            };
        });
    };
};