const update = () => {
    caches.delete("algorithm-net-sw-cache-v2").then((text_resp) => console.log(text_resp))//delte cache

    navigator.serviceWorker.getRegistrations()//unregister sw
        .then(registrations => {
            registrations.forEach(registration => {
                registration.unregister()
            })
        })
};
window.addEventListener("beforeunload", (e) => {//quando si chiude la pagiina
    let d = new Date();
    let reg = JSON.parse(window.localStorage.getItem("sw-reg"))

    if (window.localStorage.getItem("sw-reg") === null) {//se è la prima volta che viene 
        window.localStorage.setItem("sw-reg", JSON.stringify({
            register: true,
            time: Math.round(d.getTime() / (60 * 60 * 1000)),
            milliseconds: d.getTime()
        }))
    } else if ((Math.round(d.getTime() / (60 * 60 * 1000)) - reg.time) >= 3) {
        update();
        let d = new Date();
        window.localStorage.setItem("sw-reg", JSON.stringify({
            register: true,
            time: Math.round(d.getTime() / (60 * 60 * 1000)),
            milliseconds: d.getTime()
        }))

    } else {
        //pass
    }
}, false)
if ('serviceWorker' in navigator) {// Check that service workers are supported
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');

    });
}