import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    // get data from youtube api
    // once we have data, we need to change video list with videos
    // and change current video to first video in video list

    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (data) => {
      dispatch(changeVideo(data[0]))
      dispatch(changeVideoList(data))
    });
  }
};

export default handleVideoSearch;
