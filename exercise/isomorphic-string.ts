export const IsomorphicString = (x: string, y: string): boolean => {
  const sMap: Map<string, string> = new Map();
  const tMap: Map<string, string> = new Map();

  for (let i = 0; i < x.length; i++) {
    const sChar = x[i];
    const tChar = y[i];

    if (sMap.has(sChar)) {
      if (sMap.get(sChar) !== tChar) return false;
    } else {
      sMap.set(sChar, tChar);
    }

    if (tMap.has(tChar)) {
      if (tMap.get(tChar) !== sChar) return false;
    } else {
      tMap.set(tChar, sChar);
    }
  }

  return true;
};
