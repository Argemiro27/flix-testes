import styled from "styled-components"
import { TextField } from "@mui/material"


const inputLabelProps = {
    style: { color: '#858585' },
};

const inputProps = {
    style: { backgroundColor: '#201d21' },
};

export const TextInput = styled(TextField)`
    color: #858585 !important;
    & .MuiInputLabel-root {
        /* Passando InputLabelProps */
        color: ${inputLabelProps.style.color} !important;
      }
      
      & .MuiInputBase-root {
        /* Passando InputProps */
        background-color: ${inputProps.style.backgroundColor} !important;
      }
`