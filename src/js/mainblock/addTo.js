export function addToFavorites(evt) {
    const favoriteCocktails = [];
    const target = evt.target.classList;
    if (target.contains('addTo')) {
        console.log('click');

    }
    // localStorage.setItem("favoriteCocktails", JSON.stringify(favoriteCocktails));
};