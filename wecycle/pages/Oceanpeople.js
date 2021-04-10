// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';


const Holder = styled.div `
.container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
}

#box {
    height: auto;
    background-color: #ADBAFF;
    border-radius: 5rem 5rem 0rem 0rem;
    min-width: 25rem;
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


`

export default function OceanPeople(){
    return (
        <Holder>
            <div>
                <Menu title="People"></Menu>
            </div>
            <div className="container">
                <Header text="How are plastics in oceans affecting people?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Lorem Ipsum"></Header>
                <Bodytext Text="Sugar plum carrot cake caramels jelly beans croissant cheesecake tart bonbon. Sugar plum carrot cake caramels jelly beans croissant cheesecake tart bonbon. Sugar plum carrot cake caramels jelly beanscroissant cheesecake tart bonbon. "></Bodytext>
                <div className="row">
                    <Didyouknow></Didyouknow>
                    <img id="image" src="/microplastic.svg" width="150px"></img>
                </div>
                <Start text="What's next?"></Start>


            </div>

        </Holder>
    )
}