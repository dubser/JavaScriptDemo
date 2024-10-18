let CookkName = "SduCookie";  /* Nom du cookie*/
let CookValue = "123";        /* Valeur du Cookie*/
let ListString = " ";         /* Contenu a afficher dans ListWindow*/

let text = "Affichage des résultats. ";

function ecrire() {
     /*utilisé*/
    console.log( Date() + " Bouton Ecrire Cookie CookName: " +CookkName
    +"  "+CookValue);
    document.getElementById("ListWindow").innerHTML = Date() + "<br>" +
    "Écrire Cookie cliqué : " +CookkName
    +"  "+CookValue;
    document.cookie = CookkName+"="+ CookValue;
    lire();
}

function lire() {
     /*utilisé*/
     let tmp=" ";
    tmp= document.cookie 
    if(tmp==""){
        document.getElementById("ListWindow").innerHTML = Date()
        +"<br>" + "Pas de cookies.." ;
      } else {
        document.getElementById("ListWindow").innerHTML = Date()
    +"<br>" +document.cookie ;
      }    
}

function lireTout() {
     /*Pas utilisé*/
        document.getElementById("ListWindow").innerHTML = Date() +
        " La fonction LireTout s'active! "+ CookkName ;  
        console.log(document.cookie);

        document.getElementById("ListWindow").innerHTML = document.cookie
}
function supprimer() {
     /*Pas utilisé*/
    alert("Supprimer Cookie a été cliqué !");
   /* document.getElementById("ListWindow").innerHTML = text;*/
    document.cookie = "username=CookkName; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

/* Fonction qui demande le nom du Cookie a traiter*/
function GetCokName() {
     /*Pas utilisé*/
    let tmp=" ";
    alert("Le nom du cookie est: "+CookkName);

    tmp = prompt("Saisir le nom du Cookie  ", CookkName);
    if (tmp!=null)CookkName=tmp;
    /*alert("Le nom du cookie est: "+CookkName);*/
    

    tmp = prompt("Saisir la valeur du cookie.", CookValue);
    if (tmp!=null)CookValue=tmp;

    /*alert("La valeur du cookie est: "+CookValue );*/

    document.getElementById("CokName").innerHTML = CookkName;
    if(CookkName =="*"){ 
        alert(" Le Joker * est utilisé");
        document.getElementById("ListWindow").innerHTML = Date()  
        +"<br>" + " Le joker * est utilisé comme nom de cookie.! ";
        lireTout();
    }  
}

/* Demande le nom du Cookie a traiter*/ 
  /*utilisé*/ 

function GetCokNam(event) {
  /*alert("On Blurr activé");*/
  let tmp=document.getElementById('cookNameIn');
  /*alert("Nom " + tmp.value);*/
  if (tmp.value==="")return;
  CookkName=tmp.value;
  RefreshInput()
}

/* Demande la valeur du Cookie a traiter*/
/*utilisé*/
function GetCokValue(event) {
      let tmp=document.getElementById('cookValuIn');
      /*alert("Value " + tmp.value);*/
      if (tmp.value==="")return;
      CookValue=tmp.value;
      RefreshInput()
  }

function RefreshInput() {
  /*utilisé*/
  /*Rafraichit les fenetre de saisies*/

 document.getElementById('cookNameIn').value=CookkName;
 document.getElementById('cookValuIn').value=CookValue;

 }

function test() {
  /*Pas utilisé*/
 alert("test a été cliqué !");
 RefreshInput()
/* document.getElementById("ListWindow").innerHTML = text;*/

}
  