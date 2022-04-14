import { makeStyles } from '@mui/styles'

const sideNavWidth = 210

export const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  navLogo: {
    position: 'relative',
    width: '3rem',
    left: '4.4vw',
    flexGrow: 1,
  },
  allNavItems: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',
    left: '42vw',
    width: '39vw'
  },
  navItems: {
    flexGrow: 1,
    fontSize: '1.15rem !Important',
    margin: '0.3rem 2.67rem 0',
    '&:hover': {
      color: '#00Ab55'
    }
  },
  navItems_Login: {
    color: '#fff',
    flexGrow: 1,
    fontWeight: 600,
    fontSize: '1.15rem !Important',
    margin: '0 2.67rem',
    padding: '0.23rem 2.4rem',
    background: '#19CB71',
  },
  menuButton: {
    marginLeft: '45%'
  },
  menuButtonHam: {
    width: '10vw',
    height: '10vw'
  },
  list: {
    width: sideNavWidth
  },

  mobilenavItems: {
    color: '#4D7178',
    fontWeight: 600,
  },
  navLink: {
    textDecoration: 'none'
  },
  navToolbar: {
    backgroundColor: 'white',
    zIndex: '1',
  }
}))
