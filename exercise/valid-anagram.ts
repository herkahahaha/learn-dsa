/*
s= tea t= eat
top in my head is
sort every string
return true for the result
s=> aet , t=> aet
for loop params s and
return false if s[i] !== t[i] 
*/

export function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let result = true;
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return (result = false);
    }
  }

  return result;
}

/*
using hasmap to count char
s= tea     t= eat
t => 1     e => 1
e => 1     a => 1
a => 1     t => 1

they are have same hasmap time compexity and space will be O(s+t)
*/

export function validAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const hasmap: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    hasmap[element] ? (hasmap[element] += 1) : (hasmap[element] = 1);
  }

  for (let j = 0; j < t.length; j++) {
    const element = t[j];
    if (!hasmap[element]) return false;
    else hasmap[element] -= 1;
  }

  return true;
}
