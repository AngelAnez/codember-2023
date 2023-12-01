import fs from "fs"

let users = fs.readFileSync("./CHALLENGE_05.txt","utf-8").split("\r\n")

let password = ""
let valid_users = []
let invalid_users = []
let numbersAndLetters = new RegExp("^[A-Za-z0-9]+$")
let emailValidation = new RegExp("^[a-zA-Z0-9_.]+@[a-zA-Z-0-9_]+(\.[a-zA-Z]{2,4}){1,2}$")
let optionalNumbers = new RegExp("^[0-9]*$")

let isAlphanumeric = (element) => {
    return numbersAndLetters.test(element)
}

let isEmail = (element) => {
    return emailValidation.test(element)
}

let isNumber = (element) => {
    return optionalNumbers.test(element)
}

users.forEach(user => {
    let dataUser = user.split(",")
    if (isAlphanumeric(dataUser[0]) && isAlphanumeric(dataUser[1]) && isEmail(dataUser[2]) && dataUser[2].includes(".") && isNumber(dataUser[3]) && typeof dataUser[4] == "string" ){
        valid_users.push(dataUser.join(","))
    } else {
        let username = dataUser[1].split("")
        password += username[0]
        invalid_users.push(dataUser.join(","))
    }
})

console.log(password)