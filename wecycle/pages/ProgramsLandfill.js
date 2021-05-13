import styled from 'styled-components';
import Menu from "../comps/Menu";
import Header from "../comps/Header";
import ProgramLogo from "../comps/ProgramLogo";
import Bodytext from "../comps/Bodytext";
import Start from '../comps/Start';
import BottomBar from '../comps/BottomBar';

export default function Programs (){

    const ProgramCont = styled.div `
    display:flex;
    width:100%;
    flex-direction:column;
    justify-content:center;
    align-tiems:center;

    #right{
        margin-left:40px;
    }

    #left {

    }
    `;

    const Headingholder = styled.div``;

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
        background-color:#FFEAAD;
        height:auto;
        padding-top:30px;
        margin-top: 15px;
        margin-bottom: 60px;
        border-radius: 5rem 5rem 0rem 0rem;
    `

    const Infocontainer = styled.div`
        display:flex;
        width:100%;
        justify-content:center;
        align-tiems:center;
    `;

    const Logoholder = styled.div`

    `;

    const Information = styled.div``;



    return (
        <ProgramCont>

            <Headingholder id="border">
                <Menu routeTo="MoreLandfill" />
            </Headingholder>

            <Titleholder>
                <Header></Header>
            </Titleholder>

            <Bubbleholder>
                <Infocontainer>

{/* ======================================================= */}
                    <Logoholder id="left">
                        <ProgramLogo circlebg="#FFF7DE" src="/greenchair.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="Green Chair Recycling"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px" Text="If you are interested in getting involved and contributing your knowledge and skills to many of our programs or projects? Our team meetings in the areas of Energy & Transportation, Waste and Food are one of the easiest ways to get started!"/>
                        </Information>

                        <Information>
                        <Start routeTo="http://www.greenchairrecycling.com/services/"  margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>




                <Infocontainer>

                {/* ======================================================= */}
                <Logoholder id="left">
                        <ProgramLogo circlebg="#FFF7DE" src="/SPEC.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="SPEC Volunteer"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px"  Text="If you are interested in getting involved and contributing your knowledge and skills to many of our programs or projects? Our team meetings in the areas of Energy & Transportation, Waste and Food are one of the easiest ways to get started!"/>
                        </Information>

                        <Information>
                        <Start routeTo="https://www.spec.bc.ca/volunteer#:~:text=SPEC%20is%20always%20looking%20for,involved%20with%20SPEC%2C%20or%20participate."  margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>



                <Infocontainer>

                {/* ======================================================= */}
                <Logoholder id="left">
                        <ProgramLogo circlebg="#FFF7DE" src="/returnit.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="Return-it"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px"  Text="Why do a bottle drive? It's worth it! Whether you are buying sports equipment, planning a field trip, or supporting a charity, you'll find that a bottle drive is a fun and easy way to raise money. In fact, the average bottle drive raises between $1,000 and $1,500. Some groups have even made over $3,000. Not bad for a half day's work."/>
                        </Information>

                        <Information>
                        <Start routeTo="https://www.returnitschool.ca/"  margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>


            </Bubbleholder>


            <BottomBar routeTo1="/TakeActionLandfill"></BottomBar>
        </ProgramCont>

    )
}

