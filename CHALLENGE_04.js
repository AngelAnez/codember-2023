import fs from "fs"

let files = fs.readFileSync("./CHALLENGE_04.txt","utf-8").split("\r\n")
let real_files = []
let false_files = []

files.forEach(file => {
    let words = file.split("-")
    let unchecksum = words[0]
    words[0].split("").forEach((element,indice,array) => {
      if (array.includes(element,indice+1)){
        unchecksum = unchecksum.replaceAll(element,"")
      }
    });

    if (unchecksum == words[1]){
    real_files.push(unchecksum)
    } else{
    false_files.push(unchecksum)
    }
});

console.log(real_files[32])
