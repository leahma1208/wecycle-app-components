import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Didyouknow from '../comps/Didyouknow';


const Holder = styled.div `
.container1 {
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
}

`

export default function Home() {
  return <Holder>
    <div className="container">
    <Menu/>
    </div>
    <div className="container1">
      <Didyouknow />
    </div>
    
  
    
  </Holder>

}
