import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from "../comps/Bodytext";
import BottomBar from '../comps/BottomBar';

const Helpcont = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;
const MenuHolder = styled.div`
    width: 100%;
`;

const HeaderHolder = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
`;

const ItemsCont = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:11.875rem 11.875rem;
    margin-bottm:1.563rem;
    align-items:center;
    justify-content:center;
`;
const ItemsHolder = styled.div`
    display:flex;
    max-width: 26rem;
`;
const Items = styled.img`
    margin-left: 1.563rem;
    margin-right: 0.938rem;
`;

const BubbleBg = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    min-width: 25rem;
    background-color:#AFDDCE;
    height:auto;
    padding-top:2rem;
    padding-bottom:6rem;
    border-radius: 5rem 5rem 0rem 0rem;
`;




export default function HowToHelp(){
    return <Helpcont>
                <MenuHolder>
                    <Menu routeTo="/MoreUrban" title="How to help"/>
                </MenuHolder>
                <HeaderHolder>
                    <Header text="Most Common Items Found in Urban Cities"/>
                </HeaderHolder>
                <ItemsCont>
                    <ItemsHolder>
                        <Items src="/eggs.svg"/>
                        <Bodytext Text="Styrofoam"/>
                    </ItemsHolder>
                    <ItemsHolder>
                        <Items src="/lids.svg"/>
                        <Bodytext Text="Caps/lids"/>
                    </ItemsHolder>
                </ItemsCont>
                <ItemsCont>
                    <ItemsHolder>
                        <Items src="/chocolate.svg"/>
                        <Bodytext Text="Food Wrappers"/>
                    </ItemsHolder>
                    <ItemsHolder>
                        <Items src="/plasticbag.svg"/>
                        <Bodytext Text="Plastic bags"/>
                    </ItemsHolder>
                </ItemsCont>
                <ItemsCont>
                    <ItemsHolder>
                        <Items src="/net.svg"/>
                        <Bodytext Text="Fishing Nets"/>
                    </ItemsHolder>
                    <ItemsHolder>
                        <Items src="/bottle.svg"/>
                        <Bodytext Text="Beverage bottles"/>
                    </ItemsHolder>
                </ItemsCont>
                <ItemsCont>
                    <ItemsHolder>
                        <Items src="/straw.svg"/>
                        <Bodytext Text="Straws"/>
                    </ItemsHolder>
                    <ItemsHolder>
                        <Items src="/cigarette.svg"/>
                        <Bodytext Text="Cigarette Butts"/>
                    </ItemsHolder>
                </ItemsCont>
                {/* ======================================================= */}
                <BubbleBg>
                    <HeaderHolder>
                        <Header text="What Can You Recycle"/>
                        <Bodytext Text="For all the items that you recycle, make sure that they are clean, empty, and dry."/>
                    </HeaderHolder>
                    <ItemsCont>
                        <ItemsHolder>
                            <Items src="/waterbottle.svg"/>
                            <Bodytext Text="Beverage bottles"/>
                        </ItemsHolder>
                        <ItemsHolder>
                            <Items src="/lids.svg"/>
                            <Bodytext Text="Caps/lids"/>
                        </ItemsHolder>
                    </ItemsCont>
                {/* ======================================================= */}
                    <HeaderHolder>
                        <Header fontsize="23.5px" text="What Can’t You Recycle"/>
                        <Bodytext Text="For all the items that you cannot recycle note that, batteries, electronics, and lightbulbs are categorized in hazardous waste."/>
                    </HeaderHolder>
                    <ItemsCont>
                        <ItemsHolder>
                            <Items src="/eggs.svg"/>
                            <Bodytext Text="Styrofoam"/>
                        </ItemsHolder>
                        <ItemsHolder>
                            <Items src="/plasticbag.svg"/>
                            <Bodytext Text="Plastic bags"/>
                        </ItemsHolder>
                    </ItemsCont>
                    <ItemsCont>
                        <ItemsHolder>
                            <Items src="/chocolate.svg"/>
                            <Bodytext Text="Food Wrappers"/>
                        </ItemsHolder>
                        <ItemsHolder>
                            <Items src="/net.svg"/>
                            <Bodytext Text="Fishing Nets"/>
                        </ItemsHolder>
                    </ItemsCont>
                    <ItemsCont>
                        <ItemsHolder>
                            <Items src="/straw.svg"/>
                            <Bodytext Text="Straws"/>
                        </ItemsHolder>
                        <ItemsHolder>
                            <Items src="/cigarette.svg"/>
                            <Bodytext Text="Cigarette Butts"/>
                        </ItemsHolder>
                    </ItemsCont>
                </BubbleBg>
                <BottomBar routeTo1="/MoreUrban"></BottomBar>
        </Helpcont>
}