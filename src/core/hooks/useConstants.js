import { DICTIONARY, SEED } from "../Constants";
import { useMemo } from "react";

export const useConstants = () => {

    const sections = useMemo(() => DICTIONARY.SECTIONS, [])
    const docs = useMemo(() => DICTIONARY.DOCS, [])
    const langs = useMemo(() => DICTIONARY.LANGS, [])
    const codex = useMemo(() => SEED.CODEX, [])

    const personalData = useMemo(() => SEED.PERSONAL_DATA.BIO, [])
    const linksData = useMemo(() => SEED.PERSONAL_DATA.LINKS, [])
    const toolsData = useMemo(() => SEED.TOOLS, [])
    const timelineData = useMemo(() => SEED.TIMELINE, [])
    const questionaryData = useMemo(() => SEED.QUESTIONARY, [])

    return {
        codex,
        langs,
        docs,
        personalData,
        linksData,
        toolsData,
        timelineData,
        questionaryData,
        sections
    }

}