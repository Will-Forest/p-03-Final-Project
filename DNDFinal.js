var name = document.getElementById("name").value;
var alignment = document.getElementById("alignment").value;
var gender = document.getElementById("gender").value;
var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;
var size = document.getElementById("size").value;
var str = document.getElementById("str").value;
var dex = document.getElementById("dex").value;
var con = document.getElementById("con").value;
var int = document.getElementById("int").value;
var wis = document.getElementById("wis").value;
var cha = document.getElementById("cha").value;
var race = document.getElementById("race").value;



var classFeatures;
var firstClass = document.getElementById("firstClass").value;
var firstLevel = document.getElementById("firstLevel").value;
var secondClass = document.getElementById("secondClass").value;
var secondLevel = document.getElementById("secondLevel").value;
var thirdClass = document.getElementById("thirdClass").value;
var thirdLevel = document.getElementById("thirdLevel").value;
var skill = document.getElementById("skill").value;
var bab = document.getElementById("bab").value;
var hp = document.getElementById("hp").value;
var traitsList;
var featuresList;

var skills = [document.getElementById("skill0").value + document.getElementById("rank0").value,
document.getElementById("skill1").value + document.getElementById("rank1").value,
document.getElementById("skill2").value + document.getElementById("rank2").value];
//Spare variable to make copy/pasting easier.
var spare = document.getElementById("").value;
//Courtesy of W3Schools at
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// Rolls 4d6 and subtracts the lowest roll each time the button is pressed,
// in addition to printing it.
function show4Rolls(){
var rolls = [Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1]
  if (rolls[0] < rolls[1] && rolls[0] < rolls[2] && rolls[0] <= rolls[3]){
    document.getElementById("rolls").innerHTML += rolls[1] + rolls[2] + rolls[3] + ", ";
  }
  else if (rolls[1] < rolls[0] && rolls[1] < rolls[2] && rolls[1] <= rolls[3]){
    document.getElementById("rolls").innerHTML += rolls[0] + rolls[2] + rolls[3] + ", ";
  }
  else if (rolls[2] < rolls[1] && rolls[2] < rolls[0] && rolls[2] <= rolls[3]){
    document.getElementById("rolls").innerHTML += rolls[1] + rolls[0] + rolls[3] + ", ";
  }
  else {
    document.getElementById("rolls").innerHTML += rolls[1] + rolls[0] + rolls[2] + ", ";
  }
}
// Rolls 3d6 and prints it, in case someone wants to roll an NPC or weaker character.
function show3Rolls(){
  var rolls = [Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1]
  document.getElementById("rolls").innerHTML += rolls[0] + rolls[1] + rolls[2] + ", ";
}
// Saves the results.
function baseStats(){
setCookie(name, name,3);
setCookie(alignment, alignment, 3);
setCookie(gender, gender, 3);
setCookie(height, height, 3);
setCookie(weight, weight, 3);
setCookie(size, size, 3);
setCookie(str, str, 3);
setCookie(dex, dex, 3);
setCookie(con, con, 3);
setCookie(int, int, 3);
setCookie(wis, wis, 3);
setCookie(cha, cha, 3);
window.alert("Stats saved!")
}
// Each of these functions allows the player to roll dice, mainly for health.
function fourSidedDie(){
  var roll= Math.floor(Math.random() * 4) + 1;
  document.getElementById("rolls").innerHTML += roll + ", ";
}
function sixSidedDie(){
  var roll= Math.floor(Math.random() * 6) + 1;
  document.getElementById("rolls").innerHTML += roll + ", ";
}
function eightSidedDie(){
  var roll= Math.floor(Math.random() * 8) + 1;
  document.getElementById("rolls").innerHTML += roll + ", ";
}
function tenSidedDie(){
  var roll= Math.floor(Math.random() * 10) + 1;
  document.getElementById("rolls").innerHTML += roll + ", ";
}
function twelveSidedDie(){
  var roll= Math.floor(Math.random() * 12) + 1;
  document.getElementById("rolls").innerHTML += roll + ", ";
}
function clearRolls(){
  document.getElementById("rolls").innerHTML= "Your rolls are: ";
}

function addRacialTrait(){
  var racialModCurrent = document.getElementById("racialTraits").value;
  document.getElementById("racialMods").innerHTML += racialModCurrent + ", ";
  traitsList = document.getElementById("racialMods").innerHTML;
  console.log(traitsList);
  racialModCurrent.value="";
}
function addClassFeature(){

  var classFeatureCurrent = document.getElementById("classFeatures").value;
  document.getElementById("classTraits").innerHTML += classFeatureCurrent + ", ";
  featuresList = document.getElementById("classTraits").innerHTML;
  console.log(featuresList);
  classFeatureCurrent.value="";
}
//Sets cookies to prepare for the third page.
function classStats(){
  racialMods=racialMods.toString();
  classFeatures=classFeatures.toString();
  setCookie(race,race,3);
  setCookie(racialMods,racialMods,3);
  setCookie(firstClass,firstClass,3);
  setCookie(firstLevel,firstLevel,3);
  setCookie(secondClass,secondClass,3);
  setCookie(secondLevel,secondLevel,3);
  setCookie(thirdClass,thirdClass,3);
  setCookie(thirdLevel,thirdLevel,3);
  setCookie(skill,skill,3);
  setCookie(classFeatures,classFeatures,3);
  setCookie(bab,bab,3);
  setCookie(hp,hp,3);
  window.alert("Stats saved!")
}
function subtractFullRank(i){
document.getElementById("rank"+i).innerHTML -= 1
}
function subtractHalfRank(i){
document.getElementById("rank"+i).innerHTML -= .5
}
function addHalfRank(i){
document.getElementById("rank"+i).innerHTML = document.getElementById("rank"+i) +.5
}
function addFullRank(i){
document.getElementById("rank"+i).innerHTML = document.getElementById("rank"+i).innerHTML +1
}
