import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import Tutorial from '../comps/Tutorial';
import TutorialInfo from '../comps/TutorialInfo';


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
    <div className="container2">
      <Start /> 
    </div>    
    <div className="container3">
      <Tutorial /> 
    </div>
    <div className="container3">
      <TutorialInfo /> 
    </div>
    
  
  </Holder>

}
