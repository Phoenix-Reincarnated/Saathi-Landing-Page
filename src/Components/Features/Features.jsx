import React from 'react'
import backgroundImg from '../../asset/background2.gif'
import feature1 from '../../asset/lable1.jpg'
import feature2 from '../../asset/vibrate2.jpg'
import feature3 from '../../asset/button3.jpg'
import feature4 from '../../asset/offline4.jpg'
import feature5 from '../../asset/fast5.jpg'
import feature6 from '../../asset/torch6.jpg'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { useStyles } from '../HeroSection/HeroSection.style'

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

const Features = () => {
  const classes = useStyles()
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          marginTop: '3rem',
        }}
      >
        <div
          style={{
            fontSize: '38px',
            fontWeight: '600',
            lineHeight: '4rem',
            textAlign: 'center',
            paddingBottom: '1.5rem',
          }}
        >
          <span style={{ color: '#00AB55' }}>Unique &nbsp;</span>
          <span>Selling Points </span>
        </div>
        <Grid
          data-aos="fade-up"
          className={classes.gridStyle1}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '1rem' }} elevation={5}>
              <CardActionArea sx={{ height: '12rem' }}>
                <CardMedia>
                  <img
                    src={feature1}
                    width={60}
                    style={{ marginLeft: '1rem' }}
                    alt=".."
                  />
                </CardMedia>
                <CardContent sx={{ fontSize: '17px' }}>
                  Every feature, from image labeling to currency detection uses
                  a text-to-speech feature to speak out to the user whatever is
                  detected
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '1rem' }} elevation={5}>
              <CardActionArea sx={{ height: '12rem' }}>
                <CardMedia>
                  <img
                    style={{ marginLeft: '1rem' }}
                    src={feature2}
                    width={60}
                    alt=".."
                  />
                </CardMedia>
                <CardContent sx={{ fontSize: '17px' }}>
                  Each screen vibrates with different intensity on being opened
                  helping to user navigate. The buttons also have unique
                  vibrations for better accessibility
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '1rem' }} elevation={5}>
              <CardActionArea sx={{ height: '12rem' }}>
                <CardMedia>
                  <img
                    src={feature3}
                    style={{ marginLeft: '1rem' }}
                    width={60}
                    alt=".."
                  />
                </CardMedia>
                <CardContent sx={{ fontSize: '17px' }}>
                  We have minimum number of buttons of large size. For instance,
                  the top half of the screen will be one button, and the bottom
                  half, another so that a user does not need to precisely click.
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid
          data-aos="fade-up"
          className={classes.gridStyle1}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '1rem' }} elevation={5}>
              <CardActionArea sx={{ height: '12rem' }}>
                <CardMedia>
                  <img
                    src={feature4}
                    style={{ marginLeft: '1rem' }}
                    width={60}
                    alt=".."
                  />
                </CardMedia>
                <CardContent sx={{ fontSize: '17px' }}>
                  All features, except the image captioning feature, work
                  completely 4. offline and do not require any internet
                  connection
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '1rem' }} elevation={5}>
              <CardActionArea sx={{ height: '12rem' }}>
                <CardMedia>
                  <img
                    src={feature5}
                    style={{ marginLeft: '1rem' }}
                    width={60}
                    alt=".."
                  />
                </CardMedia>
                <CardContent sx={{ fontSize: '17px' }}>
                  All offline features work in real-time and do not need any
                  pre-processing time for the models to make predictions so the
                  user can get instant updates
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '1rem' }} elevation={5}>
              <CardActionArea sx={{ height: '12rem' }}>
                <CardMedia>
                  <img
                    src={feature6}
                    style={{ marginLeft: '1rem' }}
                    width={60}
                    alt=".."
                  />
                </CardMedia>
                <CardContent sx={{ fontSize: '17px' }}>
                  We Have also included Torch Feature which will automatically
                  turn 6. on when it’s night for Better OCR or In case of
                  Emergency.
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          fontSize: '28px',
          lineHeight: '2rem',
          paddingTop: '3rem',
          textAlign: 'center',
        }}
      >
        <h1>ONE-STOP SOLUTION FOR VISUALLY IMPAIRED</h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingBottom: '3rem',
        }}
      >
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
    </>
  )
}

export default Features
