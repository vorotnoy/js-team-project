import { returnCocktails } from "./js/mainblock/mainblock";
import { refs } from "./js/refs";
import { addToFavorites } from "./js/mainblock/addTo";


returnCocktails();
refs.cocktailsList.addEventListener('click', addToFavorites);