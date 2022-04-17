import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
    heading1: {
        animation: '$iemHeadingAnimation 0.5s ease-in',
        animationDelay: '2.9s',
        animationIterationCount: '1',
        animationFillMode: 'forwards',
        opacity: '0',
    },
    '@keyframes iemHeadingAnimation': {
        from: {
            position: 'relative',
            top: '2vw',
            opacity: '0'
        },
        to: {
            position: 'relative',
            top: '0',
            opacity: '1'
        }
    },
    heading2: {
        animation: '$iemHeadingAnimation 0.5s ease-in',
        animationDelay: '3s',
        animationIterationCount: '1',
        animationFillMode: 'forwards',
        opacity: '0',
    },
    heading3: {
        fontSize: '20px',
        lineHeight: '2rem',
        animation: '$iemHeadingAnimation 0.5s ease-in',
        animationDelay: '3.2s',
        animationIterationCount: '1',
        animationFillMode: 'forwards',
        opacity: '0',
    },
    leftSide: {
        position: 'relative', left: '8vw', top: '11vw', paddingRight: '5rem',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '6rem',
            paddingRight: '0rem',
            position: 'relative', left: '2vw', top: '3vw',

        }
    },
    gridStyle: {
        flexGrow: 1, justifyContent: 'center', padding: '2rem 10rem', paddingBottom: '5rem',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 0rem'

        }
    },
    gridStyle1: {
        flexGrow: 1, justifyContent: 'center', padding: '1.5rem 10rem',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 0rem'

        }
    },
    heroImageStyle: {
        width: 480,
        [theme.breakpoints.down('sm')]: {
            width: 370,

        }
    },
    heroImageStyle1: {
        width: 480,
        marginLeft: '4rem',
        [theme.breakpoints.down('sm')]: {
            width: 370,
            marginLeft: '0rem',

        }
    },
    title: {
        flexGrow: 1,
        marginLeft: '2rem'
    },
    footerStyle: {
        textAlign: 'center',
        lineHeight: '1.8rem',
        padding: '1rem 12rem',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 1rem',

        }
    }
}))
