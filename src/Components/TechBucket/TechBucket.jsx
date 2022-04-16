import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material'
import { useStyles } from '../HeroSection/HeroSection.style'

const TechBucket = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.gridStyle} container spacing={5}>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: '1rem' }} elevation={5}>
          <CardActionArea>
            <CardMedia>
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_g1pduE.json"
                loop=""
                style={{
                  width: 'auto',
                  height: '20vw',
                }}
                autoplay=""
              ></lottie-player>
            </CardMedia>
            <CardContent>AI &amp; ML</CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: '1rem' }} elevation={5}>
          <CardActionArea>
            <CardMedia>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_ervn0f7j.json"
                loop=""
                style={{ width: 'auto', height: '20vw' }}
                autoplay=""
              ></lottie-player>
            </CardMedia>
            <CardContent>CLOUD COMPUTING</CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: '1rem' }} elevation={5}>
          <CardActionArea>
            <CardMedia>
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_xqbchnql.json"
                loop=""
                style={{ width: 'auto', height: '20vw' }}
                autoplay=""
              ></lottie-player>
            </CardMedia>
            <CardContent>BLOCK CHAIN</CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TechBucket
