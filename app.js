


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


function petCat(catId) { ///this fx is designed to work for all cats, with the change of the mrFluffy name for another cat object. TargetCat says which cat will be pet, it is just a place holder
  var petCount = document.getElementById("petCount" + catId) //creating an alias!
  var catStatus = document.getElementById("catStatus" + catId)
  var catButton = document.getElementById("catButton" + catId)
  var catPic = document.getElementById("catPic" + catId) //doc.stuff ref to html
  var counter = 0

  var targetCat = getCatById(catId) ///getCatId doesnt exist until you write it.

  targetCat.petCount++
  petCount.innerHTML = targetCat.petCount
  if (targetCat.petCount > 5) {
    catStatus.innerHTML = targetCat.grumpyStatus
  }
  if (targetCat.petCount == 9) {
    catStatus.innerHTML = targetCat.feralStatus
  }
  if (targetCat.petCount == 10) {
    catStatus.innerHTML = targetCat.goneStatus
    catButton.disabled = true
    catPic.src = ""
  }
}

function getCatById(catId) {
  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    if (cat.id == catId) {
      return cat
    }
  }

}


function kittyBack(catId) {
  var petCount = document.getElementById("petCount" + catId) //creating an alias!
  var catStatus = document.getElementById("catStatus" + catId)
  var catButton = document.getElementById("catButton" + catId)
  var catPic = document.getElementById("catPic" + catId) //doc.stuff ref to html
  var counter = 0

  var targetCat = getCatById(catId) ///getCatId doesnt exist until you write it.
  var targetCat = getCatById(catId)
  targetCat.petCount = 0
  petCount.innerHTML = targetCat.petCount
  catButton.disabled = false
  catStatus.innerHTML = targetCat.happyStatus
  catPic.src = targetCat.imgUrl
}

function drawCats(listOfCats) { //will be an array
  var template = ""
  for (var i = 0; i < listOfCats.length; i++) {
    var cat = listOfCats[i] ///creating an alias for my current cat in the list. Every cat will be an object 
    template +=
  ` 
  <div>
    <img id="catPic${cat.id}" src="${cat.imgUrl}">
      <button type="buttton" id="catButton${cat.id}" onclick="petCat(${cat.id})">Touch kitty's pretty soft fur!</button>
      <button type="buttton" onclick="kittyBack(${cat.id})">Kitty! Come back!!</button>
      <h1 id="petCount${cat.id}">${cat.petCount}</h1>
      <h2 id="catStatus${cat.id}">${cat.happyStatus}</h2>
      <h2>${cat.name}</h2>
  </div>
  `

    //backtic allows you to write multiple lines, and you can single and double quotes inside of it without braking anything. id's are for unique things. $ {} "petCount${cat.id}" says, 'give me the petCount for cat with id #...'
  }

  document.getElementById("cat-list").innerHTML = template
}
drawCats(cats)
