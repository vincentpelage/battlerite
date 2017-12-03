/*
 * Npm import
 */
import axios from 'axios';


/*
 * Local import
 */
import { WEATHER_LOAD, getWeather, TIME_LOAD_SYDNEY, getTimeSydney, TIME_LOAD_PARIS, getTimeParis } from 'src/store/reducer';


/*
 * Code
 */
const createMiddleware = store => next => (action) => {
  switch (action.type) {
    case action.type: {

    }

    default:
      // console.log(action);
  }

  // Go to the next
  next(action);
};


/*
 * Export default
 */
export default createMiddleware;
