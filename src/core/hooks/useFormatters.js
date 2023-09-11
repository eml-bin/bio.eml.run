import { useCallback } from "react"
import { DICTIONARY } from "../Constants";
import { useTranslation } from "react-i18next";

export const useFormatters = () => {

    const { t } = useTranslation()

    const pluralOrNot = (pluralWord, quantity) => {
        return quantity > 1 ? pluralWord.slice(0) : pluralWord.slice(0,-1)
    }

    const linkFormatter = useCallback((type) => {
        switch (type) {
            case DICTIONARY.DOCS.PHONE:
                return 'tel:'
            case DICTIONARY.DOCS.MAIL:
                return 'mailto:'
            case DICTIONARY.DOCS.WEBSITE:
                return ''
            default:
                return ''
        }
    }, [])

    const durationFormatter = useCallback((duration) => {
        if (!duration) return ""

        if (duration.isActive) return t("Activo")

        if (duration.years && duration.months) {
            return `${duration.years} ${t(pluralOrNot("años", duration.years))}, ${duration.months} ${t(pluralOrNot("meses", duration.years))}`
        }

        if (duration.years) {
            return `${duration.years} ${t(pluralOrNot("años", duration.years))}`
        }
        
        if (duration.months) {
            return `${duration.months} ${t(pluralOrNot("meses", duration.months))}`
        }
    }, [t])

    return {
        linkFormatter,
        durationFormatter
    }

}