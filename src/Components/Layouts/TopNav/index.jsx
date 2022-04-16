import { Button, Typography, Toolbar } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'

import { AppBar, useStyles } from '../layouts.style.js'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00AB55'),
  backgroundColor: '#00AB55',
  '&:hover': {
    backgroundColor: '#00AB55',
  },
}))

export default function TopNav({ open, handleDrawerOpen }) {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" open={open} sx={{ bgcolor: '#fff' }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap component="div" className={classes.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 95 71"
            >
              <rect
                width="16.811"
                height="68.926"
                x="0.664"
                y="7.769"
                fill="#00AB55"
                stroke="#00AB55"
                rx="8.406"
                transform="rotate(-25 .664 7.77)"
              ></rect>
              <rect
                width="16.811"
                height="68.926"
                x="28.665"
                y="7.769"
                fill="#00AB55"
                stroke="#00AB55"
                rx="8.406"
                transform="rotate(-25 28.665 7.77)"
              ></rect>
              <rect
                width="16.811"
                height="16.81"
                x="78.769"
                y="0.664"
                fill="#00AB55"
                stroke="#00AB55"
                rx="8.405"
                transform="rotate(25 78.77 .664)"
              ></rect>
            </svg>
          </Typography>
          <ColorButton sx={{ flexGrow: 0 }} variant="contained">
            Get the App
          </ColorButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
