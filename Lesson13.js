//////1-задание Сделано
//function max_name(...arg) {
//    let longestWord = 0;
//    let LongestName = ""
//    for( i=0; i < arg.length; i++){
//       if(arg[i].length > longestWord){
//       longestWord = arg[i].length
//       LongestName = arg[i]
//    }
//    }
//    console.log(`Longest name is ${LongestName}.It consists ${longestWord} letters`)
//    return longestWord
//}
//max_name(`Alex`, `jordan`, `michael`, `morgenshtern`)


///2-задание Не сделано/////


//function min(number){
//    let minimumNumber = i[0]
//    if(number === Number){
//        for(i=0;i <number.length;i++){
//            if(number[i] < minimumNumber){
//                minimumNumber = number[i]
//            }
//        }
//        document.write(`
//        Minimum number is ${minimumNumber}
//        `)
//    }
//   
//}
//min = (1,2)
//console.log(typeof(min))





///////3 задание///////Сделано
//let chislo = +prompt("Какое число?")
//let fib = [0,1]
//    for(i = 0; i< chislo-1 ; i++){
//     let a = fib[i] + fib[i+1]
//     fib.push(a)     
//    }
//    console.log(...fib)


//////4 Задание/////
//let name = prompt("Как вас зовут?")
//let surname = prompt("Фамилия")
//let age = +prompt("Какого года вы рождения")
//function email(imya,familiya,vozrast,mail = `@mail.ru`){
//    imya = imya.toLowerCase()
//    familiya = familiya.toLowerCase()
//  document.write(`
//  First variant: ${imya}.${familiya}.${mail}<br>
//  Second variant: ${familiya}.${imya}.${mail}<br>
//  Third variant: ${imya}_${familiya}.${mail}<br>
//  Fifth varian: ${familiya}_${imya}.${mail}<br>
//  Sixth variant: ${imya}${familiya}${vozrast}.${mail}<br>
//  Seven variant: ${familiya}${imya}${vozrast}.${mail}<br>
//  
//  `)
//}
//email(name,surname,age)

//// 5 задание ////
//function id(length) {
//    let result           = '';
//    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    let charactersLength = characters.length;
//    for ( i = 0; i < length; i++ ) {
//      result += characters.charAt(Math.floor(Math.random() * 
// charactersLength));
//   }
//   return result;
//}
//console.log(id(7));
//////6 задание/////
let obrabotka = []
function sorted(sort){
    for(let otsort of sort){
      for(i=0; i< otsort.length;i++){
        while(otsort[i]/10 > otsort[i+1]/10){
            console.log(sort)
        }
      }
    }
}
sorted[12,23,13,54,65,17,96]
    




