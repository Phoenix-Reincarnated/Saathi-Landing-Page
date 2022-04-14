import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/styles'
import { useState } from 'react'
import { useStyles } from './Navbar.style'


export const NavbarLogic = () => {
  const classes = useStyles()

  const [toggle, setToggle] = useState(false)


  // For media querries
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.up('md'))

  return { classes, toggle, setToggle, isMobile }
}
