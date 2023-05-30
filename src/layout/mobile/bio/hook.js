import { useState } from "react"
import { useConstants } from "../../../core/hooks/useConstants"

export const useMobileBio = () => {

    const { sections } = useConstants()

    const [visibleSection, setVisibleSection] = useState(sections.TOOLS)

    const handleOnClickSection = (clickedSection) => {
        setVisibleSection(clickedSection)
    }

    return {
        visibleSection,
        handleOnClickSection
    }
}