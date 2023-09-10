/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Link, List, ListItem } from "@mui/material"
import React from "react"
import { InfoBox } from "../../components/InfoBox/InfoBox"
import { AccountBox, Translate } from "@mui/icons-material"
import { useFormatters } from "../../core/hooks/useFormatters"
import { useConstants } from "../../core/hooks/useConstants"
import { useData } from "./hook"
import './data.css'
import { useTranslation } from "react-i18next"

const Data = () => {

    const { 
        personalData, 
        linksData,
        docs
    } = useConstants()

    const { t } = useTranslation()

    const { linkFormatter } = useFormatters()

    const { handleDownload, handleChangeLang, lang } = useData()

    return (
        <Box className={'mossgreen-window neon-ef'}>
            <Box className="translation">
                <a href="#" onClick={handleChangeLang} style={{ padding: "5px" }}>
                    <Translate />
                    <span>{lang}</span>
                </a>
            </Box>
            <InfoBox
                TitleIconComponent={AccountBox}
                titleLabel={`👤 ${t('datos')}`}
                boxClass={'personal-data'}
            >
                {
                    personalData.map((item, idx) => (
                        <span key={`${item.key}-${idx}`} className='typing'> {`${t(item.key)}: ${t(item.value)}`} </span>
                    ))
                }
            </InfoBox>
            <InfoBox
                TitleIconComponent={Link}
                titleLabel={'🔗 links'}
                boxClass={'personal-data'}
            >
                <Box className={'links'}>
                    <List dense>
                        {
                            linksData.map((item,idx) => (
                                <ListItem key={`${item.key}-${idx}`}>
                                    {
                                        item.type === docs.FILE ? 
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                        <a title={t(item.key)} href="" onClick={(event) => { event.preventDefault(); handleDownload(item.value);}}> <span>{item.emoji}</span> <span>{t(item.key)}</span> </a>
                                        :
                                        <a target={item.type === docs.WEBSITE ? '_blank' : undefined}  href={`${linkFormatter(item.type)}${item.value}`} title={t(item.key)} rel="noreferrer"> <span>{item.emoji}</span> <span>{t(item.key)}</span> </a>
                                    }
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </InfoBox>
            <div className='binary-jumpline' />
        </Box>
    )
} 

export { Data }