module.exports = () => {
    document.onreadystatechange = function () {
        if (document.readyState == "interactive") {
        
            var iframes = document.querySelectorAll('iframe');
            console.log(iframes);
            var pauseAllYouTubeVideos = () => {
                var iframes = document.querySelectorAll('iframe');
                Array.prototype.forEach.call(iframes, iframe => {
                    iframe.contentWindow.postMessage(JSON.stringify({
                        event: 'command',
                        func: 'pauseVideo'
                    }), '*');
                });
            }
            
            var thumbnails = document.querySelectorAll('.thumbnails__block');
            thumbnails.forEach(function (a) {
                a.addEventListener("click", function () {
                    pauseAllYouTubeVideos();
                })
            });

        }
    }
};