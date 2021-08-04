module.exports = function toReadable (num) {
    if(num === 0) {
        return 'zero'
      }
      let str = ''
      const obj2 = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
      }
      const arr =  ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
      function foo(value)  {
        if(value <= 29) {
          return 'twenty'
        }
        if(value <= 39) {
          return 'thirty'
        }
        if(value <= 49) {
          return 'forty'
        }
         if(value <= 59) {
          return 'fifty'
        }
        if(value <= 69) {
          return 'sixty'
        }
        if(value <= 79) {
          return 'seventy'
        }
        if(value <= 89) {
          return 'eighty'
        }
         if(value >= 90 && value <= 99) {
          return 'ninety'
        }
      }   
    
      
      //////////////
      if(num <=19 ) {
        return obj2[String(num)]
      }
      if(num <= 29) {
        return obj2[String(num % 10)] !== '' ? 'twenty ' + obj2[num % 10] : 'twenty'
      }
      if(num <= 39) {
        return obj2[String(num % 10)] !== '' ? 'thirty ' + obj2[num % 10] : 'thirty'
      }
      if(num <= 49) {
         return obj2[String(num % 10)] !== '' ? 'forty ' + obj2[num % 10] : 'forty'
      }
       if(num <= 59) {
        return obj2[String(num % 10)] !== '' ? 'fifty ' + obj2[num % 10] : 'fifty'
      }
      if(num <= 69) {
        return obj2[String(num % 10)] !== '' ? 'sixty ' + obj2[num % 10] : 'sixty'
      }
      if(num <= 79) {
        return obj2[String(num % 10)] !== '' ? 'seventy ' + obj2[num % 10] : 'seventy'
      }
      if(num <= 89) {
        return obj2[String(num % 10)] !== '' ? 'eighty ' + obj2[num % 10] : 'eighty'
      }
      if(num >= 90 && num <= 99) {
        return obj2[String(num % 10)] !== '' ? 'ninety ' + obj2[num % 10] : 'ninety'
      }
      if(num >= 100) {
        str =  obj2[(String(num).slice(0,1))] + ' hundred ' + `${num % 100 <= 19 ? obj2[String(num % 100)] :  foo(num % 100) + ' ' + obj2[String((num % 100) % 10)]}`
        return str.trim()
      }
}
