export const fizzbuzz = (n: number) => {
  const arr: string[] = [];
  for (let i = 1; i <= n; i++) {
    // Multiple conditions in ternary conditional operator
    // i % 3 == 0 && i % 5 == 0
    //   ? str.push("FizzBuzz")
    //   : i % 5 == 0
    //   ? str.push("Buzz")
    //   : i % 3 == 0
    //   ? str.push("Fizz")
    //   : str.push(`${i}`);
    let str = "" as string;
    if (i % 3 == 0) {
      str = "Fizz";
    }
    if (i % 5 == 0) {
      str = `${str}Buzz`;
    }
    if (str == "") {
      str = `${i}`;
    }
    arr.push(str);
  }

  return arr;
};
