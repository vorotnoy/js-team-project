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
        console.log('hello i am Return');
        return;
    };
};

function toggle(button) {
    if (button.classList.contains('removeFrom')) {
        console.log('hello i am Remove');
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
    console.log('hello i am Add to');
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