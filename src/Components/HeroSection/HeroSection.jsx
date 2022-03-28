import { Grid, Typography } from '@mui/material'
import React from 'react'
import HeroImg from '../../asset/HeroImg.jpg'

const HeroSection = () => {
  return (
    <div style={{ marginTop: '3vw' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <div style={{ padding: '4vw' }}>
            <Typography
              style={{ fontFamily: "'Italianno', cursive", fontSize: '74px' }}
            >
              Saathi
            </Typography>
            <i style={{ marginLeft: '2rem', fontSize: '22px' }}>
              - Your helping hand
            </i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              error sapiente quaerat provident odio cupiditate? Sunt
              necessitatibus soluta similique excepturi dolores nobis quae, sed
              quasi, natus ut mollitia assumenda. Beatae. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Itaque nisi numquam totam.
              Laborum, placeat eaque animi suscipit, neque minima error ducimus
              excepturi labore eos et quis repudiandae fuga. Eaque, distinctio?
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src={HeroImg} alt="HeroImg" />
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroSection
