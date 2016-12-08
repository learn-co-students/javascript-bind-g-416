const app = "I don't do much.";

function improverer(phrase, tag){
  console.log(phrase + tag);
}

var sayIt = improverer.bind(null, app);

sayIt(" Yet.");
