var randomSayi,
  sayac,
  hak = 5;
var tahmin = document.querySelector("#tahmin");
var baslat = document.querySelector("#baslat");
var sonuc = document.querySelector("#sonuc");
var sayi = "";


function randomInt() {
  randomSayi = [];
  for(let i = 0; i<7; i++){
    let r = Math.floor(Math.random() * 10);
    if(randomSayi.indexOf(r) === -1 && randomSayi.length != 4) randomSayi.push(r);
    }
    
  return randomSayi ;
}


baslat.onclick = function () {
  tahmin.disabled = false;
  baslat.disabled = true;
 
  randomSayi = randomInt().join("");
  sayac = 0;
  alert(randomSayi);
  randomSayi.value= "";
  sonuc.innerHTML = "";
  
};
tahmin.onclick = Tahmin;
let box = document.getElementById("sayi");

box.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 || event.keyCode === 'Enter') {
        Tahmin();
    }
});


function Tahmin() {
  
 sayi = document.querySelector("#sayi");
 sayi_string = sayi.toString();
 randomSayi = randomSayi.toString();
 var mesaj = "";
  var count1 = 0;
  var count2 = 0;

  if (sayi.value >= 10000 || sayi.value <= 1000) {
    alert("4 basamaklı sayı giriniz");

  }
  sayac++;

  if (randomSayi != sayi.value && sayac > hak) {
    alert("Hakkınız kalmadı.");
  }
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (randomSayi[i]===sayi.value[i]){
        count1++;
        break;
      }
      else if(randomSayi[i]==sayi.value[j]){
        count2++;
        break;
      }
    } 
  }
 
  if(randomSayi===sayi.value){
    mesaj = "Tahmininiz Doğru";
    baslat.disabled = true;
    tahmin.disabled = false;
  }
  else{
    mesaj = count1+"+"    +count2+"-";
  }
sonuc.innerHTML += sayi.value + " : ";
  sonuc.innerHTML += mesaj;
  sonuc.innerHTML += "<br>";
  


  

}

