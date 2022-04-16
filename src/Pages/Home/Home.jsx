import React from 'react'
import About from '../../Components/About/About'
import HeroSection from '../../Components/HeroSection/HeroSection'
import TechBucket from '../../Components/TechBucket/TechBucket'
import { useStyles } from './Home.style'

const Home = () => {
  const classes = useStyles()
  return (
    <section className={classes.container}>
      <div className={classes.first} />
      <div className={classes.second} />
      <div className={classes.third} />
      <div className={classes.fourth} />
      <HeroSection />
      <TechBucket />
      <About />
    </section>
  )
}

export default Home
