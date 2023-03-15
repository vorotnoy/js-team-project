import { returnCocktails } from "./js/mainblock/mainblock";
import { refs } from "./js/refs";
import { toggleFavorites } from "./js/mainblock/toggleFavoriteCocktail";


returnCocktails();
refs.cocktailsList.addEventListener('click', toggleFavorites);