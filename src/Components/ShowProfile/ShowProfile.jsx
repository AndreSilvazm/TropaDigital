import React from 'react';
import { FaRegFileAlt, FaRegFileArchive, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux';

import './ShowProfile.css'
import { login } from '../../features/UserSlice';
import { useNavigate } from 'react-router-dom';




function ShowProfile(props) {

    const Estado = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function Deslogar(){

        dispatch(login({

            logado:0,
            Email:'',
            Nome:''
        }))

        navigate('/')
    }


    return (
        <main className='ShowProfileMainContainer'>

            <header className='OffHeader'>

                <button className='ShowProfileBTN' data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9ImZpbGw6I2NjNjEzODsiPgo8cGF0aCBkPSJNIDUgOCBBIDIuMDAwMiAyLjAwMDIgMCAxIDAgNSAxMiBMIDQ1IDEyIEEgMi4wMDAyIDIuMDAwMiAwIDEgMCA0NSA4IEwgNSA4IHogTSA1IDIzIEEgMi4wMDAyIDIuMDAwMiAwIDEgMCA1IDI3IEwgNDUgMjcgQSAyLjAwMDIgMi4wMDAyIDAgMSAwIDQ1IDIzIEwgNSAyMyB6IE0gNSAzOCBBIDIuMDAwMiAyLjAwMDIgMCAxIDAgNSA0MiBMIDQ1IDQyIEEgMi4wMDAyIDIuMDAwMiAwIDEgMCA0NSAzOCBMIDUgMzggeiI+PC9wYXRoPgo8L3N2Zz4=" />

                </button>

            </header>

            <section class="offcanvas offcanvas-start CanvaContainer" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

                <button type="button" className='CloseProfileBTN' data-bs-dismiss="offcanvas"
                    aria-label="Close">

                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9ImZpbGw6I2NjNjEzODsiPgo8cGF0aCBkPSJNIDUgOCBBIDIuMDAwMiAyLjAwMDIgMCAxIDAgNSAxMiBMIDQ1IDEyIEEgMi4wMDAyIDIuMDAwMiAwIDEgMCA0NSA4IEwgNSA4IHogTSA1IDIzIEEgMi4wMDAyIDIuMDAwMiAwIDEgMCA1IDI3IEwgNDUgMjcgQSAyLjAwMDIgMi4wMDAyIDAgMSAwIDQ1IDIzIEwgNSAyMyB6IE0gNSAzOCBBIDIuMDAwMiAyLjAwMDIgMCAxIDAgNSA0MiBMIDQ1IDQyIEEgMi4wMDAyIDIuMDAwMiAwIDEgMCA0NSAzOCBMIDUgMzggeiI+PC9wYXRoPgo8L3N2Zz4=" />

                </button>

                <article className="ProfileInfos">

                    {Estado.logado > 0 ? (<div className='LogadoProfileInfos'>

                        <h2>{Estado.Nome}</h2>
                        <p>{Estado.Email}</p>
                        <img src="https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations-thumbnail.png" alt="Foto de perfil" />

                    </div>)

                        :

                        <div className='DeslogadoProfileInfos'>


                            <h2>Maria Helena S.</h2>

                            <p>teste@tropadigital.com</p>

                            <img src="https://s3-alpha-sig.figma.com/img/6334/f695/c1498f5d44cc9660f3a9caf271872ac0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0z6A1N1PzjlZx6Yzno04NN4E8HWESX-h3EBV12526Gicg2NaoiH-KxcNnUhnCh2VCA33s~RCEzViE2aFxssDMXZPgQGOeVOF5t59AXxvpkhaG5Oaex7naUs7jfngBVNDSNMop0blJUFGU6BWeO6pVcy4ZtWb5AahzlI2OuVCW0iyzTTg2mmReZ-9QJYyCZVjgbkVi1a6o9dchXiXpm78jKugMCbM0BvnEMzABO88Aly1ZY3Li35O5CPo-OkW9S-SJYi-Bs3m2GWUYAoKQkyeosPl-apHmT5ec8Eudp9aMwNMy32MocK-OIYE18B5FML8kfRkwCFU1g75KEsG-azAw__" alt="Foto de Perfil" />


                        </div>}

                </article>


                <section class="MenuSection">

                    <section className="MenuBar">

                        <a href="#" className='DashboardSelected'>     <span><RxDashboard /></span>Dashboard</a>
                        <hr />
                        <a href="" className='NotSelectedItem'><span><FaRegFileAlt />
                        </span>Dashboard</a>
                        <a href="" className='NotSelectedItem'><span><FaRegFileArchive /></span>Dashboard</a>
                        <a href="" className='NotSelectedItem'><span><MdOutlineChat />
                        </span>Dashboard</a>
                        <hr />
                        <a href="" className='NotSelectedItem'><span><FaRegUserCircle />
                        </span>Dashboard</a>

                    </section>

                    <button className='GetoutIcon' onClick={Deslogar}>

                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR4nN2Vuw3CQBBETQYd3Lyz5E741IKcUAIIEULmKkwTBNRiykCyQCsRECD7zhiBWWmz2Xmn+02SfLu89wvgKOnU1Kbx3s+7mNdAFQCoTBsFsVXZYJZl4zataSRdgDIYIOls/Sn9gAGS1pKWHwEABXADNpJy694AwOFhXoSaBgOA/TvmjQBgZ+aSri0PKk9+EvBii0ZJh1LAIb8FUeQ13fZ+TZ+Ea2A13K/ifwBEBE6appPowLH4sxi0wbbIfJjXzrlZMMDKBmxVAZlcOuemUeZ91B3yQ5zZaU52YwAAAABJRU5ErkJggg==" />

                    </button>

                </section>
            </section>
        </main>



    );
}

export default ShowProfile;