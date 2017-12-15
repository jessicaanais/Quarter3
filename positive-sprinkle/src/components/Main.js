import React from 'react'
import background from '../../src/background.jpg'
// import '../../src/index.css'
// import { Container } from 'reactstrap'

const Main = (props) => {
  return (
    <div style={{ marginTop: '2%', marginBottom: '2%'}}>
        <div style={{padding: 0, color: "white", backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: 'no-repeat', width: "1600px", height: "800px"}}>
            <h1 style={{ fontSize: "100px", paddingTop: 210}}> Quote of the Day </h1>
          <h1 style={{ fontSize: "70px", paddingTop: 80}}> "Believe you can and you're half way there" <br/> ~ Theodore Roosevelt </h1>

        </div>
    </div>
  )
}

export default Main
// <img src={background} alt="background" height='100%' width= '100%' />
