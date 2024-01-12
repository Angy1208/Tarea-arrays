//Write a function to determine if an array is positively dominant
const numArr = [-1000, -1, 50, 1, 2, 5];
const negativeArr = [-1000, -1, -50, -1, 5, 2];

function positiveArr(arr){
    let positiveCount = 0;

    arr.forEach((num) => {
        if (num > 0 ) {
            positiveCount++;
        }
    })
    
    const mid = arr.lengt / 2;
    return positiveCount > mid;
}

const res = positiveArr(negativeArr);
console.log(res);