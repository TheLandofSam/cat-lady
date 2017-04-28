function CatService(){
  //PRIVATE PARTS
  var cats = [{ ///we are creating an object at this point
  id: 247, //ids do not need to be sequential
  name: "Mr. Fluffy",
  imgUrl: "http://www.rantpets.com/wp-content/uploads/2015/01/Evil-Cat-9.jpg",
  happyStatus: "Purrrrrr", //make this an array can give mutiple status
  grumpyStatus: "rawrrrr",
  feralStatus: "hhhissssss",
  goneStatus: "Mr. Fluffy ditched you!!",
  petCount: 0,
},  //these are properties that belong specifically to mrFluffy. We replaced all of our strings with some sort of obj that holds that data. This is how we will get to the place where we can have multiple cats.
{
  id: 1,
  name: "Wiskers",
  imgUrl: "https://pbs.twimg.com/profile_images/699450705782812672/GiNALvwx.jpg",
  happyStatus: "Meow?",
  grumpyStatus: "Grrrrrrrrrrrrrrrrrrrrrr",
  feralStatus: "Wooff",
  goneStatus: "Wiskers is in prision for murder (I hope you are happy!)",
  petCount: 0,
},
{
  id: 2,
  name: "Tilly",
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/A_black_cat_named_Tilly.jpg/220px-A_black_cat_named_Tilly.jpg",
  happyStatus: "Yeow?",
  grumpyStatus: "Meoooow",
  feralStatus: "hhisssss",
  goneStatus: "Tilly didn't want to be pet just there. She left to find a smarter human.",
  petCount: 0,
},
{
  id: 333,
  name: "Mr.Murder",
  imgUrl: "http://static.boredpanda.com/blog/wp-content/uploads/2016/11/black-cat-vampire-teeth-monkey-18-1.jpg",
  happyStatus: "Mmmmeh",
  grumpyStatus: "Mmmmgggrrrrrrr",
  feralStatus: "Rrrreeeeoowwww!!!",
  goneStatus: "Mr. Murder has left to take his agression out on a a poor innocent child. (Really, what were you thinking??)",
  petCount: 0,
},
{
  id: 4,
  name: "Jaws",
  imgUrl: "http://static.boredpanda.com/blog/wp-content/uploads/2015/09/Instagrams-most-famous-cat-Nala165604f5fc88e5f.jpg",
  happyStatus: "MEOW!?",
  grumpyStatus: "Neooorrr",
  feralStatus: "mmmmmMerrrr-hhisssss!",
  goneStatus: "You annoyed Jaws. He went for a relaxing swim.",
  petCount: 0,
},
{
  id: 5,
  name: "Pretty",
  imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/25/d1/e6/25d1e643e35704f88c9958ed993e30c0.jpg",
  happyStatus: "Pretty is looking at you with wonder.",
  grumpyStatus: "Pretty is glaring at you and dodging your hand.",
  feralStatus: "Neeeoooow!",
  goneStatus: "Pretty left because you did not observe proper social catiquette.",
  petCount: 0,
}]


//PUBLIC PARTS

this.getCatById = function getCatById(catId) { //this.getCatById = added at encapsulation!!!
  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    if (cat.id == catId) {
      return cat
    }
  }
}

this.getCats = function getCats() { //this and next line added at encapsulation!!
  return cats.slice(0, cats.length) //I will take a copy of this from position 0 all through the length
}

}


