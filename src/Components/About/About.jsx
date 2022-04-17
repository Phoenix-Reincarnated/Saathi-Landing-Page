import React from 'react'
import { Grid } from '@mui/material'
import { useStyles } from '../HeroSection/HeroSection.style'
import '@lottiefiles/lottie-player'
import aboutImg from '../../asset/about.jpg'

const About = () => {
  const classes = useStyles()
  return (
    <div style={{ backgroundColor: '#F7F9FC' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
        <Grid item xs={12} sm={6}>
          <img
            data-aos="zoom-in"
            src={aboutImg}
            className={classes.heroImageStyle1}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              paddingTop: '2rem',
              paddingRight: '3vw',
            }}
          >
            <div
              style={{
                fontSize: '38px',
                paddingLeft: '2rem',
                fontWeight: '600',
                lineHeight: '4.3rem',
              }}
            >
              <span style={{ color: '#00AB55' }}>Application </span> Features
            </div>
            <ul
              style={{
                fontSize: '19px',
                lineHeight: '2.3rem',
              }}
            >
              <li>
                Real Time OCR: Helps the person to point the device in front of
                the device and let the device recognize
              </li>
              <li>
                Real Time OCR and Translation: visually impared person can hear
                the text in his/her native language.
              </li>
              <li>
                Currency Detection: Helps in detection of the currency and
                amount and generates the output and reads it aloud.
              </li>
              <li>
                SOS Settings - To Add Trusted Contacts who can be contacted in
                Emergency with location.
              </li>
              <li>
                Time & Date - Speaks Current Time and Date and : Auto torch at
                night for better recognition.
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
