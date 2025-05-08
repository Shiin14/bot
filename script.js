function getResponse() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  if (input.toLowerCase().indexOf("romance") !== -1) {
    output.innerHTML = "Berikut Top 5 Film Dengan Genre Romance : 1)The Notebook(2004). 2)Pride and Prejudice (2005). 3)La La Land (2016). 4)Titanic (1997). 5)Before Sunrise (1995).";
  } else if (input.toLowerCase().indexOf("action") !== -1) {
    output.innerHTML = "Berikut top 5 Film Dengan Genre Action : 1)Mad Max: Fury Road (2015). 2)John Wick (2014). 3)The Dark Knight (2008). 4)Gladiator (2000). 5)Inception (2010).";
  } else if (input.toLowerCase().indexOf("comedy") !== -1) {
    output.innerHTML = "Berikut Top 5 Film Dengan Genre Comedy : 1)Superbad (2007). 2)The Hangover (2009). 3)Bridesmaids (2011). 4)Dumb and Dumber (1994). 5)Tropic Thunder (2008)."
  } else if ( input.toLowerCase().indexOf("horror") !== -1) {
    output.innerHTML = "Berikut Top 5 Film Dengan Genre Horror : 1)The Conjuring (2013). 2)Hereditary (2018). 3)The Exorcist (1973). 4)Get Out (2017). 5)Insidious (2010).";
  } else if (input.toLowerCase().indexOf("adventure") !== -1) {
    output.innerHTML = "Berikut Top 5 Film Dengan Genre Adventure : 1)The Lord of the Rings: The Fellowship of the Ring (2001). 2)Indiana Jones: Raiders of the Lost Ark (1981). 3) Pirates of the Caribbean: The Curse of the Black Pearl (2003). 4)Avatar (2009). 5)Life of Pi (2012).  ";
  } else {
    output.innerHTML = "Maaf, saya tidak mengerti apa yang Anda maksud.";
  }
}
