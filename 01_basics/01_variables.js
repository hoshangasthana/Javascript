const accountId = 882460
let accountEmail = "hoshang0291@gmail.com"
var accountPassword = "12345@123"
accountCity = "Jodhpur"
let accountState;

// accountId = 2 // not allowed => const can't be declared again

accountEmail = "h0@gmail.com"
accountPassword = "123"
accountCity = "Gurugram"

console.log(accountId)

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])