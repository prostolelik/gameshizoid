let word="колонка"
let secretSecret=""
let wordArray =['замок',"родник","проспект","карета","дом","машина","груз","шина","карандаш","бутылка","провод","чехол","наушники","марка","духи","пасспорт","расчестка","гирлянда","танк",'миниатюра']
let picturesArrey =["url('./images/hong-kong-4370342_1920.jpg')","url('./images/pexels-photo-301469.jpeg')","url('./images/the-caucasus-5299607_1920.jpg')","url('./images/the-caucasus-5299607_1920.jpg')","url('./images/dawn-190055_1280.jpg')","url('./images/mountain-1149897_1920.jpg')","url('./images/pyrenees-351266_1920.jpg')",] 
let randomindex;
let randompictures;
let letters=[];
function newgame() {
	document.getElementById("secret-word").value= ""

	randomindex=Math.floor(Math.random()*20)
	randompictures=Math.floor(Math.random()*7)
	document.body.style.backgroundImage = picturesArrey[randompictures];
	word= wordArray[randomindex];
	console.log(randompictures)
	console.log(word)
	
	for (let i=0; i<word.length; i++) {
		secretSecret=secretSecret+'*'
		document.getElementById('secret-word').value=secretSecret;	

	}
}
function Check() {
 //console.log(document.getElementById('input-2').value)
 letters.push(document.getElementById('input-2').value)
 console.log(letters)
 let out="";


 for (let i=0; i<word.length; i++){
 	if (word[i]==document.getElementById("input-2").value) {
 		out=out+word[i]

 	}	else{
 		out=out+'*'

 	}

 }
document.getElementById('secret-word').value=out;
}



function specialText(element, event)
{
    if (
      event.keyCode == 69 || 
      event.keyCode == 189 || 
      element.value.length >= 1
    ) {
    	return false;
    }
}