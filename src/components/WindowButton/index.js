import styled from "@emotion/styled"
import { Button } from "@mui/material"

const WindowButton = styled(Button) ({
    minWidth: "auto",
    width: "auto",
    border: "1.8px solid transparent",
    "&:hover": {
        border: "1.8px solid transparent"
    },
    "&.Mui-disabled": {
        border: "1.8px solid transparent"
    }
})

export { WindowButton }