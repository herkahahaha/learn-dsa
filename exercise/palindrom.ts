export const palindrom = (args: string) => {
  // check half of args length data
  for (let i = 0; i < args.length / 2; i++) {
    let indexAwal = i;
    let indexAkhir = args.length - i - 1;

    if (args[indexAwal] !== args[indexAkhir]) return false;
  }
  return true;
};

export const palindrom1 = (args: string) => {
  // using temporary variable and reverse loop
  let tempStr = "";
  for (let i = args.length - 1; i >= 0; i--) {
    tempStr += args[i];
  }

  if (tempStr === args || args === "") {
    return true;
  } else {
    return false;
  }
};

export const palindrom2 = (args: string) => {
  // without temporary variable
  for (let i = 0; i < args.length; i++) {
    let indexAwal = i;
    let indexAkhir = args.length - i - 1;

    if (args[indexAwal] !== args[indexAkhir]) return false;
  }
  return true;
};

// advantage solution using recursive
export const palindromRecursive = (value: string, i: number): boolean => {
  if (i < value.length / 2) {
    let indexAwal = i;
    let indexAkhir = value.length - i - 1;

    if (value[indexAwal] !== value[indexAkhir]) {
      return false;
    } else {
      return palindromRecursive(value, i + 1);
    }
  } else {
    return true;
  }
};

export const palindrom3 = (args: string): boolean => {
  return palindromRecursive(args, 0);
};
