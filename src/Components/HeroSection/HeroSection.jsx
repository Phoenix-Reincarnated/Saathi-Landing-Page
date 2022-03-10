import React from 'react'
import HomeBg from '../../asset/Frame.svg'
import HeroImg from '../../asset/HeroImg.png'

const HeroSection = () => {
  return (
    <div
      className="h-screen"
      style={{
        background: `url(${HomeBg})`,
        backgroundSize: 'cover',
        height: '90vh',
        backgroundPositionY: '-11rem',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex h-screen font-nunito">
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 gap-0 h-3/4">
          <div className="">
            <div className="flex flex-col h-full">
              <h1 className="text-5xl text-gray-500 font-nunito">Saathi</h1>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col h-full">
              <img src={HeroImg} width={500}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
