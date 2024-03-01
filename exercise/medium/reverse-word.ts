/*
Reverse Word medium UseCase
Approach
We need two varibles:

anchor: the index of the last alphabet of a word
flag: to indicate the status if it is a space to cut word (e.g.,word) or normal space.
Complexity
Time complexity:
O(n): one loop for retrieving the whole string

Space complexity:
O(n): a word list


the first thing in my mind is reverse loop and using substring
1. Temporary var for words, pointer = data.length-1, and boolean for flag
2. reverse loop i = data.length-1, i > -1; --i
    - if data[i] === " " ? false flag, words.push(data.substring(i+1, pointer + 1))
    - else if i === 0 ? 
      - flag ? words.push(data.substring(0, pointer + 1))
      - else if s[i] === " " ? words.push(s[0])
    - else if s[i] !== " " && !flag ? flag is true, poniter = i
3. Return words.join(" ")
*/

export const ReverseWords = (str: string) => {
  let words: string[] = [];
  let pointer = str.length - 1;
  let flag = false;

  for (let i = str.length - 1; i > -1; --i) {
    if (str[i] === " " && flag) {
      flag = false;
      words.push(str.substring(i + 1, pointer + 1));
    } else if (i == 0) {
      if (flag) {
        words.push(str.substring(0, pointer + 1));
      } else if (str[i] !== " ") {
        words.push(str[0]);
      }
    } else if (str[i] !== " " && !flag) {
      flag = true;
      pointer = i;
    }
  }

  return words.join(" ");
};
