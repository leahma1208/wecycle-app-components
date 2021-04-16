import styled from 'styled-components';
import Menu from "../comps/Menu";
import Header from "../comps/Header";
import ProgramLogo from "../comps/ProgramLogo";
import Bodytext from "../comps/Bodytext";
import Start from '../comps/Start';

export default function Programs (){

    const ProgramCont = styled.div `
    display:flex;
    flex-direction:column;

    #left {
        margin:20px;
    }

    #border {
        border-bottom:solid #E3E3E3 4px;
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
        border-radius: 5rem 5rem 0rem 0rem;
    `

    const Infocontainer = styled.div`
        display:flex;
        justify-content:center;

    `;

    const Logoholder = styled.div``;

    const Information = styled.div``;



    return (
        <ProgramCont>

            <Headingholder id="border">
                <Menu />
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
                            <Bodytext bold="bold" Text="Great Canadian Shoreline Cleanup"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="300px" Text="The Great Canadian Shoreline Cleanup is a national conservation program that provides Canadians the opportunity to take action in their communities wherever water meets land, one bit of trash at a time."/>
                        </Information>

                        <Information>
                            <Start width="150px" fontsize="16px" text="Apply Now"/>
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
                            <Bodytext bold="bold" Text="Plastic Oceans"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="300px" Text="The purpose of the organization is to raise awareness about plastic pollution. Annually, over 300 million tons of plastic is produced. More than 90% of that plastic is not recycled! Distressingly, much of that plastic is ending up in our oceans. Together, we can create a healthier ocean for a healthier you."/>
                        </Information>

                        <Information>
                            <Start width="150px" fontsize="16px" text="Apply Now"/>
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
                            <Bodytext bold="bold" Text="Ocean Legacy Foundation"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="300px" Text="The Ocean Legacy Foundation (OLF) is a Canadian based non-profit organization that was founded in 2013 with the goal to end ocean plastic waste. The foundation is led by co-founders Chloe Dubois and James Middleton, and is supported by a board of directors, technical advisory committee and hundreds of volunteers worldwide."/>
                        </Information>

                        <Information>
                            <Start width="150px" fontsize="16px" text="Apply Now"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>


            </Bubbleholder>


            
        </ProgramCont>

    )
}
