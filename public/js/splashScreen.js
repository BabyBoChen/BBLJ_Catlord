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

        let bgSrc = "assets/splashScreenBg_450x637.png";

        let splashScreenHtmlString = `
        <div style="position:relative;height:100vh;height:100svh;z-index:9999;background-image: url('${bgSrc}');text-align:center;overflow:hidden;">
            <img style="position:relative;top:50%;-ms-transform: translateY(-50%);transform: translateY(-50%);width:100%;height:90vh;height:90svh;object-fit: contain;" src="${src}" />
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