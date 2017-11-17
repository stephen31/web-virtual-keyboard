const qwertyMapping = [
  ///// LOWCASE KEYS
  { key: 'q', ascii: '113' },
  { key: 'w', ascii: '119' },
  { key: 'e', ascii: '101' },
  { key: 'r', ascii: '114' },
  { key: 't', ascii: '116' },
  { key: 'y', ascii: '121' },
  { key: 'u', ascii: '117' },
  { key: 'i', ascii: '105' },
  { key: 'o', ascii: '111' },
  { key: 'p', ascii: '112' },
  { key: 'a', ascii: '97' },
  { key: 's', ascii: '115' },
  { key: 'd', ascii: '100' },
  { key: 'f', ascii: '102' },
  { key: 'g', ascii: '103' },
  { key: 'h', ascii: '104' },
  { key: 'j', ascii: '106' },
  { key: 'k', ascii: '107' },
  { key: 'l', ascii: '108' },
  { key: '\'', ascii: '39' },
  { key: '<i class="fa fa-arrow-up" aria-hidden="true"></i>', action: 'uppercase' },
  { key: 'z', ascii: '122' },
  { key: 'x', ascii: '120' },
  { key: 'c', ascii: '99' },
  { key: 'v', ascii: '118' },
  { key: 'b', ascii: '98' },
  { key: 'n', ascii: '110' },
  { key: 'm', ascii: '109' },
  {
    key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    ascii: '',
    action: 'backspace',
    class: 'backspace-key',
  },
  { key: '#123?', action: 'numerics' },
  { key: ',', ascii: '44' },
  { key: '', action: 'emotes' },
  { key: 'Space', ascii: '32', class: 'space-key' },
  { key: '.', ascii: '46' },
  { key: 'Enter', class: 'enter-key', action: 'enter' },
  ///// UPPERCASE KEYS
  { key: 'Q', ascii: '81' },
  { key: 'W', ascii: '87' },
  { key: 'E', ascii: '69' },
  { key: 'R', ascii: '82' },
  { key: 'T', ascii: '84' },
  { key: 'Y', ascii: '89' },
  { key: 'U', ascii: '85' },
  { key: 'I', ascii: '73' },
  { key: 'O', ascii: '79' },
  { key: 'P', ascii: '80' },
  { key: 'A', ascii: '65' },  
  { key: 'S', ascii: '83' },
  { key: 'D', ascii: '68' },
  { key: 'F', ascii: '70' },
  { key: 'G', ascii: '71' },
  { key: 'H', ascii: '72' },
  { key: 'J', ascii: '74' },
  { key: 'K', ascii: '75' },
  { key: 'L', ascii: '76' },
  { key: '\'', ascii: '39' },
  { key: '<i class="fa fa-arrow-up" aria-hidden="true"></i>', action: 'lowercase' },
  { key: 'Z', ascii: '90' },
  { key: 'X', ascii: '88' },
  { key: 'C', ascii: '67' },
  { key: 'V', ascii: '86' },
  { key: 'B', ascii: '66' },
  { key: 'N', ascii: '78' },
  { key: 'M', ascii: '77' },
  {
    key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    ascii: '',
    action: 'backspace',
    class: 'backspace-key',
  },
  { key: '#123?', action: 'numerics' },
  { key: ',', ascii: '44' },
  { key: '', action: 'emotes' },
  { key: 'Space', ascii: '32', class: 'space-key' },
  { key: '.', ascii: '46' },
  { key: 'Enter', class: 'enter-key', action: 'enter' },
  ////// NUMERIC AND EXTRA KEYS
  { key: '1', ascii: '49' },
  { key: '2', ascii: '50' },
  { key: '3', ascii: '51' },
  { key: '4', ascii: '52' },
  { key: '5', ascii: '53' },
  { key: '6', ascii: '54' },
  { key: '7', ascii: '55' },
  { key: '8', ascii: '56' },
  { key: '9', ascii: '57' },
  { key: '0', ascii: '48' },
  { key: '@', ascii: '64' },
  { key: '#', ascii: '35' },
  { key: '€', ascii: '8364' },
  { key: '_', ascii: '95' },
  { key: '&', ascii: '38' },
  { key: '-', ascii: '45' },
  { key: '+', ascii: '43' },
  { key: '(', ascii: '40' },
  { key: ')', ascii: '41' },
  { key: '/', ascii: '47' },
  { key: '=\\<', action: 'extrakeys' },
  { key: '*', ascii: '42' },
  { key: '"', ascii: '34' },
  { key: '\'', ascii: '44' },
  { key: ':', ascii: '58' },
  { key: ';', ascii: '59' },
  { key: '!', ascii: '33' },
  { key: '?', ascii: '63' },
  {
    key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    ascii: '',
    action: 'backspace',
    class: 'backspace-key',
  },
  { key: 'ABC', action: 'lowercase' },
  { key: ',', ascii: '44' },
  { key: '', action: 'emotes' },
  { key: 'Space', ascii: '32', class: 'space-key' },
  { key: '.', ascii: '46' },
  { key: 'Enter', class: 'enter-key', action: 'enter' },
  ///////EXTRA KEYS
  { key: '~', ascii: '126' },
  { key: '`', ascii: '94' },
  { key: '|', ascii: '124' },
  { key: '·', ascii: '183' },
  { key: '=', ascii: '61' },
  { key: '^', ascii: '94' },
  { key: '{', ascii: '123' },
  { key: '}', ascii: '125' },
  { key: '%', ascii: '37' },
  { key: '\\', ascii: '92' },
  { key: '[', ascii: '91' },
  { key: ']', ascii: '93' },
  { key: '€', ascii: '8364' },
  { key: '_', ascii: '95' },
  { key: '&', ascii: '38' },
  { key: '-', ascii: '45' },
  { key: '+', ascii: '43' },
  { key: '(', ascii: '40' },
  { key: ')', ascii: '41' },
  { key: '/', ascii: '47' },
  { key: '#123?', action: 'numerics' },
  { key: '*', ascii: '42' },
  { key: '"', ascii: '34' },
  { key: '\'', ascii: '44' },
  { key: ':', ascii: '58' },
  { key: ';', ascii: '59' },
  { key: '!', ascii: '33' },
  { key: '?', ascii: '63' },
  {
    key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    ascii: '',
    action: 'backspace',
    class: 'backspace-key',
  },
];

export default qwertyMapping;