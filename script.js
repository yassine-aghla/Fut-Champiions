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
   
    const newGardien = {
      name_gardien,
      photo_gardien,
      position_gardien,
      nationality_gardien,
      club_gardien,
      rating_gardien,
      diving,
      handling,
      kicking,
      reflexes,
      speed,
      positioning,
      drapeau,
      logo
  };
  data.push(newGardien);
  document.getElementById('playerForm').reset();
  displayGardien(newGardien);
});

function displayGardien(Gardien) {
    const gardienInfo = document.createElement('div');
    gardienInfo.classList.add("stylle")
  
    gardienInfo.innerHTML = `
    <div id="gardien"  class="gardien_de_but">
      <div class="info">
                <div class="raiting">
                 <p>${Gardien.rating_gardien }</p>
                 <p>++</p>
                </div>
                <div id="profil" class="profil">
                  <img src="${Gardien.photo_gardien}">
                </div>
                 </div>
                <button class="delete-btn" style="all: unset"  ><i class="fas fa-trash"></i></button>
                
            <div class="name_joueur">
              <h4>${Gardien.name_gardien}</h4>
            </div>
            <div class="statistique">
              <div class="div">
                <p><strong>div</strong></p>
                <p>${Gardien.diving}</p>
              </div>
              <div class="hand">
                <p><strong>hand</strong></p>
                <p>${Gardien.handling}</p>
              </div>
              <div class="kick">
                <p><strong>kick</strong></p>
                <p>${Gardien.kicking}</p>
              </div>
              <div class="reflexe">
                <p><strong>ref</strong></p>
                <p>${Gardien.reflexes}</p>
              </div>
              <div class="speed">
                <p><strong>spd</strong></p>
                <p>${Gardien.speed}</p>
              </div>
              <div class="positionnig">
                <p><strong>pos</strong></p>
                <p>${Gardien.positioning}</p>
              </div>
            </div>
            <div class="flags">
              <img src= ${Gardien.logo}>
              <img src=${Gardien.drapeau}>
              
           </div>
           
    `;
    gardienInfo.querySelector('.delete-btn').addEventListener('click', function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            gardienInfo.remove();
            Swal.fire("Deleted!", "The player has been deleted.", "success");
        }
    });
});


    
      if (gardien.children.length === 0) {
        gardien.appendChild(gardienInfo);
    }
    else{
      changement.appendChild(gardienInfo);
      }
    }


  
   
    


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



let tab=[];
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
const addplayer= document.getElementById('addPlayerBtn');
addplayer.addEventListener("click",()=>{

  const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    // const position = document.getElementById('position').value;
    const nationality = document.getElementById('nationality').value;
    const club = document.getElementById('club').value;
    const drapeauJoueur = document.getElementById('joueur_drapeau').value;
    const logoJoueur = document.getElementById('joueur_logo').value;
    const rating = document.getElementById('rating').value;
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    const physical = document.getElementById('physical').value;
  const newPlayer={
    name, 
    photo,
      nationality,
      drapeauJoueur,
      logoJoueur, 
      club, 
      rating
       ,pace,
       shooting,
       passing,
       dribbling,
       defending,
       physical
   };
tab.push(newPlayer);
if (validateForm()) {
  displayPlayer(newPlayer);
  resetFormStyles();
  // Si le formulaire est valide, ajouter le joueur
  document.getElementById('formulaire_joueur').reset();
 
}

});
function displayPlayer(Player) {
  let selectOption=document.getElementById("position")
 const joeurs= document.createElement('div')
joeurs.classList.add("stylle")
 joeurs.innerHTML = `
 <div class="info">
   <div class="raiting">
     <p>${Player.rating}</p>
     <p>++</p>
   </div>
   <div id="profil" class="profil">
     <img src="${Player.photo}">
   </div>
  </div>
  <button  class="delete" style="all: unset"><i class="fas fa-trash"></i></button>
 <div class="name_joueur">
   <h4>${Player.name}</h4>
 </div>
 <div class="statistique">
   <div class="pac">
     <p><strong>pac</strong></p>
     <p>${Player.pace}</p>
   </div>
   <div class="sho">
     <p><strong>sho</strong></p>
     <p>${Player.shooting}</p>
   </div>
   <div class="pas">
     <p><strong>pas</strong></p>
     <p>${Player.passing}</p>
   </div>
   <div class="dri">
     <p><strong>dri</strong></p>
     <p>${Player.dribbling}</p>
   </div>
   <div class="def">
     <p><strong>def</strong></p>
     <p>${Player.defending}</p>
   </div>
   <div class="phy">
     <p><strong>phy</strong></p>
     <p>${Player.physical}</p>
   </div>
 </div>
 <div class="flags">
   <img src=${Player.logoJoueur}>
   <img src=${Player.drapeauJoueur}>
 
 </div>
`;
joeurs.querySelector('.delete').addEventListener('click', function () {
  

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
}).then((result) => {
    if (result.isConfirmed) {
        joeurs.remove();
        Swal.fire("Deleted!", "The player has been deleted.", "success");
    }
});
});


