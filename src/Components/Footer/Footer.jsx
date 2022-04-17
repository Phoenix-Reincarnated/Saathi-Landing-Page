import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useStyles } from '../HeroSection/HeroSection.style'

const UncolorButton = styled(Button)(() => ({
  color: '#00AB55',
  border: '1px solid #00AB55',
  '&:hover': {
    color: '#00AB55',
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <>
      <hr
        style={{
          color: 'grey',
          marginTop: '3rem',
          opacity: '0.3',
          border: '1px solid grey',
        }}
      />
      <div
        style={{
          marginTop: '2rem',
          position: 'relative',
          bottom: 0,
          left: 0,
          width: '100%',
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 30 }}>
          <Grid item xs={12} sm={6}>
            <Typography noWrap component="div" className={classes.title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 95 71"
              >
                <rect
                  width="16.811"
                  height="68.926"
                  x="0.664"
                  y="7.769"
                  fill="#00AB55"
                  stroke="#00AB55"
                  rx="8.406"
                  transform="rotate(-25 .664 7.77)"
                ></rect>
                <rect
                  width="16.811"
                  height="68.926"
                  x="28.665"
                  y="7.769"
                  fill="#00AB55"
                  stroke="#00AB55"
                  rx="8.406"
                  transform="rotate(-25 28.665 7.77)"
                ></rect>
                <rect
                  width="16.811"
                  height="16.81"
                  x="78.769"
                  y="0.664"
                  fill="#00AB55"
                  stroke="#00AB55"
                  rx="8.405"
                  transform="rotate(25 78.77 .664)"
                ></rect>
              </svg>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Home
              </Typography>
              <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                Read Documentation
              </Typography>
              <UncolorButton
                variant="outlined"
                sx={{
                  marginRight: '2vw',
                  paddingInline: '2rem',
                  fontSize: '13px',
                }}
              >
                Get App
              </UncolorButton>
            </div>
          </Grid>
        </Grid>
        <div
          className={classes.footerStyle}
          style={{
            textAlign: 'center',
            lineHeight: '1.8rem',
            padding: { md: '1rem 12rem', xs: '0rem 2rem' },
          }}
        >
          <span style={{ color: 'gray', fontWeight: 'bold' }}>
            © Copyright 2022, Phoenix-CIEM. All rights reserved
          </span>
          <br />
          <span style={{ textAlign: 'center', color: 'grey' }}>
            Developing a Cross Platform App to Leverage Intelligent Processing
            Tools and Algorithms to help the Visually Impaired see and
            navigate.The cornerstone of the Application being its User Interface
            that would infuse a lucid experience for the User with its ease of
            handling and use.
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
