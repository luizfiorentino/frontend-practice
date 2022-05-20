import { apiUrl } from "../../config/constants";
import axios from "axios";

import { fetchSpacesSuccess, appLoad } from "./slice";
//export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    try {
      //const spacesCount = getState().spaces.allSpaces.length
      //console.log("here");
      dispatch(appLoad(true));
      const response = await axios.get(`${apiUrl}/spaces`);

      //console.log(apiUrl);
      //console.log("response::", response);
      dispatch(fetchSpacesSuccess(response.data));
      dispatch(appLoad(false));
    } catch (e) {
      console.log(e.message);
    }
  };
};
