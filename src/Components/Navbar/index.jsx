import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarLogic } from './navbar'
// assets
import NavLogo from '../../asset/logo.png'
import MenuIcon from '@mui/icons-material/Menu'

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

function Navbar() {
  const { classes, toggle, setToggle, isMobile } = NavbarLogic()

  return (
    <>
      <Toolbar className={classes.navToolbar}>
        {/* Nav Header */}
        <Link to="/">
          <img src={NavLogo} className={classes.navLogo} alt="nav logo" />
        </Link>
        {isMobile ? (
          <div className={classes.allNavItems}>
            {/* ---------------Desktop View Nav items-------------------------- */}

            <Link to="/" className={classes.navLink}>
              <Typography variant="body2" className={classes.navItems}>
                Home
              </Typography>
            </Link>

            <Link to="/" className={classes.navLink}>
              <Typography variant="body2" className={classes.navItems}>
                Documentation
              </Typography>
            </Link>

            <Link to="/" className={classes.navLink}>
              <Typography variant="body2" className={classes.navItems}>
                Contact
              </Typography>
            </Link>

            <Link to={'/'} className={classes.navLink}>
              <Typography variant="body2" className={classes.navItems_Login}>
                Get App
              </Typography>
            </Link>

            {/* ---------------End of  Desktop View Nav items-------------------------- */}
          </div>
        ) : (
          <>
            {/* Mobile view navbar */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={() => setToggle(true)}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon className={classes.menuButtonHam} />
            </IconButton>

            {/* --------------------------------------FOR MOBILE VIEW--------------------------- */}
            <Drawer
              anchor="left"
              open={toggle}
              onClose={() => setToggle(false)}
            >
              <List className={classes.list}>
                <Link to="/" className={classes.navLink}>
                  <ListItem button divider>
                    <ListItemText
                      inset
                      primary="Documentation"
                      className={classes.mobilenavItems}
                      onClick={() => setToggle(false)}
                    />
                  </ListItem>
                </Link>

                <Link to="/" className={classes.navLink}>
                  <ListItem button divider>
                    <ListItemText
                      inset
                      primary="Contact"
                      className={classes.mobilenavItems}
                      onClick={() => setToggle(false)}
                    />
                  </ListItem>
                </Link>

                <Link to={'/'} className={classes.navLink}>
                  <ListItem button divider>
                    <ListItemText
                      inset
                      primary="Get App"
                      className={classes.mobilenavItems}
                      onClick={() => setToggle(false)}
                    />
                  </ListItem>
                </Link>
              </List>
            </Drawer>
            {/* ---------------------------------FOR MOBILE VIEW----------------------------------- */}
          </>
        )}
      </Toolbar>
    </>
  )
}

export default Navbar
