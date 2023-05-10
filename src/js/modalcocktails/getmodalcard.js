// import { refs } from '../global/refs';
// const { galleryEl } = refs;
// import {defuneButton} from '../cocktailspage/getaddremovebutton'
// export function displayMoreInfo(data) {
//     const result = data
//       .map(
//         drink =>
//           `<h2 class="modal-header">${drink.strDrink}</h2>
//           <div class="modal-layout-flex">
//               <div class="modal-instraction-box">
//                   <h3 class="modal-sub-header">Instructions: </h3>
//                   <p class="modal-desc">${drink.strInstructions}</p>
//               </div>
//               <div class="modal-layout-box">
//                   <div class="modal-img-box"><img class="modal-image" src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/></div>
//                   <div class="modal-ingr-box">
//                       <h3 class="modal-ingr-desk">Ingredients</h3>
//                       <p class="modal-per-glass">Per cocktail</p>
//                       <ul class="modal-ingredients-list list-scroll"></ul>
//                   </div>
//                   </div>
//               </div>
//           </div>
//           ${defuneButton(
//             data.idDrink,
//             data.strDrink,
//             data.strDrinkThumb
//           )}
//           `
//       )
//       .join('');
  
//     galleryEl.innerHTML = result;
//   }