if (selectOption.value === "CBR"){
  if(defenceDroit.children.length===0){
  defenceDroit.appendChild(joeurs)
  }
  else{
  changement.appendChild(joeurs)
  
  }
}
else if 
(selectOption.value === "CBL") {
  if(defenceGauche.children.length===0){
  defenceGauche.appendChild(joeurs)
  
  }else{
    changement.appendChild(joeurs)
  }
  }
  
  else if
   (selectOption.value  === "LB") {
    if(arrierGauche.children.length===0){
    arrierGauche.appendChild(joeurs)
   
  }else{
    changement.appendChild(joeurs)
  }
  } 
  else if (selectOption.value  === "RB") {
    if(arriereDroit.children.length===0){
    arriereDroit.appendChild(joeurs)
   
  }else{
    changement.appendChild(joeurs)
  }
  }
   else if (selectOption.value  === "CM1") {
    if(MilieuDeffensif.children.length===0){
    MilieuDeffensif.appendChild(joeurs)
    }else{
      changement.appendChild(joeurs)
    }
  }
   else if (selectOption.value  === "CM2") {
    if(MilieuRelayeur.children.length===0){
    MilieuRelayeur.appendChild(joeurs)
   }
    else{
      changement.appendChild(joeurs)
    }
  } 
  else if (selectOption.value  === "CM3") {
    if(MilieuOffensif.children.length===0){
    MilieuOffensif.appendChild(joeurs)
    }else{
      changement.appendChild(joeurs)
    }
  }
  
  else if (selectOption.value  === "LW") {
    if(illierGauche.children.length===0){
    illierGauche.appendChild(joeurs)
    }else{
      changement.appendChild(joeurs)
    }
  }
   else if (selectOption.value  === "RW") {
    if(illierDroit.children.length===0){
    illierDroit.appendChild(joeurs)
    }
    else{
      changement.appendChild(joeurs)
    }
  }

    else if (selectOption.value  === "ST") {
      if(avantCenter.children.length===0){
      avantCenter.appendChild(joeurs)
      }
      else{
        changement.appendChild(joeurs)
      }  
    }
}


