# TP React + Vite : Comment Personnaliser les Composants React avec des Props


## Introduction

Dans ce travail pratique guidé, vous apprendrez à personnaliser des composants React en utilisant
des props. Les props sont des arguments que vous passez à une fonction ou une classe, mais puisque
vos composants sont transformés en objets semblables à du HTML avec JSX, vous passez les props
comme s'il s'agissait d'attributs HTML. Contrairement aux éléments HTML, vous pouvez passer de
nombreux types de données différents, des chaînes de caractères aux tableaux, en passant par des
objets et même des fonctions.

Vous allez créer un composant qui affichera des informations sur des animaux. Ce composant
prendra le nom et le nom scientifique de l'animal sous forme de chaînes de caractères, la taille sous
forme d'entier, le régime alimentaire sous forme de tableau de chaînes de caractères, et des
informations supplémentaires sous forme d'objet. Vous passerez ces informations au nouveau
composant en tant que props et consommerez ces informations dans votre composant.

À la fin de ce TP, vous aurez un composant personnalisé capable de consommer différentes props.
Vous réutiliserez également le composant pour afficher un tableau de données en utilisant un
composant commun.