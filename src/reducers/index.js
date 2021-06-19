import { combineReducers } from "redux";
import { Album } from "../../public/data";

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: Album,
  selectedSong: selectedSongReducer,
});
