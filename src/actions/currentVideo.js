var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'CHANGE_VIDEO',
    video: video
  }
  //if clicked, update video
};

export default changeVideo;
