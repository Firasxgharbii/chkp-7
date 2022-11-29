import React from 'react'
import propTypes from 'prop-types';
const Component= ({name, bio , job , children , handlename}) => {
  return (
    <div>
      <button onClick={() => handlename(name)} >click now </button>
      <p style={{color: "red"}} > my name is {name} and {bio}. i am a {job}.</p>
      {children}
    </div>
  )

}


// default props

  Component.defaultProps = {
  name : 'Enter full name',
  bio : 'Enter biography',
  job : 'Enter your profession',
}



// prop types

Component.propTypes ={
  name : propTypes.string,
  bio : propTypes.string ,
  job : propTypes.string ,

}



export default Component


