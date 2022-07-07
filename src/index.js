const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  // write your solution here
  const size = 10;
  const chapt = 2;
  let str = '';

  for (let i = 0; i < expr.length; i += size) {
    let letter = expr.slice(i, i + size);
    let morse = '';

    if (letter === '**********') {
      str += ' ';
    };
    for(let j = 0; j < letter.length; j += chapt){
      let symbol = letter.slice(j, j + chapt);
      switch(symbol){
        case '10': morse += '.'; break;
        case '11': morse += '-'; break;
      }
    }
    for (let item in MORSE_TABLE) {
      if (item === morse) {
        str += MORSE_TABLE[item];
      }
    }
  }

  return str;
}

module.exports = {
  decode
}