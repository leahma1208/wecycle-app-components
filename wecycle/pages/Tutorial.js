import styled from 'styled-components';
import Menu from "../comps/Menu";
import Header from "../comps/Header";
import Bodytext from "../comps/Bodytext";
import Start from '../comps/Start';

export default function Programs (){

    const TutorialCont = styled.div `
    display:flex;
    flex-direction:column;

    #left {
        margin:20px;
    }

   
    `;

    const Titleholder = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    `;

    const Bubbleholder = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    background-color:#7080E8;
    height:auto;
    padding-top:30px;
    border-radius: 5rem 5rem 0rem 0rem;
    `;

    const Infocontainer = styled.div`
    display:flex;
    justify-content:center;

    `;

    const Headingholder = styled.div`
    `;    
    
    const Info = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    flex-direction:column;
    `;




    return (
        <TutorialCont>

            <Headingholder id="border">
                <Menu routeTo="/Home"  title="Tutorial"/>
            </Headingholder>

            <Titleholder>
                <Header text="About Wecycle"></Header>
                <Bodytext Text="Our mission is to educate our users about the importance of recycling. We want to be the bridge between parents/teachers and children when it comes to an engaging and fun learning experience."/>
            </Titleholder>

            <Bubbleholder>
                <Infocontainer>
                <Header text="How to teach" color="white"></Header>
                </Infocontainer>
                <Info>
                    <Bodytext 
                    color="white"
                    Text="1. Start by introducing the regions page and click on one of the three options">
                    </Bodytext>

                    <Bodytext
                    color="white"
                    Text="2. Next click on one of the three categories to learn about how plastic waste makes an impact">
                    </Bodytext>

                    <Bodytext
                    color="white"
                    Text="3. Let the students practice reading as well as learn the affects, once they complete reading test their knowledge by clicking on the “what’s next?” button then the quiz time button.">
                    </Bodytext>

                    <Bodytext
                    color="white"
                    Text="Afterwards, the students can browse through the rest of the application, or they can learn how to recycle in the how to help page, learn about local programs in the programs page, and visit other regions.">
                    </Bodytext>

                    <Bodytext
                    color="white"
                    Text="To begin click the “Start App” button below!">
                    </Bodytext>
                    <Start routeTo="/regions" text="START APP" fontsize="20px" fontweight="bold" width="15rem" spacing="0.2rem" fontfamily="Fredoka One"></Start>
                </Info>
            </Bubbleholder>


            
        </TutorialCont>

    )
}