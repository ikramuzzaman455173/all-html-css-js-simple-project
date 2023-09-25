let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid => {
  vid.onclick = () => {
    videoList.forEach(remove => { remove.classList.remove('active') });
    vid.classList.add('active');
    let src = vid.querySelector('.list-video').src;
    let title = vid.querySelector('.list-title').innerHTML;
    let liveViewHref = vid.querySelector(".list-link .view-link")
    let soruceCode = vid.querySelector(".list-link .view-source")
    console.log({liveViewHref});
    document.querySelector('.main-video-container .main-video').src = src;
    document.querySelector('.main-video-container .main-video').play();
    document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
    document.querySelector('.main-video-container .main-link .view-link').href = liveViewHref;
    document.querySelector('.main-video-container .main-link .view-source').href = soruceCode;
  };
});