// let data=JSON.parse(localStorage.getItem("data"))||[];
let data=[];
let gardien=document.getElementById("gardien")
let profil=document.getElementById("profil")
document.getElementById("addkepperBtn").addEventListener('click', function () {
    // Récupérer les données du formulaire
    const name_gardien = document.getElementById('name-gardien').value;
    const photo_gardien = document.getElementById('photo_gardien');
    const position_gardien = document.getElementById('position_gardien').value;
    const nationality_gardien = document.getElementById('nationality_gardien').value;
    const club_gardien = document.getElementById('club').value;
    const rating_gardien = document.getElementById('rating_Gardien').value;
    const diving = document.getElementById('diving').value;
    const handling = document.getElementById('handling').value;
    const kicking = document.getElementById('kicking').value;
    const reflexes = document.getElementById('reflexes').value;
    const speed = document.getElementById('speed').value;
    const positioning = document.getElementById('positioning').value;
    data.push({ name_gardien, photo_gardien, position_gardien, nationality_gardien, club_gardien ,rating_gardien ,diving,handling, kicking ,reflexes, speed,positioning });
    
    
    
    // if (!name) {
    //   alert('Veuillez entrer un nom de joueur !');
    //   return;
    // }

     const gardienCard = document.createElement('div');
 
    // if (photo_gardien) {
    //   const reader = new FileReader();
    //   reader.onload = function (e) {
    //     const img = document.createElement('img');
    //     img.src = e.target.result;
    //     img.alt = `${name_gardien}'s photo`;
    //     img.classList.add('profil');
       
    //     profil.appendChild(img);
    //   };
    //   reader.readAsDataURL(photo_gardien);
    // }
  
    data.forEach((info_gardien) => {
    const gardienInfo = document.createElement('div');
     const imageUrl = "badge_gold.webp";
     gardien.style.backgroundImage = `url('${imageUrl}')`;
    // playerInfo.classList.add('player-info');
    gardienInfo.innerHTML = `
    <div id="gardien"  class="gardien_de_but">
      <div class="info">
                <div class="raiting">
                 <p>${info_gardien.rating_gardien }</p>
                 <p>++</p>
                </div>
                <div id="profil" class="profil">
                  <img src="${info_gardien.photo_gardien}">
                </div>
            </div>
    
            <div class="name_joueur">
              <h4>${info_gardien.name_gardien}</h4>
            </div>
            <div class="statistique">
              <div class="div">
                <p><strong>div</strong></p>
                <p>${info_gardien.diving}</p>
              </div>
              <div class="hand">
                <p><strong>hand</strong></p>
                <p>${info_gardien.handling}</p>
              </div>
              <div class="kick">
                <p><strong>kick</strong></p>
                <p>${info_gardien.kicking}</p>
              </div>
              <div class="reflexe">
                <p><strong>ref</strong></p>
                <p>${info_gardien.reflexes}</p>
              </div>
              <div class="speed">
                <p><strong>spd</strong></p>
                <p>${info_gardien.speed}</p>
              </div>
              <div class="positionnig">
                <p><strong>pos</strong></p>
                <p>${info_gardien.positioning}</p>
              </div>
            </div>
            <div class="flags">
              <img src= "city.jfif">
              <img src= "maroc.png">
          
            </div>
    `;
    gardienCard.appendChild(gardienInfo);
  
    
    gardien.appendChild(gardienCard);
  
    document.getElementById('playerForm').reset();
    })
  });

let popap=document.getElementById("card")
let ajouJoueur=document.getElementById("btn-player")
let ajouGardien=document.getElementById("btn-keeper")
let formContetJoueur=document.querySelector(".form-container")
let formContetGardien=document.querySelector(".form-container_gardien")
function ajouterJouer(){
formContetJoueur.style.display="block"
popap.style.display="none"
 formContetGardien.style.display="none"
}

function ajouterGardien(){
  formContetGardien.style.display="block"
  popap.style.display="none"
  formContetGardien.style.display="block"
  formContetJoueur.style.display="none"
  }
let tab= [];
let defenceGauche=document.getElementById("DCG")
let defenceDroit=document.getElementById("DCR")
let arriereDroit=document.getElementById("DD")
let arrierGauche=document.getElementById("DG")
let MilieuDeffensif=document.getElementById("MDF")
let MilieuRelayeur=document.getElementById("MR")
let MilieuOffensif=document.getElementById("MO")
let illierGauche=document.getElementById("AIG")
let illierDroit=document.getElementById("AID")
let avantCenter=document.getElementById("AC")

