import { Box, Grid } from '@mui/material'
import React from 'react'
import './bio.css'
import { useBio } from './hook'
import { AccountBox, Construction, PsychologyAlt, Link } from '@mui/icons-material'
import TimelineIcon from '@mui/icons-material/Timeline';
import { WindowButton } from '../../../components/WindowButton'
import { useFormatters } from '../../../core/hooks/useFormatters'
import { InfoBox } from '../../../components/InfoBox/InfoBox'
import { Tools } from '../../tools'
import { Timeline  } from '../../timeline'
import { Questionary } from '../../questionary'
import { useConstants } from '../../../core/hooks/useConstants'

const Bio = () => {

    const { 
        sectionButtonPressed,
        handleSectionButtonClick, 
    } = useBio()

    const { 
        personalData, 
        linksData,
        sections,
        docs
    } = useConstants()

    const { linkFormatter } = useFormatters()

    return (
        <>
            <Grid container className={'grid-container'} p={2}>
                <Grid item xs={4} display={'flex'} className={'principal-grid'} alignItems={'center'}>
                    <Box className={'mossgreen-window neon-ef'}>
                        <div className='binary-jumpline' />
                        <div className='binary-jumpline' />
                        <div className='binary-jumpline' />
                        <InfoBox
                            TitleIconComponent={AccountBox}
                            titleLabel={'👤 data'}
                            boxClass={'personal-data'}
                        >
                            {
                                personalData.map((item, idx) => (
                                    <span key={`${item.key}-${idx}`} className='typing'> {`${item.key}: ${item.value}`} </span>
                                ))
                            }
                        </InfoBox>
                        <InfoBox
                            TitleIconComponent={Link}
                            titleLabel={'🔗 links'}
                            boxClass={'personal-data'}
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
                    <Box className={'menu'}>
                        <WindowButton 
                            variant='outlined' 
                            title={sections.TOOLS} 
                            className={`${sections.TOOLS} neon-ef ${sectionButtonPressed === sections.TOOLS && 'snake-animation'}`} 
                            onClick={() => handleSectionButtonClick(sections.TOOLS) }
                        >
                            <Construction />
                        </WindowButton>
                        <WindowButton 
                            variant='outlined' 
                            title={sections.TIMELINE} 
                            className={`${sections.TIMELINE} neon-ef ${sectionButtonPressed === sections.TIMELINE && 'snake-animation'}`}
                            onClick={() => handleSectionButtonClick(sections.TIMELINE) }
                        >
                            <TimelineIcon />
                        </WindowButton>
                        <WindowButton 
                            variant='outlined' 
                            title={sections.QUESTIONARY} 
                            className={`${sections.QUESTIONARY} neon-ef ${sectionButtonPressed === sections.QUESTIONARY && 'snake-animation'}`} 
                            onClick={() => handleSectionButtonClick(sections.QUESTIONARY) }
                        >
                            <PsychologyAlt />
                        </WindowButton>
                    </Box>
                </Grid>
                <Grid className='sections-grid' item xs={8}>
                    <Tools showAnimation={sectionButtonPressed === sections.TOOLS}/>
                    <Timeline showAnimation={sectionButtonPressed === sections.TIMELINE}/>
                    <Questionary showAnimation={sectionButtonPressed === sections.QUESTIONARY}/>
                </Grid>
            </Grid>
        </>
    )
}

export { Bio }  