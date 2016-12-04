changeLang = function() {
  var dict = {
    en: {"<p>hello</p>" : "<p>hello</p>", 
    },
    th: {
    }
  };
  var enLang = 'en';
  var thLang = 'th';
  
  if (document.querySelector('#en')) {
    document.body.innerHTML = thLang;
    document.getElementById('en').id = 'th';
  }
