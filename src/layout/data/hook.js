import { useState } from "react";
import i18n from "../../i18n";
import { useConstants } from "../../core/hooks/useConstants";

export const useData = () => {

    const { langs } = useConstants()

    const [lang, setLang] = useState(langs.SPANISH)

    const handleDownload = (url) => {
        fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = 'eml-cv.pdf';
            link.click();
        })  
        .catch(console.error);
    }

    const handleChangeLang = (event) => {
        event.preventDefault()

        let newLang = langs.SPANISH

        switch (lang) {
            case langs.SPANISH:
                newLang = langs.ENGLISH
                break;
            default:
                newLang = langs.SPANISH
                break;
        }
            
        setLang(newLang)
        i18n.changeLanguage(newLang)
    }

    return {
        handleDownload,
        handleChangeLang,
        lang
    }
}