function validateForm() {
  let isValid = true; // Pour suivre l'état global de validation

  // Récupérer les champs du formulaire
  const name = document.getElementById("name").value.trim();
  const photo = document.getElementById("photo").value.trim();
  const nationality = document.getElementById("nationality").value.trim();
  const drapeau = document.getElementById("joueur_drapeau").value.trim();
  const logo = document.getElementById("joueur_logo").value.trim();
  const club = document.getElementById("club").value.trim();
  const rating = document.getElementById("rating").value;
  const pace = document.getElementById('pace').value;
   const shooting = document.getElementById('shooting').value;
   const passing = document.getElementById('passing').value;
   const dribbling = document.getElementById('dribbling').value;
   const defending = document.getElementById('defending').value;
   const physical = document.getElementById('physical').value;

  // Expressions régulières
  const nameRegex=/^[A-Za-z]*\s{1}[A-Za-z]*$/;
  const infoRegex = /^[a-zA-Z\s]{3,}$/; 
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  const numberRegex = /^[0-9]{1,3}$/; 

  

  // Validation du nom
  if (!nameRegex.test(name)) {
    document.getElementById('name').style.border="2px solid red "
    document.getElementById("name-error").textContent = "Entre votre nom complet";
    isValid = false;
  }
  else{
     document.getElementById('name').style.border="2px solid green "
  document.getElementById("name-error").innerHTML="<p style='color:seagreen' >valid</p>";
 
  }
  // Validation de l'URL de la photo
  if (!urlRegex.test(photo)) {
    document.getElementById('photo').style.border="2px solid red "
    document.getElementById("photo-error").textContent = "Veuillez fournir une URL valide pour la photo.";
    isValid = false;
  }
  else{
    document.getElementById('photo').style.border="2px solid green "
    document.getElementById("photo-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }

  // Validation de la nationalité
  if (!infoRegex.test(nationality)) {
    document.getElementById('nationality').style.border="2px solid red "
    document.getElementById("natoinality-error").textContent = "La nationalité doit contenir au moins 3 lettres.";
    isValid = false;
  }
  else{
     document.getElementById('nationality').style.border="2px solid green "
    document.getElementById("natoinality-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }

  // Validation de l'URL du drapeau
  if (!urlRegex.test(drapeau)) {
    document.getElementById('joueur_drapeau').style.border="2px solid red "
    document.getElementById("joueur_drapeau-error").textContent = "Veuillez fournir une URL valide pour le drapeau.";
    isValid = false;
  }
  else{
     document.getElementById('joueur_drapeau').style.border="2px solid green "
    document.getElementById("joueur_drapeau-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }

  // Validation de l'URL du logo
  if (!urlRegex.test(logo)) {
    document.getElementById('joueur_logo').style.border="2px solid red "
    document.getElementById("joueur_logo-error").textContent = "Veuillez fournir une URL valide pour le logo.";
    isValid = false;
  }
  else{
    document.getElementById('joueur_logo').style.border="2px solid green "
    document.getElementById("joueur_logo-error").innerHTML="<p style='color:seagreen'>valid</p>";
    
    }

  // Validation du club
  if (!infoRegex.test(club)) {
    document.getElementById('club').style.border="2px solid red "
    document.getElementById("club-error").textContent = "Le nom du club doit contenir au moins 3 lettres.";
    isValid = false;
  }
  else{
     document.getElementById('club').style.border="2px solid green"
    document.getElementById("club-error").innerHTML="<p style='color:seagreen'>valid</p>";
 
    }

  // Validation de les statistiques 
  if (!numberRegex.test(rating) || rating <= 10 || rating >= 100) {
    document.getElementById('rating').style.border="2px solid red "
    document.getElementById("rating-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('rating').style.border="2px solid green "
    document.getElementById("rating-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(pace) || pace <= 10 || pace >= 100) {
    document.getElementById('pace').style.border="2px solid red "
    document.getElementById("pace-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
     document.getElementById('pace').style.border="2px solid green "
    document.getElementById("pace-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(shooting) || shooting <= 10 || shooting >= 100) {
    document.getElementById('shooting').style.border="2px solid red "
    document.getElementById("shooting-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('shooting').style.border="2px solid green "
    document.getElementById("shooting-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(passing) || passing <= 10 || passing >= 100) {
    document.getElementById('passing').style.border="2px solid red "
    document.getElementById("passing-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('passing').style.border="2px solid green "
    document.getElementById("passing-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(dribbling) || dribbling <= 10 || dribbling >= 100) {
    document.getElementById('dribbling').style.border="2px solid red "
    document.getElementById("dribbling-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('dribbling').style.border="2px solid green "
    document.getElementById("dribbling-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(defending) || defending <= 10 || defending >= 100) {
    document.getElementById('defending').style.border="2px solid red "
    document.getElementById("defending-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
     document.getElementById('defending').style.border="2px solid green"
    document.getElementById("defending-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(physical) || physical <= 10 || physical >= 100) {
    document.getElementById('physical').style.border="2px solid red "
    document.getElementById("physical-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('physical').style.border="2px solid green "
    document.getElementById("physical-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }



  return isValid; 


}

function resetFormStyles() {
  const inputs = document.querySelectorAll("input"); 
  const errorMessages = document.querySelectorAll("span"); 

 
  inputs.forEach(input => {
    input.style.border = ""; 
  });

 
  errorMessages.forEach(message => {
    message.textContent = ""; 
  });
}