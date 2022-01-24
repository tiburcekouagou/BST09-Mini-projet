const objetsMangas = [
  {id: 1, img: "./image/4c6ee25042b014561effb42bad9269a9.jpg", name: "Boruto", description : "Boruto est le fils aîné de Naruto et d' Hinata. Il est également le grand frère d' Himawari, qu'il adore. Il fait équipe avec Sarada et Mitsuki. Son professeur est Konohamaru." },
  {id: 2, img: "./image/1008181.jpg", name: "One pièce", description: "One Piece est un manga japonais écrit et illustré par Eiichiro Oda. Il est publié en feuilleton dans le magazine de manga shōnen de Shueisha Weekly Shōnen Jump depuis juillet 1997, avec ses chapitres individuels compilés en 99 volumes tankōbon en juin 2021." },
  {id: 3, img: "./image/1495292642.jpg", name: "inconnu" },
  {id: 4, img: "./image/R (1).jpg", name: "inconnu" },
  {id: 5, img: "./image/R (2).jpg", name: "inconnu" },
  {id: 6, img: "./image/R (3).jpg", name: "inconnu" },
  {id: 7, img: "./image/R (4).jpg", name: "inconnu" },
  {id: 8, img: "./image/R (5).jpg", name: "inconnu" },
  {id: 9, img: "./image/R (6).jpg", name: "inconnu" },
  {id: 10, img: "./image/R (7).jpg", name: "inconnu" },
  {id: 11, img: "./image/R (8).jpg", name: "inconnu" },
  {id: 12, img: "./image/R (9).jpg", name: "inconnu" },
  {id: 13, img: "./image/R (10).jpg", name: "inconnu" },
  {id: 14, img: "./image/R (11).jpg", name: "Dbz", description: "Dragon Ball Z, abréviation commune DBZ) est une série télévisée d'animation japonaise adaptée de la franchise d' Akira Toriyama et produite par la Toei Animation. Il s'agit de la suite de Dragon Ball." },
  {id: 15, img: "./image/R (12).jpg", name: "Dbz", description: "Dragon Ball Z, abréviation commune DBZ) est une série télévisée d'animation japonaise adaptée de la franchise d' Akira Toriyama et produite par la Toei Animation. Il s'agit de la suite de Dragon Ball." },
  {id: 16, img: "./image/R (13).jpg", name: "Boruto", description : "Boruto est le fils aîné de Naruto et d' Hinata. Il est également le grand frère d' Himawari, qu'il adore. Il fait équipe avec Sarada et Mitsuki. Son professeur est Konohamaru." },
  {id: 17, img: "./image/R (14).jpg", name: "My hero accadémia" },
  {id: 18, img: "./image/R (15).jpg", name: "My hero accadémia" },
  {id: 19, img: "./image/R (16).jpg", name: "My hero accadémia" },
  {id: 20, img: "./image/R (17).jpg", name: "Bleach" },
  {id: 21, img: "./image/R (18).jpg", name: "Bleach" },
  {id: 22, img: "./image/thumb-1920-1038723.jpg", name: "One " },
  {id: 23, img: "./image/wallpapersden.com_one-piece-team-art_2560x1080.jpg", name: "One pièce", description: "One Piece est un manga japonais écrit et illustré par Eiichiro Oda. Il est publié en feuilleton dans le magazine de manga shōnen de Shueisha Weekly Shōnen Jump depuis juillet 1997, avec ses chapitres individuels compilés en 99 volumes tankōbon en juin 2021." },
  {id: 24, img: "./image/wallpapersden.com_one-piece-team-art_2560x1080.jpg", name: "One pièce", description: "One Piece est un manga japonais écrit et illustré par Eiichiro Oda. Il est publié en feuilleton dans le magazine de manga shōnen de Shueisha Weekly Shōnen Jump depuis juillet 1997, avec ses chapitres individuels compilés en 99 volumes tankōbon en juin 2021." },
  {id: 25, img: "./image/R.jpg", name: "Inconnu " },
]

// Ajout d'un Mouse over qui met les titres h2 en japonais au passage de la souris.

function mOver(obj, str) {
    obj.innerHTML = str;
  }
  function mOut(obj, str) {
    obj.innerHTML = str;
  }

/* ajoute d'un event listener sur les li
pour ajouter du fond de couleur 
*/

let navlinks = document.querySelectorAll('.navbar li');
for (let i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener('click', function() {
    document.getElementsByClassName('active')[0].classList.remove('active');
    this.classList.add('active');
  });
}

/* Afficher le menu de navigation au click du
   de la bar (hamburger) au coin superieur droit
   */
   
   let toggleButton = document.getElementsByClassName('toggle-button')[0];
   let navbar = document.getElementsByClassName('navbar')[0];
   
   toggleButton.addEventListener('click', () => {
     navbar.style.display = navbar.style.display === 'none' ? 'block' : 'none';
     toggleButton.innerHTML = navbar.style.display === 'none' ? '&#9776;' : '&times;';
   });

/* ajout d'une fonction qui affiche le titre lettre par lettre.*/

var i=0;
var texte = "Les Mangas";
var speed = 200;

window.addEventListener('load', typeWriter());
function typeWriter(){

  if(i < texte.length){
    document.getElementById("titre").innerHTML += texte.charAt(i);
    /*dans le html on selectionne l'id "titre" pour y écrire et y ajouter un caractère tant que le titre n'est pas complet*/
    i++;
    setTimeout(typeWriter, speed);
  }
}