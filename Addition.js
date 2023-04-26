export const Addition = (req, res) => {
  let { num1, num2 } = req.body;
  const maxLength = Math.max(num1.length, num2.length);
  const firstNumb = num1.padStart(maxLength, 0);
  const secondNumb = num2.padStart(maxLength, 0);

  const stepObj = {};
  let sum = 0;
  let carry = "";
  let carryString = "_";
  let sumString = "";


  for (let i = maxLength - 1; i >= 0; i--) {
    const step = maxLength - i;
    const summed = parseInt(firstNumb[i]) + parseInt(secondNumb[i]) + carry;
    sum = Math.floor(summed % 10);
    carry = Math.floor((summed / 10) % 10);
    sumString = sum.toString() + sumString;
    if (i === 0) {
      carry > 0
        ? (stepObj["step" + step] = {
            carryString: carryString,
            sumString: carry + sumString,
          })
        : (stepObj["step" + step] = { carryString, sumString: sumString });
    } else {
      carryString = carry.toString() + carryString;
      stepObj["step" + step] = { carryString: carryString, sumString };
    }
  }

const string = JSON.stringify(stepObj,null,10)

res.status(200).json(string)
  

};
