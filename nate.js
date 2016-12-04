changeLang = function() {
  var dict = {
    en: { : "<p>hello</p>", 
    },
    th: {"<p id='en'>hello</p>" : "<p id='th'>lorium ipsum</p>",
    }
  };
  var enLang = 'en';
  var thLang = 'th';
  
  if (document.querySelector('#en')) {
    document.body.innerHTML = thLang;
    document.getElementById('en').id = 'th';
  }
  
  else if (document.querySelector('th')) {
    document.body.innerHTML = enLang;
    document.getElementById('th').id = 'en';
