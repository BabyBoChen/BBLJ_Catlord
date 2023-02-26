/**
 * @param {String} imgSrc 
 * @param {Number} millisecond
 * @returns {Promise}
 */
function showSplashScreenAsync(imgSrc, millisecond) {
    let p = new Promise(async (onDone, _) => {
        let src = await fetch(imgSrc).then(function(resp) {
            return resp.blob();
        }).then(function(imgBlob){
            return URL.createObjectURL(imgBlob);
        });
        let splashScreenHtmlString = `
        <div style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:9999;background-color:#9E9E9E;text-align: center;">
            <div style="width: 100%;height: 40vh;height: 40svh;position: absolute;top: 50%;-ms-transform: translateY(-50%);transform: translateY(-50%);text-align:center;margin: 0;">
                <img style="width:30vh;width:30svh;max-width: 80%;" src="${src}"/>
                <h1 style="color:#dee117;font-size:1.75rem;text-shadow: 2px 2px 2px rgba(0,0,0,0.5);">請教貓神</h1>
                <img style="height:5vh;height:5svh;" src="/assets/loading.gif"/>
            </div>
        </div>`;
        let splashScreen = htmlToElement(splashScreenHtmlString);
        document.querySelector("body").appendChild(splashScreen);
        setTimeout(function(){
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