// document.getElementById('addPlayerBtn').addEventListener('click', function () {

    
    
    // const playerCard = document.createElement('div');
    // playerCard.classList.add('player-card');
    // playerCard.classList.remove()
    // if (photo) {
    //   const reader = new FileReader();
    //   reader.onload = function (e) {
    //     const img = document.createElement('img');
    //     img.src = e.target.result;
    //     img.alt = `${name}'s photo`;
    //     img.classList.add('profil');
       
    //     profil.appendChild(img);
    //   };
    //   reader.readAsDataURL(photo);
    // }
  
  
    
                                                                         
    document.getElementById('playerForm').reset();
    
  // });
  let dg=false;
  let dd=false;
  let ad=false;
  let ag=false;
  let md=false;
  let mr=false;
  let mo=false;
  let ig=false;
  let id=false;
  let ac=false;
const changement= document.querySelector(".gardien_changment")
const addplayer= document.getElementById('addPlayerBtn');
const imageUrl = "badge_gold.webp";
addplayer.addEventListener("click",()=>{
  let selectOption=document.getElementById("position")
  const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').files[0];
    // const position = document.getElementById('position').value;
    const nationality = document.getElementById('nationality').value;
    const club = document.getElementById('club').value;
    const rating = document.getElementById('rating').value;
    console.log(rating);
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    const physical = document.getElementById('physical').value;
    tab.push({ name, photo, position, nationality, club, rating ,pace,shooting,passing,dribbling,defending,physical});
    console.log(tab);
  // e.preventDefault();
  // const players={ name, photo, position, nationality, club, rating ,pace,shooting,passing,dribbling,defending,physical}
 const joeurs= document.createElement('div')

 joeurs.innerHTML = `
 <div class="info">
   <div class="raiting">
     <p>${rating}</p>
     <p>++</p>
   </div>
   <div id="profil" class="profil">
     <img src="${photo}">
   </div>
 </div>
 <div class="name_joueur">
   <h4>${name}</h4>
 </div>
 <div class="statistique">
   <div class="pac">
     <p><strong>pac</strong></p>
     <p>${pace}</p>
   </div>
   <div class="sho">
     <p><strong>sho</strong></p>
     <p>${shooting}</p>
   </div>
   <div class="pas">
     <p><strong>pas</strong></p>
     <p>${passing}</p>
   </div>
   <div class="dri">
     <p><strong>dri</strong></p>
     <p>${dribbling}</p>
   </div>
   <div class="def">
     <p><strong>def</strong></p>
     <p>${defending}</p>
   </div>
   <div class="phy">
     <p><strong>phy</strong></p>
     <p>${physical}</p>
   </div>
 </div>
 <div class="flags">
   <img src="city.jfif">
   <img src="maroc.png">
 </div>
`;


if (selectOption.value === "CBR"){
  if(!dg){
  defenceDroit.appendChild(joeurs)
  defenceDroit.style.backgroundImage = `url('${imageUrl}')`;
  dg= true
}else{
  changement.appendChild(joeurs)
}
}
else if (selectOption.value === "CBL") {

  defenceGauche.appendChild(joeurs)
  defenceGauche.style.backgroundImage = `url('${imageUrl}')`;
  } else if (selectOption.value  === "LB") {
    arrierGauche.appendChild(joeurs)
    arrierGauche.style.backgroundImage = `url('${imageUrl}')`;
  } else if (selectOption.value  === "RB") {
    arriereDroit.appendChild(joeurs)
    arriereDroit.style.backgroundImage = `url('${imageUrl}')`;
  } else if (selectOption.value  === "CM1") {
    MilieuDeffensif.appendChild(joeurs)
    MilieuDeffensif.style.backgroundImage = `url('${imageUrl}')`;
  } else if (selectOption.value  === "CM2") {
    MilieuRelayeur.appendChild(joeurs)
    MilieuRelayeur.style.backgroundImage = `url('${imageUrl}')`;
  } else if (selectOption.value  === "CM3") {
    MilieuOffensif.appendChild(joeurs)
    MilieuOffensif.style.backgroundImage = `url('${imageUrl}')`;
  } else if (selectOption.value  === "LW") {
    illierGauche.appendChild(joeurs)
    illierGauche.style.backgroundImage = `url('${imageUrl}')`;
  } else if (selectOption.value  === "RW") {
    illierDroit.appendChild(joeurs)
    illierDroit.style.backgroundImage = `url('${imageUrl}')`;
  }
    else if (selectOption.value  === "ST") {
      avantCenter.appendChild(joeurs)
      avantCenter.style.backgroundImage = `url('${imageUrl}')`;
    }
})


 