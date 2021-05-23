/*
I made this excercise thinking about not using the .join method
and so increasing the value of the number from the array itself,
otherwise the answer would be shorter and straightforward and I
thought that you didn't want that as specified in the instructions
*/


const arr = [1,4,9]

const increment = (numArr) => {
    let lastDigit = numArr[numArr.length - 1];

    if(lastDigit === 9){
      let penultimateDigit = numArr[numArr.length - 2];

      numArr[numArr.length - 1] = 0;
      numArr[numArr.length -2] = penultimateDigit + 1;

      return numArr;
    }

    numArr[numArr.length - 1] = lastDigit + 1;
    return numArr; 
}