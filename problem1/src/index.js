const englishCode = "en-US";
const spanishCode = "es-ES";
const iranianCode = "fa-IR";
function getAboutUsLink(language){
    if (language === iranianCode) {
        return "/درباره-ما"
    }else if (language === spanishCode) {
        return "/acerca-de"
    }else if (language === englishCode) {
        return "/about-us"
    }

    
}

console.log(getAboutUsLink("es-ES"))


module.exports = getAboutUsLink;