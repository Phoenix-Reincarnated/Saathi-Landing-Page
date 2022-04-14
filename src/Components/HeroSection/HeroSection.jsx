import React from 'react'
import { Button, Grid } from '@mui/material'
import HeroImage from '../../asset/HeroImage.png'
import Navbar from '../Navbar/index'

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: '#F7F9FC' }}>
      <Navbar />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 30 }}>
        <Grid
          item
          xs={6}
          style={{ position: 'relative', left: '5vw', top: '12vw' }}
        >
          <div
            style={{
              fontSize: '46px',
              fontFamily: 'inherit',
              fontWeight: '550',
              lineHeight: '4rem',
            }}
          >
            <span style={{ color: '#00AB55' }}> SAA-थी, </span>
            <br />
            <span>YOUR HELPING HAND </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            corporis! Eum nulla nisi fugiat aliquam explicabo dolorem eaque
            distinctio placeat nostrum quibusdam id, deleniti, quam libero.
            Maiores ad in inventore.
          </p>
          <div>
            <Button>Read Docs</Button>
            <Button>Get the App</Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src={HeroImage} width={460} alt="" />
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroSection
