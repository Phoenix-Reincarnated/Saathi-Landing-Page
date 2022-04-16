import { Link } from 'react-router-dom'
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { useTheme } from '@mui/material/styles'
import { drawerWidth, DrawerHeader, useStyles } from '../layouts.style.js'

import { SideNavItems } from './SideNavItems.js'

const MenuItems = () => {
  const classes = useStyles()
  const renderComponent = SideNavItems.map((item, index) => {
    return (
      <Link
        to={item.url}
        style={{ textDecoration: 'none', color: 'green' }}
        key={index}
      >
        <ListItem button divider>
          <ListItemText
            className={classes.sideNavItems}
            inset
            primary={item.title}
          />
        </ListItem>
      </Link>
    )
  })
  return renderComponent
}

export default function SideNav({ open, handleDrawerClose }) {
  const theme = useTheme()
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          background: theme.palette.primary,
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <MenuItems />
        </List>
      </Drawer>
    </>
  )
}
