var fs = require('fs');
var path = require('path');
var dotenv = require('dotenv');
var file = require('../../modules/checkEmptyFile');

dotenv.config();
var pathFile = path.dirname(__filename) + '/../' + 
           process.env.JSON_DATA_DIRNAME + 
           process.env.FILMS_JSON_FILENAME;

function addFilm(newFilm){
    try{
        //Check if JSON file is empty
        file.checkEmptyFile();

        //Convert to JSON object JSON file 
        var fileData = fs.readFileSync(pathFile, 'utf8');
        var dataOBJ = JSON.parse(fileData);
        
        //Check there is no other film with the same name
        var filmExists = false;
        for(var i = 0; i < dataOBJ['films'].length && !filmExists; i++){
            if(dataOBJ['films'][i].title == newFilm.title){
                filmExists = true;
            }
        }

        if(!filmExists){
            //Add newFilm
            dataOBJ['films'].push(newFilm);
            
            //Write on films.json
            var newDATA = JSON.stringify(dataOBJ, null, 2);
            fs.writeFileSync(pathFile, newDATA);
            
            return 'Film added correctly!';
        }else{
            return 'Film exists already';
        }
    }catch(error){
        return error;
    }    
}

exports.addFilm = addFilm;