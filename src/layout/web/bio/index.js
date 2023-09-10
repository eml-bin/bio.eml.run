import { Box, Grid } from '@mui/material'
import React from 'react'
import './bio.css'
import { useBio } from './hook'
import { Construction } from '@mui/icons-material'
import TimelineIcon from '@mui/icons-material/Timeline';
import { WindowButton } from '../../../components/WindowButton'
import { Tools } from '../../tools'
import { Timeline  } from '../../timeline'
import { useConstants } from '../../../core/hooks/useConstants'
import { Data } from '../../data'

const Bio = () => {

    const { 
        sectionButtonPressed,
        handleSectionButtonClick, 
    } = useBio()

    const {
        sections
    } = useConstants()

    return (
        <>
            <Grid container className={'grid-container'} p={2}>
                <Grid item xs={4} display={'flex'} className={'principal-grid'} alignItems={'center'}>
                    <Data />
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
                    </Box>
                </Grid>
                <Grid className='sections-grid' item xs={8}>
                    <Tools showAnimation={sectionButtonPressed === sections.TOOLS}/>
                    <Timeline showAnimation={sectionButtonPressed === sections.TIMELINE}/>
                </Grid>
            </Grid>
        </>
    )
}

export { Bio }  