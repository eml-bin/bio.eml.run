import { Box, Grid } from "@mui/material"
import './mobilebio.css'
import { InfoBox } from "../../../components/InfoBox/InfoBox"
import { Construction, PsychologyAlt } from "@mui/icons-material"
import TimelineIcon from '@mui/icons-material/Timeline';
import { useConstants } from "../../../core/hooks/useConstants"
import { useFormatters } from "../../../core/hooks/useFormatters"
import { WindowButton } from "../../../components/WindowButton"
import { Tools } from "../../tools";
import { Timeline } from "../../timeline";
import { Questionary } from "../../questionary";
import { useMobileBio } from "./hook";

const BioMobile = () => {

    const { 
        sections,
        docs,
        personalData,
        linksData 
    } = useConstants()

    const {
        visibleSection,
        handleOnClickSection
    } = useMobileBio()

    const { linkFormatter } = useFormatters()

    return (
        <Grid container p={2} className="mobile-container">
            <Grid className="data-grid" item xs={12}>
                <Box className={'mossgreen-window neon-ef'}>
                    <div className='binary-jumpline' />
                    <div className='binary-jumpline' />
                    <div className='binary-jumpline' />
                    <InfoBox
                        titleLabel={'👤 data'}
                        boxClass={'personal-data'}
                    >
                            {
                                personalData.map((item, idx) => (
                                    <span key={`${item.key}-${idx}`} className="typing"> {`${item.key}: ${item.value}`} </span>
                                ))
                            }
                    </InfoBox>
                    <InfoBox
                        titleLabel={'🔗 links'}
                    >
                        <Box className={'links'}>
                            {
                                linksData.map((item,idx) => (
                                    <a key={`${item.key}-${idx}`} target={item.type === docs.WEBSITE && '_blank'}  href={`${linkFormatter(item.type)}${item.value}`} title={item.key} rel="noreferrer"> {item.emoji} </a>
                                ))
                            }
                        </Box>
                    </InfoBox>
                </Box>
            </Grid>
            <Grid xs={12} className={'menu'}>
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
                <WindowButton
                    size="small" 
                    variant='outlined' 
                    title={sections.QUESTIONARY}
                    className={`${sections.QUESTIONARY} neon-ef`} 
                    onClick={() => handleOnClickSection(sections.QUESTIONARY)}
                >
                    <PsychologyAlt />
                </WindowButton>
            </Grid>
            <Grid className="sections-grid" item xs={12}>
                {
                    visibleSection === sections.TOOLS && <Tools />
                }
                {
                    visibleSection === sections.TIMELINE && <Timeline />
                }
                {
                    visibleSection === sections.QUESTIONARY && <Questionary />
                }
            </Grid>
        </Grid>
    )
}

export { BioMobile }