// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import BottomBar from '../comps/BottomBar';
import MovingImage2 from '../comps/MovingImage2';
import Medal from '../comps/Medal';
import Progress from '../comps/Progress'
import ImgTxt from '../comps/ImgText'
import Why from '../comps/Why'


const Holder = styled.div `
.container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.margin{
    margin-bottom: 20px;
    
}
#box {
    height: auto;
    width: 100%;
    background-color: #ADBAFF;
    border-radius: 3rem 3rem 0rem 0rem;
    margin-top: 1rem;
}

.row {
    display:flex;
    justify-content:center
    width:100%;
}

#image {
    display:flex;
    margin-left:30px;
}
.grid {
   display:flex;
   justify-content:center;
   margin-bottom: 80px;
}

.moving {
    position: relative;
    overflow: hidden;
    animation: slideIn 3s infinite;
    animation-direction:reverse;
}
@keyframes slideIn {
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(7deg);
    }
    100%{
        transform: rotate(0deg);
    }
}


.help{
    margin-bottom: 50px;
    
}
`

export default function UrbanPeople(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="People"></Menu>
            </div>
            <div className="container">
                <Header left="10px"width="350px"text="How is plastic in Oceans affecting people?"></Header>
                
                <div className="margin"><Medal text="Do you want to earn a  marine badge? Learn about the People, Environment, and Animals"/></div>
                <div className="margin"><Progress color="#ADBAFF"/></div>
            </div>
            <div id="box" className="container">
                <Header text="Plastic affecting human health" margintop="50px;" marginbottom="0px;"></Header>
                <Bodytext marginbottom="0px;"Text="There are different types of ways that plastic is dangerous for humans."></Bodytext>
                <MovingImage2 image="/person.svg"/>
                <Bodytext marginbottom="20px;"Text="Other toxins in plastics are directly linked to cancers, birth defects, immune system problems, and childhood developmental issues."></Bodytext>
                <MovingImage2 image="/lungs.svg"/>
                <div className="container">
                    <Header marginbottom="40px" text="How can you help?"/>
                    <div className="help"><ImgTxt src="gbottle.svg" text="Use your own bottles!" /></div>
                    <div className="help"><Why bgcolor1="#7E93FF" bgcolor2="#E1E6FF" bottom="70px" text="Bisphenol A causes cancer and heart disease!"/></div>
                    <div className="help"><ImgTxt src="/egg.svg" text="Avoid use of styrofoam"/></div>
                    <div className="help"><Why bgcolor1="#7E93FF" bgcolor2="#E1E6FF" bottom="70px" text="Styrofoam breaks down to micro plastics!"/></div>
                </div>
               
               
                <div className="grid">
                    <Start routeTo="/marineenviro" spacing="2px" text="Next Page >" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/Marine"></BottomBar>
            </div>

        </Holder>
    )
}