import inquirer from "inquirer";
import qr from "qr-image" ;
import fs from "fs";

inquirer 
    .prompt([ {
        "message" : "what is your URL ?" ,
        "name" : "URL"
    }])
    .then((answers)=>{
        const txt = answers.URL ;
        var qr_svg = qr.image(txt);
        qr_svg.pipe(fs.createWriteStream('../output/qr-image-example.png'));
        fs.writeFile("../output/URL-example.txt",answers.URL,"utf-8",(error)=>{
            if(error) throw error;
        })
    })
    .catch((error)=>{
        if (error.isTtyError) {
            console.error("couldn't be rendered in the current environment");
          } else {
           console.log("Something went wrong !") 
          }
    })