const telephoneCheck = function(str) {
  const number = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm;
  return number.test(str);
}


telephoneCheck("555-555-5555");
