/* 
  Valid Anagram 
  An anagram is a word or phrase formed by rearranging the letters of a
  different word or phrase, using all the original letters exactly once.

  input: (s = "anagram") , (t = "nagarm"); ----->>>> output: true,
  input: (s = "rat") ,(t = "car") ----> output : false;
*/
// Approach : By using Object

const isAnagram = function (s,t){
    if(s.length !== t.length)  return false;

    let obj1 = {};
    let obj2 = {};

    for(let i=0 ; i<s.length ; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[s[i]] || 0) + 1;
    }

    for(const key in obj1){
        // console.log(key);
        if(obj1[key] !== obj2[key]) return false;

    }
    return true;
}

console.log(isAnagram("bapan","bapan"))