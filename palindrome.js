const palindrome = function(str) {
  return str.split('').reverse().join('').toLowerCase()
  .replace(/[^0-9a-zA-Z]/g, '') === str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '') 
  ? true : false;
};

palindrome('eye');
