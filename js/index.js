const clearLen = () => {
    const elements = document.getElementsByClassName('movie-card__categories');
    for (let e in elements){
        elements[e].innerText = (elements[e].innerText && elements[e].innerText.length > 42) ? elements[e].innerText.substr(0, 40) + '...' : elements[e].innerText;
        console.log(elements[e].innerText);
    }
};

document.addEventListener("DOMContentLoaded", () => {clearLen();});