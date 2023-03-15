import * as icons from "../../images/svg/symbol-defs.svg";

export function toggleFavorites(evt) {
    const favoriteCocktails = [];
    try {
        try {
            toggle(evt.target.closest('button.addTo'));   
        } catch {
            toggle(evt.target.closest('button.removeFrom'));
        };
    } catch {
        return;
    };
};

function toggle(button) {
    if (button.classList.contains('removeFrom')) {
        console.log('remove');
        const addTo = `
            <button class="addTo">Add to
                <svg class="icon-heart">
                    <use href="${icons}#heart"></use>
                </svg>
            </button>
        `;
        button.insertAdjacentHTML("beforebegin", addTo);
        button.remove();
        return;
    } else {
    console.log('add');
    const removeFrom = `
        <button class="removeFrom">Remove
            <svg class="icon-heart-selected">
                <use href="${icons}#heart"></use>
            </svg>
        </button>
    `;
    button.insertAdjacentHTML("beforebegin", removeFrom);
    button.remove();
};
};