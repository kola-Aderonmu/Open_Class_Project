import React from 'react'

function Banner() {
    const title = "Jungle House"
  return (
    <div className="jh-banner font-bold" style={{}}>
      <img
        src="https://st.depositphotos.com/1369568/3150/i/450/depositphotos_31506071-stock-photo-palm-leaf.jpg"
        alt="Jungle House"
        className="jh-logo"
      />
      <h1 className='pl-32px'>{title}</h1>
    </div>
  );
}

export default Banner;