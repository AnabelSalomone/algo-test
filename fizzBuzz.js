const finalNumber = 250;

const fizzBuzz = (num) => {

    let result = ""

    if(num % 3 === 0){
        result = "Fizz"
    }

    if (num % 5 === 0) {
        result += "Buzz";
    }

    if(result.length === 0){
        result = num
    }

    return result
}

for(let i=0; i < finalNumber; i++){
    console.log(fizzBuzz(i))
}