module.exports = () => {
    const BODY = document.querySelector('body');
    const THUMBNAIL_CONTAINER = document.querySelector('.docs__video-iframe-thumbnail-container');
    const THEATRE_VIEW_CONTAINER = document.querySelector('.yt-video-iframe');
    const ORIGINAL_VID_CONTAINER = document.querySelector('#vid');
    const IMG_THUMBNAIL = document.querySelector('.docs__video-iframe-thumbnail');
    const IFRAME_SRC = document.querySelector('#vid').getAttribute('src');
    const YT_VIDEO_ID = IFRAME_SRC.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();

    ORIGINAL_VID_CONTAINER.remove();


    // base youtube img thumbnail url
    // http://img.youtube.com/vi/[video-id]/[thumbnail-number].jpg
    // YT provides 4 thumbnails that can be used [0, 1, 2, 3].
    const URL = `http://img.youtube.com/vi/${YT_VIDEO_ID}/0.jpg`;

    THEATRE_VIEW_CONTAINER.setAttribute('src', `https://www.youtube.com/embed/${YT_VIDEO_ID}`);
    IMG_THUMBNAIL.setAttribute('src', URL);

    function showVideo() {
        BODY.classList.add('video-iframe-is-shown');
        window.Waypoint.refreshAll();
    }

    THUMBNAIL_CONTAINER.addEventListener('click', () => showVideo());
};
