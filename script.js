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
  } else if (input.toLowerCase().indexOf("fantasy") !== -1) {
    output.innerHTML = "Berikut top 5 Film Dengan Genre Fantasy : 1)The Lord of the Rings Trilogy (2001–2003). 2)Harry Potter Series (2001–2011). 3)Pan’s Labyrinth (El Laberinto del Fauno, 2006). 4)Spirited Away (Sen to Chihiro no Kamikakushi, 2001). 5)The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005).";
  } else if (input.toLowerCase().indexOf("thriller") !== -1) {
    output.innerHTML = "Berikut Top 5 Film Dengan Genre Thriller : 1)Se7en (1995). 2)The Silence of the Lambs (1991). 3)Gone Girl (2014). 4)Prisoners (2013). 5)Zodiac (2007)."
  } else if ( input.toLowerCase().indexOf("drama") !== -1) {
    output.innerHTML = "Berikut Top 5 Film Dengan Genre Drama : 1)The Shawshank Redemption (1994). 2)Forrest Gump (1994). 3)Parasite (2019). 4)A Beautiful Mind (2001). 5)Manchester by the Sea (2016).";
  } else if (input.toLowerCase().indexOf("sci-fi") !== -1) {
    output.innerHTML = "Berikut Top 5 Film Dengan Genre Sci-Fi : 1)Interstellar (2014). 2)Blade Runner 2049 (2017). 3) The Matrix (1999). 4)Inception (2010). 5)Arrival (2016).  ";
  } else {
    output.innerHTML = "Maaf, saya tidak mengerti apa yang Anda maksud.";
  }
}
