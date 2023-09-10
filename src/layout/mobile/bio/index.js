import { Grid } from "@mui/material"
import './mobilebio.css'
import { Construction } from "@mui/icons-material"
import TimelineIcon from '@mui/icons-material/Timeline';
import { useConstants } from "../../../core/hooks/useConstants"
import { WindowButton } from "../../../components/WindowButton"
import { Tools } from "../../tools";
import { Timeline } from "../../timeline";
import { useMobileBio } from "./hook";
import { Data } from "../../data";

const BioMobile = () => {

    const { 
        sections
    } = useConstants()

    const {
        visibleSection,
        handleOnClickSection
    } = useMobileBio()

    return (
        <Grid container p={2} className="mobile-container">
            <Grid className="data-grid" item xs={12}>
                <Data />
            </Grid>
            <Grid item xs={12} className={'menu'}>
                <WindowButton 
                    size="small"
                    variant='outlined' 
                    title={sections.TOOLS}
                    className={`${sections.TOOLS} neon-ef`} 
                    onClick={() => handleOnClickSection(sections.TOOLS)}
                >
                    <Construction />
                </WindowButton>
                <WindowButton 
                    size="small"
                    variant='outlined' 
                    title={sections.TIMELINE}
                    className={`${sections.TIMELINE} neon-ef`} 
                    onClick={() => handleOnClickSection(sections.TIMELINE)}
                >
                    <TimelineIcon />
                </WindowButton>
            </Grid>
            <Grid className="sections-grid" item xs={12}>
                {
                    visibleSection === sections.TOOLS && <Tools />
                }
                {
                    visibleSection === sections.TIMELINE && <Timeline />
                }
            </Grid>
        </Grid>
    )
}

export { BioMobile }