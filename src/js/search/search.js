import axios from 'axios';
import { BASE_URL } from '../global/const';
import { emptyRequest } from '../global/emptyrequest';
import { createPage } from '../cocktailspage/getcocktailspage';
import { refs } from '../global/refs';
const { cocktailsList } = refs;

export async function getDataFromSearch(path, search) {
  try {
    return  await axios.get(`${BASE_URL}${path}${search}`);
  } catch (error) {
    console.log(error);
  }
}

export function renderPage(data) {
  data.then(e => {
    if (!e.data.drinks) {
      emptyRequest();
      return;
    }
    let list = 'cocktailsList';
    createPage(e, list);
  });
}
