function CatController(){
  //PRIVATE PARTS
  var catService = new CatService() ///added at encapsulation!!!

  function drawCats(/*listOfCats*/) { //will be an array
  var listOfCats = catService.getCats() //added at encapsulation!!
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

///PUBLIC PARTS (AKA USER INTERACTION)

this.kittyBack = function kittyBack(catId) { //added this.kittyBack = at encapsulation!!
  var petCount = document.getElementById("petCount" + catId) //creating an alias!
  var catStatus = document.getElementById("catStatus" + catId)
  var catButton = document.getElementById("catButton" + catId)
  var catPic = document.getElementById("catPic" + catId) //doc.stuff ref to html
  var counter = 0
  var targetCat = catService.getCatById(catId) ///getCatId doesnt exist until you write it. catService. added at encapsulation!!!
  targetCat.petCount = 0
  petCount.innerHTML = targetCat.petCount
  catButton.disabled = false
  catStatus.innerHTML = targetCat.happyStatus
  catPic.src = targetCat.imgUrl
}

//split responsibility
this.petCat = function petCat(catId) { ///this fx is designed to work for all cats, with the change of the mrFluffy name for another cat object. TargetCat says which cat will be pet, it is just a place holder. this.petCat added at encapsulation!!
  
  var targetCat = catService.getCatById(catId) ///getCatId doesnt exist until you write it. catService. added at encapsulation!!

  var petCount = document.getElementById("petCount" + catId) //creating an alias!
  var catStatus = document.getElementById("catStatus" + catId)
  var catButton = document.getElementById("catButton" + catId)
  var catPic = document.getElementById("catPic" + catId) //doc.stuff ref to html
  var counter = 0

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

drawCats(/*cats*/)

}