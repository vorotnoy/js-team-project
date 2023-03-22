import axios from 'axios';
import { BASE_URL } from '../global/const';
import { emptyRequest } from '../global/emptyrequest';
import { createPage } from '../cocktailspage/getcocktailspage';
import {refs} from '../global/refs'
const {cocktailsList, } =refs


export async function getDataFromSearch (path, search){
    try {
      const data = await axios.get(`${BASE_URL}${path}${search}`);
  
      if (!data.data.drinks) {
        emptyRequest();
        return;
      }
      let list = 'cocktailsList'
      createPage(data, list);
    } catch (error) {
      console.log(error);
    }
  }