import React from 'react'
import { Box } from '@mui/material'
import { NavDropdown } from 'react-bootstrap'

function Home() {
  return (
    <Box
      sx={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center container-login"
    >
      <NavDropdown></NavDropdown>
    </Box>
  )
}

export default Home