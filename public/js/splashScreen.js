/**
 * @param {String} imgSrc 
 * @param {Number} millisecond
 * @returns {Promise}
 */
function showSplashScreenAsync(imgSrc, millisecond) {

    let p = new Promise(async (onDone, _) => {
        let src = await fetch(imgSrc).then(function(resp) {
            return resp.blob();
        }).then(function (imgBlob) {
            return URL.createObjectURL(imgBlob);
        });

        let splashScreenHtmlString = `
        <div style="max-height:100vh;max-height:100svh;z-index:9999;text-align: center;overflow:hidden;">
            <img style="width:100%;height:calc(100vh - 3em);height:calc(100svh - 3em);object-fit: contain;" src="${src}" />
        </div>`;
        let splashScreen = htmlToElement(splashScreenHtmlString);
        document.querySelector("body").appendChild(splashScreen);
        setTimeout(function () {
            splashScreen.remove();
            onDone(splashScreen);
        }, millisecond);
    });
    return p;
}

function htmlToElement(htmlString) {
    var template = document.createElement('template');
    htmlString = htmlString.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = htmlString;
    return template.content.firstChild;
}