function rot13(str) {

  let deciphered = [];

  for (let i=0; i < str.length; i++) {
    let unicode = str[i].charCodeAt(0);
    if (unicode >= 65 && unicode <= 90) {
      unicode + 13 <= 90 ? unicode += 13: unicode = 65 + ((unicode + 13) % 59);
        
    }
    deciphered.push(String.fromCharCode(unicode));
  }  
  return deciphered.join("").toUpperCase();
}

rot13("SERR PBQR PNZC");
