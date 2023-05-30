import { useCallback } from "react"
import { DICTIONARY } from "../Constants";

export const useFormatters = () => {

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

    return {
        linkFormatter
    }

}