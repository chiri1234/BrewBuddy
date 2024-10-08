import React from 'react'

const username = ({params}) => {
  return (
    <>
    {params.username}
    <div className = 'cover w-full relative'>
    <img className = 'object-cover w-full h-[350]'src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/1812988/7079b883e68a4fee992c3336035bf78a/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.png?token-time=1730678400&amp;token-hash=OYb4coeyGhUsTmmx12ZgswzJDJf6zMuaik8NCq0tpSo%3D" alt=""/>
    <div className = 'absolute -bottom-12 right-[45%] border-black-3'>
      
    <img className = 'rounded-full'width = {100} height = {100} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/1812988/4c8195a724e4436081a645ab00493f48/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.jpg?token-time=1729641600&amp;token-hash=jaFTGYVS6TTCpLlm-Zt_97DnMwjLYuLjF2myxkTVdEQ%3D" alt="" data-tag="creator-public-page-avatar" class="sc-bdvvtL iFMLae"/>
    </div>
    
    </div>
    <div className = "info flex justify-center item-center my-24">
      @{params.username}
    </div>
    </>
  )
}
export default username