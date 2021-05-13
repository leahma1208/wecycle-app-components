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
        background-color:#ADBAFF;
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
                <Menu routeTo="More" />
            </Headingholder>

            <Titleholder>
                <Header></Header>
            </Titleholder>

            <Bubbleholder>
                <Infocontainer>

{/* ======================================================= */}
                    <Logoholder id="left">
                        <ProgramLogo circlebg="#CED6FE" src="/shoreline.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="Great Canadian Shoreline Cleanup"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px" Text="The Great Canadian Shoreline Cleanup is a national conservation program that provides Canadians the opportunity to take action in their communities wherever water meets land, one bit of trash at a time."/>
                        </Information>

                        <Information>
                            <Start routeTo="https://www.shorelinecleanup.ca/" margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>




                <Infocontainer>

                {/* ======================================================= */}
                <Logoholder id="left">
                        <ProgramLogo circlebg="#CED6FE" src="/Plasticoceans.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="Plastic Oceans"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px"  Text="The purpose of the organization is to raise awareness about plastic pollution. Annually, over 300 million tons of plastic is produced. More than 90% of that plastic is not recycled! Distressingly, much of that plastic is ending up in our oceans. Together, we can create a healthier ocean for a healthier you."/>
                        </Information>

                        <Information>
                        <Start routeTo="https://plasticoceans.org/volunteer/"  margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>



                <Infocontainer>

                {/* ======================================================= */}
                <Logoholder id="left">
                        <ProgramLogo circlebg="#CED6FE" src="/oceanlegacy.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="Ocean Legacy Foundation"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px"  Text="The Ocean Legacy Foundation (OLF) is a Canadian based non-profit organization that was founded in 2013 with the goal to end ocean plastic waste. The foundation is led by co-founders Chloe Dubois and James Middleton, and is supported by a board of directors, technical advisory committee and hundreds of volunteers worldwide."/>
                        </Information>

                        <Information>
                        <Start routeTo="https://oceanlegacy.ca/how-you-can-help/"  margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>


            </Bubbleholder>


            <BottomBar routeTo1="/TakeActionMarine"></BottomBar>
        </ProgramCont>

    )
}

