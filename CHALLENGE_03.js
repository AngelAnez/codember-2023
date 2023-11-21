import fs from "fs"

let keys = fs.readFileSync("./INFO-CHALLENGE_03.txt","utf-8").split("\r\n")
let valid_keys = []
let invalid_keys = []

keys.forEach(key => {
    let politics = key.split(" ")
    let range = politics[0].split("-")
    let letter = politics[1].replace(":","")
    let code = politics[2]
    let count = code.split("").filter(element => element == letter).length
    if (count >= range[0] && count <= range[1]){
        valid_keys.push(code)
    } else{
        invalid_keys.push(code)
    }
});

console.log(`Clave inválida #13: ${invalid_keys[12]}`)

console.log(`Clave inválida #42: ${invalid_keys[41]}`)