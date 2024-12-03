let data=[];
let gardien=document.getElementById("gardien")
let changement= document.querySelector(".changement")
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
 if( validateGardienForm()){

  displayGardien(newGardien);
  resetFormStyles();
  document.getElementById('playerForm').reset();
 }
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
                 <p>GK</p>
                </div>
                 </div>
                <button class="delete-btn" style="all: unset"  ><i class="fas fa-trash"></i></button>
                 <button  class="update-btn" style="all: unset"><i class="fas fa-edit"></i></i></button>
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

gardienInfo.querySelector('.update-btn').addEventListener('click', function () {
  const playerIndex = data.findIndex(p => p.name_gardien === Gardien.name_gardien);
  if (playerIndex !== -1) {
      // remplissage de formulaire avec les ancienne information de player pour modifier
      document.getElementById('name-gardien').value = data[playerIndex].name_gardien;
      document.getElementById('photo_gardien').value = data[playerIndex].photo_gardien;
      document.getElementById('position_gardien').value = data[playerIndex].position_gardien;
      document.getElementById('nationality_gardien').value = data[playerIndex].nationality_gardien;
      document.getElementById('club').value = data[playerIndex].club_gardien;
      document.getElementById('rating_Gardien').value = data[playerIndex].rating_gardien;
      document.getElementById('diving').value = data[playerIndex].diving;
      document.getElementById('handling').value = data[playerIndex].handling;
      document.getElementById('kicking').value = data[playerIndex].kicking;
      document.getElementById('reflexes').value = data[playerIndex].reflexes;
      document.getElementById('speed').value = data[playerIndex].speed;
      document.getElementById('positioning').value = data[playerIndex].positioning;
      document.getElementById("photo_drapeau").value = data[playerIndex].drapeau;
      document.getElementById("photo_logo").value = data[playerIndex].logo;

      // Changer le bouton pour sauvegarder
      document.getElementById('saveChangesgk').style.display = "inline-block";

      // update les information dans le tableau tab
      document.getElementById('saveChangesgk').onclick = function (){
          data[playerIndex].name_gardien = document.getElementById('name-gardien').value;
          data[playerIndex].photo_gardien = document.getElementById('photo_gardien').value;
          data[playerIndex].position_gardien = document.getElementById('position_gardien').value;
          data[playerIndex].nationality_gardien = document.getElementById('nationality_gardien').value;
          data[playerIndex].club_gardien = document.getElementById('club').value;
          data[playerIndex].rating_gardien = document.getElementById('rating_Gardien').value;
          data[playerIndex].diving = document.getElementById('diving').value;
          data[playerIndex].handling = document.getElementById('handling').value;
          data[playerIndex].kicking = document.getElementById('kicking').value;
          data[playerIndex].reflexes = document.getElementById('reflexes').value;
          data[playerIndex].speed = document.getElementById('speed').value;
          data[playerIndex].positioning = document.getElementById('positioning').value;
          data[playerIndex].drapeau = document.getElementById("photo_drapeau").value;
          data[playerIndex].logo = document.getElementById("photo_logo").value;

          // update l'affichage du gardien modifié
          gardienInfo.querySelector('.raiting p').textContent = data[playerIndex].rating_gardien;
          gardienInfo.querySelector('.profil img').src = data[playerIndex].photo_gardien;
          gardienInfo.querySelector('.name_joueur h4').textContent = data[playerIndex].name_gardien;
          gardienInfo.querySelector('.statistique .div p:last-child').textContent = data[playerIndex].diving;
          gardienInfo.querySelector('.statistique .hand p:last-child').textContent = data[playerIndex].handling;
          gardienInfo.querySelector('.statistique .kick p:last-child').textContent = data[playerIndex].kicking;
          gardienInfo.querySelector('.statistique .reflexe p:last-child').textContent = data[playerIndex].reflexes;
          gardienInfo.querySelector('.statistique .speed p:last-child').textContent = data[playerIndex].speed;
          gardienInfo.querySelector('.statistique .positionnig p:last-child').textContent = data[playerIndex].positioning;
          gardienInfo.querySelector('.flags img:first-child').src = data[playerIndex].logo;
          gardienInfo.querySelector('.flags img:last-child').src = data[playerIndex].drapeau;

         
          document.getElementById('saveChanges').style.display = "none";
          Swal.fire("Updated!", "The player has been updated.", "success");
      };
  }
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
     const position = document.getElementById('position').value;
  
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
    position,
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

 }
);
function displayPlayer(Player) {
  let selectOption=document.getElementById("position")
 const joeurs= document.createElement('div')
joeurs.classList.add("stylle")
// joeurs.setAttribute("data-id", Player.name);
 joeurs.innerHTML = `
 <div class="info">
   <div class="raiting">
     <p>${Player.rating}</p>
     <p>++</p>

   </div>
   <div id="profil" class="profil">
     <img src="${Player.photo}">
     <p>${Player.position}</p>
   </div>
  </div>
  <button  class="delete" style="all: unset"><i class="fas fa-trash"></i></button>
  <button  class="update" style="all: unset"><i class="fas fa-edit"></i></i></button>
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

joeurs.querySelector('.update').addEventListener('click', function () {
  const playerIndex = tab.findIndex(p => p.name === Player.name && p.position === Player.position);

  if (playerIndex !== -1) {
      // remplissage de formulaire avec les ancienne information de player pour modifier
      document.getElementById('name').value = tab[playerIndex].name;
      document.getElementById('photo').value = tab[playerIndex].photo;
      document.getElementById('position').value = tab[playerIndex].position;
      document.getElementById('nationality').value = tab[playerIndex].nationality;
      document.getElementById('club').value = tab[playerIndex].club;
      document.getElementById('joueur_drapeau').value = tab[playerIndex].drapeauJoueur;
      document.getElementById('joueur_logo').value = tab[playerIndex].logoJoueur;
      document.getElementById('rating').value = tab[playerIndex].rating;
      document.getElementById('pace').value = tab[playerIndex].pace;
      document.getElementById('shooting').value = tab[playerIndex].shooting;
      document.getElementById('passing').value = tab[playerIndex].passing;
      document.getElementById('dribbling').value = tab[playerIndex].dribbling;
      document.getElementById('defending').value = tab[playerIndex].defending;
      document.getElementById('physical').value = tab[playerIndex].physical;
     
      
        document.getElementById('saveChanges').style.display = "inline-block";
      
      const saveButton = document.getElementById('saveChanges'); 
      saveButton.onclick = function () {
          // update les information 
          tab[playerIndex].name = document.getElementById('name').value;
          tab[playerIndex].photo = document.getElementById('photo').value;
          tab[playerIndex].position = document.getElementById('position').value;
          tab[playerIndex].nationality = document.getElementById('nationality').value;
          tab[playerIndex].club = document.getElementById('club').value;
          tab[playerIndex].drapeauJoueur = document.getElementById('joueur_drapeau').value;
          tab[playerIndex].logoJoueur = document.getElementById('joueur_logo').value;
          tab[playerIndex].rating = document.getElementById('rating').value;
          tab[playerIndex].pace = document.getElementById('pace').value;
          tab[playerIndex].shooting = document.getElementById('shooting').value;
          tab[playerIndex].passing = document.getElementById('passing').value;
          tab[playerIndex].dribbling = document.getElementById('dribbling').value;
          tab[playerIndex].defending = document.getElementById('defending').value;
          tab[playerIndex].physical = document.getElementById('physical').value;

          // Update de laffichage 
          joeurs.querySelector('.name_joueur h4').textContent = tab[playerIndex].name;
          joeurs.querySelector('.profil img').src = tab[playerIndex].photo;
          joeurs.querySelector('.raiting p:first-child').textContent = tab[playerIndex].rating;
          joeurs.querySelector('.pac p:last-child').textContent = tab[playerIndex].pace;
          joeurs.querySelector('.sho p:last-child').textContent = tab[playerIndex].shooting;
          joeurs.querySelector('.pas p:last-child').textContent = tab[playerIndex].passing;
          joeurs.querySelector('.dri p:last-child').textContent = tab[playerIndex].dribbling;
          joeurs.querySelector('.def p:last-child').textContent = tab[playerIndex].defending;
          joeurs.querySelector('.phy p:last-child').textContent = tab[playerIndex].physical;
          joeurs.querySelector('.flags img:first-child').src = tab[playerIndex].logoJoueur;
          joeurs.querySelector('.flags img:last-child').src = tab[playerIndex].drapeauJoueur;
          Swal.fire("Updated!", "The player has been updated.", "success");
          
          document.getElementById('playerForm').reset();
      };
  }
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
   else if (selectOption.value  === "MDF") {
    if(MilieuDeffensif.children.length===0){
    MilieuDeffensif.appendChild(joeurs)
    }else{
      changement.appendChild(joeurs)
    }
  }
   else if (selectOption.value  === "MR") {
    if(MilieuRelayeur.children.length===0){
    MilieuRelayeur.appendChild(joeurs)
   }
    else{
      changement.appendChild(joeurs)
    }
  } 
  else if (selectOption.value  === "MO") {
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



function validateGardienForm() {
  let isValid = true; 

  // Récupérer les champs du formulaire
  const name_gardien = document.getElementById('name-gardien').value;
  const photo_gardien = document.getElementById('photo_gardien').value;
  const rating_gardien = document.getElementById('rating_Gardien').value;
  const diving = document.getElementById('diving').value;
  const handling = document.getElementById('handling').value;
  const kicking = document.getElementById('kicking').value;
  const reflexes = document.getElementById('reflexes').value;
  const speed = document.getElementById('speed').value;
  const positioning = document.getElementById('positioning').value;
  const photo_drapeau=document.getElementById("photo_drapeau").value;
  const gardien_logo=document.getElementById("photo_logo").value;

  // Expressions régulières
  const nameRegex=/^[A-Za-z]*\s{1}[A-Za-z]*$/;
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)$/;
  const numberRegex = /^[0-9]{1,3}$/; 

  

  // Validation du nom
  if (!nameRegex.test(name_gardien)) {
    document.getElementById('name-gardien').style.border="2px solid red "
    document.getElementById("nameGardien-error").textContent = "Entre votre nom complet";
    isValid = false;
  }
  else{
     document.getElementById('name-gardien').style.border="2px solid green "
  document.getElementById("nameGardien-error").innerHTML="<p style='color:seagreen' >valid</p>";
 
  }
  // Validation de l'URL de la photo
  if (!urlRegex.test(photo_gardien)) {
    document.getElementById('photo_gardien').style.border="2px solid red "
    document.getElementById("photoGardien-error").textContent = "Veuillez fournir une URL valide pour la photo.";
    isValid = false;
  }
  else{
    document.getElementById('photo_gardien').style.border="2px solid green "
    document.getElementById("photoGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }



  // Validation de l'URL du drapeau
  if (!urlRegex.test(photo_drapeau)) {
    document.getElementById('photo_drapeau').style.border="2px solid red "
    document.getElementById("drapeauGardien-error").textContent = "Veuillez fournir une URL valide pour le drapeau.";
    isValid = false;
  }
  else{
     document.getElementById('photo_drapeau').style.border="2px solid green "
    document.getElementById("drapeauGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }

  // Validation de l'URL du logo
  if (!urlRegex.test(gardien_logo)) {
    document.getElementById('photo_logo').style.border="2px solid red "
    document.getElementById("logoGardien-error").textContent = "Veuillez fournir une URL valide pour le logo.";
    isValid = false;
  }
  else{
    document.getElementById('photo_logo').style.border="2px solid green "
    document.getElementById("logoGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
    
    }
  // Validation de les statistiques 
  if (!numberRegex.test(rating_gardien) || rating_gardien <= 10 || rating_gardien >= 100) {
    document.getElementById('rating_Gardien').style.border="2px solid red "
    document.getElementById("ratingGardien-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
   
    
  }
  else{
    document.getElementById('rating_Gardien').style.border="2px solid green "
    document.getElementById("ratinggardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
    
    }
  if (!numberRegex.test(diving) || diving <= 10 || diving >= 100) {
    document.getElementById('diving').style.border="2px solid red "
    document.getElementById("divingGardien-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
     document.getElementById('diving').style.border="2px solid green "
    document.getElementById("divingGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(handling) || handling <= 10 || handling >= 100) {
    document.getElementById('handling').style.border="2px solid red "
    document.getElementById("handlingGardien-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('handling').style.border="2px solid green "
    document.getElementById("handlingGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(kicking) || kicking <= 10 || kicking>= 100) {
    document.getElementById('kicking').style.border="2px solid red "
    document.getElementById("kickingGardien-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('kicking').style.border="2px solid green "
    document.getElementById("kickingGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(reflexes) || reflexes <= 10 || reflexes>= 100) {
    document.getElementById('reflexes').style.border="2px solid red "
    document.getElementById("reflexeGardien-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('reflexes').style.border="2px solid green "
    document.getElementById("reflexeGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(speed) || speed  <= 10 || speed  >= 100) {
    document.getElementById('speed').style.border="2px solid red "
    document.getElementById("speedGardien-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
     document.getElementById('speed').style.border="2px solid green"
    document.getElementById("speedGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }
  if (!numberRegex.test(positioning) || positioning <= 10 || positioning >= 100) {
    document.getElementById('positioning').style.border="2px solid red "
    document.getElementById("positioningGardien-error").textContent = "La note doit être un nombre entre 10 et 100.";
    isValid = false;
  }
  else{
    document.getElementById('positioning').style.border="2px solid green "
    document.getElementById("positioningGardien-error").innerHTML="<p style='color:seagreen'>valid</p>";
   
    }



  return isValid; 


}








const terrain = document.querySelector(".equipe");
const formationSelector = document.querySelector(".formation-selector");

formationSelector.addEventListener("change", () => {
  const formation = formationSelector.value;

  switch (formation) {
    case "4-3-3":
      terrain.style.gridTemplateAreas = `
        ". LW LW ST ST RW RW ."
        ". CM1 CM1 CM2 CM2 CM3 CM3 ."
        "LB LB CB1 CB1 CB2 CB2 RB RB"
        ". . . GK GK . . ."
      `;
      break;

    case "4-4-2":
      terrain.style.gridTemplateAreas = `
        ". . LW LW RW RW . ."
        "CM1 CM1 ST ST CM2 CM2 CM3 CM3"
        "LB LB CB1 CB1 CB2 CB2 RB RB"
        ". . . GK GK . . ."
      `;
      break;

    default:
      break;
  }
});
