var petCount = document.getElementById ("petCount") //creating an alias!
var catStatus = document.getElementById ("catStatus")
var counter = 0
var catButton = document.getElementById ("catButton")
var catPic = document.getElementById ("catPic") //doc.stuff ref to html

function petCat(){
  counter++
  petCount.innerHTML = counter
  if (counter > 5) {
    catStatus.innerHTML="rawrrrr"
  }
  if (counter == 9) {
    catStatus.innerHTML="hhhissssss!!"
  }
  if (counter == 10) {
    catStatus.innerHTML="The kitty ditched you!!"
    catButton.disabled = true
    catPic.src=""
  }
}
function kittyBack() {
  counter = 0
  petCount.innerHTML=counter
  catButton.disabled = false
  catStatus.innerHTML="Purrrr"
  catPic.src="http://www.rantpets.com/wp-content/uploads/2015/01/Evil-Cat-9.jpg"
}