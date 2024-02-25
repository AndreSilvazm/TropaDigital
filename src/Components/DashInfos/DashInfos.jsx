import React from 'react';
import './DashInfos.css'
import SearchBar from '../SearchBar/SearchBar';
import Graph1 from '../GraficosComponents/Graph1'
import { IoInformationCircleOutline } from "react-icons/io5";
import Graph2 from '../GraficosComponents/Graph2'
import Graph3 from '../GraficosComponents/Graph3'
import Graph4 from '../GraficosComponents/Graph4'




function DashInfos(props) {
    return (
        <div className='All-Container'>

            <div className="DashContainer">
                <SearchBar />



                <section className='GraphsSection'>

                    <h1>Dashboard</h1>

                    <div className="firstGraphs">

                        <div className='grap1'>

                            <div className="graphinfos">

                                <div className="textInfos">

                                    <p>LoremIpsum</p>

                                    <span>5.987,37</span>

                                    <p>LoremIpsum</p>

                                </div>

                                <i><IoInformationCircleOutline />
                                </i>

                            </div>

                            <div className="containerGra">
                                <Graph1 className='fg' />
                            </div>
                        </div>


                        <div className="grap2">

                            <div className="graphinfos">

                                <div className="textInfos">

                                    <h1 className='Graph2Title'>Primary Text</h1>
                                    <p className='Graph2p'>Secondary text</p>


                                </div>

                                <i><IoInformationCircleOutline />
                                </i>

                            </div>
                            <div className="containerGra">
                                <Graph2 />
                            </div>
                        </div>


                        <div className="grap3">
                            <div className="graphinfos">

                                <div className="textInfos">

                                    <h1 className='Graph3Title'>Primary Text</h1>
                                    <p className='Graph3p'>Secondary text</p>


                                </div>

                                <i><IoInformationCircleOutline />
                                </i>

                            </div>
                            <div className="containerGra">
                                <Graph3 />
                            </div>
                        </div>
                    </div>

                    <div className="secGraph">

                        <div className="secInfo">

                            <h1>Primary text</h1>
                            <p>Secondary text</p>

                        </div>

                        <div className="SecGra">

                            <Graph4 />

                        </div>

                    </div>
                </section>

            </div>

        </div>
    );
}

export default DashInfos;