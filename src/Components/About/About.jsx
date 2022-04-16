import React from 'react'
import { Grid } from '@mui/material'
import { useStyles } from '../HeroSection/HeroSection.style'
import '@lottiefiles/lottie-player'
import aboutImg from '../../asset/about.jpg'

const About = () => {
  const classes = useStyles()
  return (
    <div style={{ backgroundColor: '#F7F9FC' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 20 }}>
        <Grid item xs={12} sm={6}>
          <img
            data-aos="zoom-in"
            src={aboutImg}
            className={classes.heroImageStyle}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              fontFamily: 'inherit',
              paddingTop: '2rem',
            }}
          >
            <div
              style={{
                fontSize: '38px',
                paddingLeft: '2rem',
                lineHeight: '4.3rem',
              }}
            >
              <span style={{ color: '#00AB55' }}>Application </span> Features
            </div>
            <ul style={{ fontSize: '21px', lineHeight: '3.3rem' }}>
              <li>Real Time Character Recognition (Text to Speech).</li>
              <li>Real Time Object Detection and Captioning. </li>
              <li>Currency Detection. </li>
              <li>
                SOS Settings - To Add Trusted Contacts who can be contacted in
                Emergency with location.
              </li>
              <li>Current Time (Text to Speech)</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
