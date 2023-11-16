const message = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

/*
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/

let messageArray = message.split("")
let value = 0
let result = ""

messageArray.forEach((element) => {
  switch(element){ 
    case "#":
      value++
      break;
    case "@":
      value--
      break;
    case "*":
      value = value * value
      break;
    case "&":
      result = result + value.toString()
      break;
    default:
      break;
  }
}) 
console.log(value)
console.log(result)