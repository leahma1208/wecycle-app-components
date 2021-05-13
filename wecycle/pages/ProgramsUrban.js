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
        background-color:#AFDDCE;
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
                <Menu routeTo="/MoreUrban" />
            </Headingholder>

            <Titleholder>
                <Header></Header>
            </Titleholder>

            <Bubbleholder>
                <Infocontainer>

{/* ======================================================= */}
                    <Logoholder id="left">
                        <ProgramLogo circlebg="#C0ECDD" src="/bcparks.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="BC Parks Volunteer"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px" Text="BC Parks benefits tremendously from the contributions made by volunteers. Over 15% of BC’s land base makes up the over 1,030 provincial parks and protected areas, many of which are actively cared for by passionate individuals and groups who generously donate their time and energy."/>
                        </Information>

                        <Information>
                        <Start routeTo="https://bcparks.ca/volunteers/" margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>




                <Infocontainer>

                {/* ======================================================= */}
                <Logoholder id="left">
                        <ProgramLogo circlebg="#C0ECDD" src="/stanleypark.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="Stanley Park Ecology Society"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px"  Text="The Stanley Park Ecology Society is a non-profit organization founded in 1988 that works alongside of the Vancouver Board of Parks and Recreation to promote stewardship and conservation in Stanley Park."/>
                        </Information>

                        <Information>
                        <Start routeTo="https://stanleyparkecology.ca/get-involved/volunteer/volunteer-opportunities/" margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>



                <Infocontainer>

                {/* ======================================================= */}
                <Logoholder id="left">
                        <ProgramLogo circlebg="#C0ECDD" src="/terracycle.svg"/>
                    </Logoholder>
{/* ======================================================= */}
                    <Logoholder id="right">
                        <Information>
                            <Bodytext textwidth="200px" bold="bold" Text="Terracycle"/>
                        </Information>

                        <Information>
                            <Bodytext textwidth="200px"  Text="TerraCycle is Eliminating the Idea of Waste® by recycling the non-recyclable. Whether it's coffee capsules from your home, pens from a school, or plastic gloves from a manufacturing facility, TerraCycle can collect and recycle almost any form of waste. With your help, we are able to divert millions of pounds of waste from landfills and incinerators each month."/>
                        </Information>

                        <Information>
                        <Start routeTo="terracycle.com/en-CA/pages/3398#" margintop="0.25rem" spacing="0rem" text="Apply Now" width="10rem" padding="5px" fontsize="16px"/>
                        </Information>
                    </Logoholder>
{/* ======================================================= */}
                </Infocontainer>

            </Bubbleholder>

            <BottomBar routeTo1="/TakeActionCity"></BottomBar>

        </ProgramCont>

    )
}

