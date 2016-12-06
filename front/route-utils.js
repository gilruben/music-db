import store from './store/store';
import {getArtistsAsync} from './actions/artist-actions';


export const getAllArtists = () => {store.dispatch(getArtistsAsync())};
