
let data=[];
let gardien=document.getElementById("gardien")
let profil=document.getElementById("profil")
const changement= document.querySelector(".changement")
document.getElementById("addkepperBtn").addEventListener('click', function () {
    // Récupérer les données du formulaire
    const name_gardien = document.getElementById('name-gardien').value;
    const photo_gardien = document.getElementById('photo_gardien').value;
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
    const drapeau=document.getElementById("photo_drapeau").value;
    const logo=document.getElementById("photo_logo").value;
    data.push({ name_gardien, photo_gardien, position_gardien, nationality_gardien, club_gardien ,rating_gardien ,diving,handling, kicking ,reflexes, speed,positioning });
    
      
    const gardienInfo = document.createElement('div');
    gardienInfo.classList.add("stylle")
  
    gardienInfo.innerHTML = `
    <div id="gardien"  class="gardien_de_but">
      <div class="info">
                <div class="raiting">
                 <p>${rating_gardien }</p>
                 <p>++</p>
                </div>
                <div id="profil" class="profil">
                  <img src="${photo_gardien}">
                </div>
                 </div>
                <button class="delete-btn" style="all: unset" style=margin ><i class="fas fa-trash"></i></button>
                
            <div class="name_joueur">
              <h4>${name_gardien}</h4>
            </div>
            <div class="statistique">
              <div class="div">
                <p><strong>div</strong></p>
                <p>${diving}</p>
              </div>
              <div class="hand">
                <p><strong>hand</strong></p>
                <p>${handling}</p>
              </div>
              <div class="kick">
                <p><strong>kick</strong></p>
                <p>${kicking}</p>
              </div>
              <div class="reflexe">
                <p><strong>ref</strong></p>
                <p>${reflexes}</p>
              </div>
              <div class="speed">
                <p><strong>spd</strong></p>
                <p>${speed}</p>
              </div>
              <div class="positionnig">
                <p><strong>pos</strong></p>
                <p>${positioning}</p>
              </div>
            </div>
            <div class="flags">
              <img src= ${logo}>
              <img src=${drapeau}>
              
           </div>
           
    `;
    gardienInfo.querySelector('.delete-btn').addEventListener('click', function () {
      // Supprimer du DOM
      gardienInfo.remove();})
    
    if(data.length==1){
      gardien.appendChild(gardienInfo);
    }
    else{
      changement.appendChild(gardienInfo);
      }
   
  
    document.getElementById('playerForm').reset();
    
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

   
                                                                         
    document.getElementById('playerForm').reset();
    
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
// const changement= document.querySelector(".changement")
const addplayer= document.getElementById('addPlayerBtn');
// const imageUrl = "badge_gold.webp";
addplayer.addEventListener("click",()=>{
  let selectOption=document.getElementById("position")
  const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    // const position = document.getElementById('position').value;
    const nationality = document.getElementById('nationality').value;
    const club = document.getElementById('club').value;
    const drapeauJoueur = document.getElementById('joueur_drapeau').value;
    const logoJoueur = document.getElementById('joueur_logo').value;
    const rating = document.getElementById('rating').value;
    console.log(rating);
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    const physical = document.getElementById('physical').value;
    tab.push({ name, photo, position, nationality,drapeauJoueur,logoJoueur, club, rating ,pace,shooting,passing,dribbling,defending,physical});
   
 const joeurs= document.createElement('div')
joeurs.classList.add("stylle")
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
  <button  class="delete" style="all: unset"><i class="fas fa-trash"></i></button>
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
   <img src=${logoJoueur}>
   <img src=${drapeauJoueur}>
 
 </div>
`;
joeurs.querySelector('.delete').addEventListener('click', function () {
  

  joeurs.remove();})


if (selectOption.value === "CBR"){
  if(!dd){
  defenceDroit.appendChild(joeurs)
  
  dd= true
  }else{
  changement.appendChild(joeurs)
  
  }
}
else if (selectOption.value === "CBL") {
  if(!dg){
  defenceGauche.appendChild(joeurs)
  dg= true
  }else{
    changement.appendChild(joeurs)
  }
  }
  
  else if (selectOption.value  === "LB") {
    if(!ag){
    arrierGauche.appendChild(joeurs)
    ag=true
  }else{
    changement.appendChild(joeurs)
  }
  } else if (selectOption.value  === "RB") {
    if(!ad){
    arriereDroit.appendChild(joeurs)
    ad=true
  }else{
    changement.appendChild(joeurs)
  }
  } else if (selectOption.value  === "CM1") {
    if(!md){
    MilieuDeffensif.appendChild(joeurs)
    md=true
    }else{
      changement.appendChild(joeurs)
    }
  } else if (selectOption.value  === "CM2") {
    if(!mr){
    MilieuRelayeur.appendChild(joeurs)
    mr=true
    }
    else{
      changement.appendChild(joeurs)
    }
  } else if (selectOption.value  === "CM3") {
    if(!mo){
    MilieuOffensif.appendChild(joeurs)
   mo=true
    }else{
      changement.appendChild(joeurs)
    }
  } else if (selectOption.value  === "LW") {
    if(!ig){
    illierGauche.appendChild(joeurs)
    ig=true
    }else{
      changement.appendChild(joeurs)
    }
  } else if (selectOption.value  === "RW") {
    if(!id){
    illierDroit.appendChild(joeurs)
    id=true
    }
    else{
      changement.appendChild(joeurs)
    }
  }
    else if (selectOption.value  === "ST") {
      if(!ac){
      avantCenter.appendChild(joeurs)
      ac=true
      }
      else{
        changement.appendChild(joeurs)
      }  
    }
})







 