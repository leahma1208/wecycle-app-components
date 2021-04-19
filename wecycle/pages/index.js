import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import Tutorial from '../comps/Tutorial';
import TutorialInfo from '../comps/TutorialInfo';
import RegionButton from '../comps/RegionButton';
import ImgText from '../comps/ImgText';
import Header from '../comps/Header';
import ProgramLogo from '../comps/ProgramLogo';
import StudyOthers from '../comps/StudyOthers';
import Bodytext from '../comps/Bodytext';
import Flags from '../comps/Flags';
import Marinequiz from '../comps/Marinequiz';


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
    <div className="container1">
      <Start /> 
    </div>    
    <div className="container1">
      <Tutorial /> 
    </div>
    <div className="container1">
      <TutorialInfo /> 
    </div>
    <div className="container1">
      <RegionButton text="Marine" />
    </div>
    <div className="container1">
      <ImgText />
    </div>
    <div className="container1">
      <Header />
    </div>
    <div className="container1">
      <ProgramLogo />
    </div>
    <div className="container1">
      <StudyOthers />
    </div>
    <div className="container1">
      <Bodytext />
    </div>
    <div className="container1">
      <Flags />
    </div>
    <div className="container1">
      <Marinequiz />
    </div>

    
  
  </Holder>

}
