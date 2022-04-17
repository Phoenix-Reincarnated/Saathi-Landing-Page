import React from 'react'
import { Button, Grid } from '@mui/material'
import HeroImage from '../../asset/HeroImage.png'
import { styled } from '@mui/material/styles'
import { useStyles } from './HeroSection.style'
import '@lottiefiles/lottie-player'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00AB55'),
  backgroundColor: '#00AB55',
  '&:hover': {
    backgroundColor: '#00AB55',
  },
}))

const UncolorButton = styled(Button)(() => ({
  color: '#00AB55',
  border: '1px solid #00AB55',
  '&:hover': {
    color: '#00AB55',
  },
}))

const HeroSection = () => {
  const classes = useStyles()
  return (
    <div style={{ backgroundColor: '#F7F9FC' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 30 }}>
        <Grid item xs={12} sm={6} className={classes.leftSide}>
          <div
            style={{
              fontSize: '46px',
              fontWeight: '600',
              lineHeight: '4rem',
            }}
          >
            <span className={classes.heading1} style={{ color: '#00AB55' }}>
              SAA-थी,
            </span>
            <br />
            <span className={classes.heading2}>YOUR HELPING HAND </span>
          </div>
          <p className={classes.heading3}>
            A Cross Platform Application built to Leverage the Intelligent
            Processing Tools and Algorithms in order to help the Visually
            Impaired see and navigate.
          </p>
          <div className={classes.heading3}>
            <ColorButton
              variant="contained"
              sx={{
                marginRight: '2vw',
                paddingInline: '2rem',
                fontSize: '16px',
              }}
            >
              Get App
            </ColorButton>
            <UncolorButton variant="outlined" sx={{ fontSize: '16px' }}>
              Read Documentation
            </UncolorButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={HeroImage} className={classes.heroImageStyle} alt="" />
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroSection
