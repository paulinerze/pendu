Pendu réalisé en React : récupération de la "banque de mots" via une API, stockage de cette banque dans la session de l'utilisateur, ajout d'un canva pour afficher le bonhomme.

L’affichage comprend deux parties : le masque de la devinette, et une série de boutons d'essai, à raison d’un par lettre. Par exemple, deux rangées de 13.
Le masque utilise un _underscore_ ( _ ) pour toute lettre de la devinette qui n’a pas encore été révélé.
On prend soin de bien séparer visuellement chaque lettre à deviner, pour faciliter la perception des tailles des mots.
Pour simplifier la saisie et l’exploitation des lettres, on cantonnera les devinettes et les boutons à l'alphabet latin majuscule, sans signes diacritiques (accents, cédilles, etc.). Donc 26 lettres de A à Z.
Les lettres déjà essayées doivent être signalées visuellement (par exemple, grisées). Il n'est pas obligatoire d'interdire une nouvelle tentative dessus, c'est comme vous voulez.
Une fois le texte deviné, la liste des boutons de lettres est remplacée par un seul bouton qui permet de redémarrer une partie… sans avoir à recharger la page !

TODO : optimiser la procédure concernant la concaténation des lettres utilisées dans le cas où il y a plusieurs occurences dans le mot. 
