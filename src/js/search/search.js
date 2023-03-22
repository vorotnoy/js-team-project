import axios from 'axios';
import { BASE_URL } from '../global/const';
import { emptyRequest } from '../global/emptyrequest';
import { createPage } from '../cocktailspage/getcocktailspage';


export async function getDataFromSearch (path, search){
    try {
      const data = await axios.get(`${BASE_URL}${path}${search}`);
  
      if (!data.data.drinks) {
        emptyRequest();
        return;
      }
      createPage(data);
    } catch (error) {
      console.log(error);
    }
  }