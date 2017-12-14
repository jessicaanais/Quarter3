import React from 'react'
import background from '../../src/background.jpg'
// import '../../src/index.css'
// import { Container } from 'reactstrap'

const Main = (props) => {
  return (
    <div style={{ marginTop: '2%', marginBottom: '2%'}}>
        <div style={{padding: 0, marginRight: '2%', marginLeft: '2%'}}>
          <img src={background} alt="background" height='100%' width= '100%' />
        </div>
    </div>
  )
}

export default Main
