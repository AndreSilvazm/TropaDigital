
import React, { useState, useEffect } from 'react';
import { CiMail } from "react-icons/ci";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';



import './LoginPage.css';
import './ModalStyle.css'
import { app } from '../../Server';
import { login } from '../../features/UserSlice';

function LoginPage(props) {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [OnlyNumber, setOnlyNumber] = useState(true)
    const [IsVisible, setIsVisible] = useState('text')
    const [IsVisibleConf, setIsVisibleConf] = useState('text')
    const [isEqual, setIsEqual] = useState(false)

    const [Nome, setNome] = useState('')
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [ConfSenha, setConfSenha] = useState('')

    const auth = getAuth(app)
    const dispatch = useDispatch()
    const Navigate = useNavigate()




    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };


    function VerificarSenha() {

        if (Senha != '' && isNaN(Senha)) {

            setOnlyNumber(false)
        }
        else if (Senha != '' && !isNaN(Senha)) {

            setOnlyNumber(true)

        }
    }

    function SenhaVisivel() {

        if (IsVisible == 'text') {

            setIsVisible('password')
        }
        else if (IsVisible == 'password') {

            setIsVisible('text')
        }
    }


    function ConfSenhaVisivel() {

        if (IsVisibleConf == 'text') {

            setIsVisibleConf('password')
        }
        else if (IsVisibleConf == 'password') {

            setIsVisibleConf('text')
        }
    }

    function VerificarConfSenha() {

        if (ConfSenha == Senha) {

            setIsEqual(true)
        } else {

            setIsEqual(false)
        }
    }

    function CadastrarUsuario() {

        if (Email != '' && Senha != '' && Nome != '' && ConfSenha != '' && isEqual) {

            try {

                createUserWithEmailAndPassword(auth, Email, ConfSenha)
                    .then((dados) => {

                        updateProfile(auth.currentUser, { displayName: Nome })

                        dispatch(login({
                            logado: 1,
                            Email: dados.user.email,
                            Nome: Nome
                        }))

                        toast.success(`Sua conta foi criada com sucesso ${Nome}!`, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                    })

            } catch (error) {
                console.log(error)
            }
        }


    }

    function FazerLogin() {

        if (Email != '' && Senha != '') {

            try {

                signInWithEmailAndPassword(auth, Email, Senha)
                    .then((dados) => {

                        dispatch(login({

                            logado: 1,
                            Email: dados.user.email,
                            Nome: dados.user.displayName
                        }))

                        toast.success(`Seja bem vindo(a)! ${dados.user.displayName}!`, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });


                        Navigate('/Dashboard')
                    })

            } catch (error) {

                console.log(error)
            }

        }

        if (Email == 'teste@tropadigital.com' && Senha == '123') {

            toast.success(`Seja bem vindo(a)! Você logou com a conta padrão.`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            Navigate('/Dashboard')
        }
        if (Email == '' && Senha == '') {

            toast.error(`Preencha todos os dados corretamente!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });


        }
    }


    useEffect(() => {
        VerificarSenha()
    }, [Senha])

    useEffect(() => {
        VerificarConfSenha()
    }, [ConfSenha])


    return (
        <div>
            <section className='LoginContainer'>

                <section className='ModaisSection'>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">

                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Esqueci minha senha</h1>

                                    <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>

                                    <div className="ModalForms">

                                        <label htmlFor="" className='EmailLabel'>E-mail</label>
                                        <input type="text" className='EmailInput' placeholder='Insira seu E-mail' />


                                    </div>
                                </div>
                                <div class="ModalButtons">
                                    <button type="button" class="EnviarBTN">Enviar</button>

                                    <button type="button" class="CancelBTN" data-bs-dismiss="modal">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="CorfirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">

                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Confirme seu E-mail</h1>

                                    <p>Para finalizar seu cadastro, enviamos um e-mail de confirmação para: {Email} Verifique sua caixa de entrada e clique no link “Confirmar E-mail”.</p>

                                    <p>Caso não tenha recebido o e-mail clique em “Enviar e-mail novamente” que enviaremos um novo e-mail.</p>
                                </div>
                                <div class="ModalButtons">

                                    <button type="button" class="EnviarBTN" data-bs-dismiss="modal" onClick={() => { setIsLoginForm(true) }}>Fechar</button>

                                    <a href="">Enviar E-mail novamente</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                <section className="LoginImg">

                    <article className="TextContainer">

                        <h1>Bem vindo à <br /> Tropa Digital</h1>

                        <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

                    </article>

                </section>

                <main className="LoginFormSection">


                    <section className="FormContainer">
                        {isLoginForm ? (
                            <h1 className='LoginPageTitle'>Login</h1>
                        ) : (

                            <header className='CadastrarPageHeader'>

                                <a onClick={toggleForm}>Voltar</a>

                                <h1 className='CadastrarPageTitle'>Cadastro</h1>

                            </header>
                        )}

                        <div>
                            {isLoginForm ? (
                                <section className="CredentialsLogin">

                                    <article className="EmailContainer">

                                        <label htmlFor="" className='EmailLabel'>E-mail</label>

                                        <input type="email" placeholder='Insira seu E-mail' className='EmailInputLogin' onChange={(e) => { setEmail(e.target.value) }} />

                                        <i className='MailIcon'><CiMail /></i>

                                    </article>

                                    <article className="SenhaContainer">

                                        <label htmlFor="" className='SenhaLabel'>Senha</label>

                                        <input type={IsVisible} placeholder='Insira sua Senha' className='SenhaInputLogin' onChange={(e) => { setSenha(e.target.value) }} />

                                        {IsVisible == 'text' ? <i className='EyeIcon' onClick={SenhaVisivel}><IoEyeOutline /></i> : <i className='EyeIcon' onClick={SenhaVisivel}><IoEyeOffOutline /></i>}

                                    </article>

                                </section>
                            ) : (
                                <section className="CredentialsCadastro">

                                    <div className="NomeContainer">
                                        <label htmlFor="" className='NomeCadastroLabel'>Nome</label>
                                        <input type="text" className='NomeCadastroInput' placeholder='Insira seu Nome' onChange={(e) => { setNome(e.target.value) }} />
                                        {Nome !== '' ? <i className='DoneIcon'><MdDone /></i> : ''}

                                    </div>

                                    <div className="EmailContainer">

                                        <label htmlFor="" className='EmailCadastroLabel'>Email</label>
                                        <input type="email" className='EmailCadastroInput' placeholder='Insira seu E-mail' onChange={(e) => { setEmail(e.target.value) }} />
                                        {Email !== '' ? <i className='DoneIcon'><MdDone /></i> : ''}


                                    </div>

                                    <div className="SenhaContainer">

                                        {OnlyNumber ? (<div>
                                            <label htmlFor="" className='SenhaCadastroLabel' >Senha</label>

                                            <input type={IsVisible} className='SenhaCadastroInput' placeholder='Crie uma senha com mais de 6 caracteres' onChange={(e) => { setSenha(e.target.value) }} />
                                            {IsVisible == 'text' ? <i className='EyeIcon' onClick={SenhaVisivel}><IoEyeOutline /></i> : <i className='EyeIcon' onClick={SenhaVisivel}><IoEyeOffOutline /></i>}

                                        </div>)

                                            :

                                            <div className='WrongPassContainer'>

                                                <label htmlFor="" className='WrongPassLabel' >Senha</label>

                                                <input type={IsVisible} className='WrongPassInput' placeholder='Insira sua Senha' onChange={(e) => { setSenha(e.target.value) }} />
                                                <p>Digite somente números na sua senha!</p>
                                                {IsVisible == 'text' ? <i className='EyeIcon wrongpssIcon' onClick={SenhaVisivel}><IoEyeOutline /></i> : <i className='EyeIcon wrongpssIcon' onClick={SenhaVisivel}><IoEyeOffOutline /></i>}



                                            </div>

                                        }


                                    </div>

                                    <div className="SenhaContainer">


                                        {isEqual ? (<div>
                                            <label htmlFor="" className='SenhaconCadastroLabel'>Confirme a senha</label>

                                            <input type={IsVisibleConf} className='SenhaconCadastroInput' placeholder='Confirme a senha' onChange={(e) => { setConfSenha(e.target.value) }} />

                                            {IsVisibleConf == 'text' ? <i className='EyeIcon' onClick={ConfSenhaVisivel}><IoEyeOutline /></i> : <i className='EyeIcon' onClick={ConfSenhaVisivel}><IoEyeOffOutline /></i>}
                                        </div>)

                                            :

                                            (<div className='WrongConfPassContainer'>

                                                <label htmlFor="" className='WrongConfPassLabel'>Confirme a senha</label>
                                                <input type={IsVisibleConf} className='WrongConfPassInput' placeholder='Confirme a senha' onChange={(e) => { setConfSenha(e.target.value) }} />

                                                <p>As senhas não são iguais</p>

                                                {IsVisibleConf == 'text' ? <i className='EyeIcon wrongConfpssIcon' onClick={ConfSenhaVisivel}><IoEyeOutline /></i> : <i className='EyeIcon wrongConfpssIcon' onClick={ConfSenhaVisivel}><IoEyeOffOutline /></i>}
                                            </div>)}


                                    </div>

                                </section>
                            )}

                            {isLoginForm ?

                                (<section className="ReminderRadio">

                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Lembrar E-mail e Senha</label>

                                </section>)


                                :

                                (<section className="AgreementsSection">

                                    <div className="AgreementsContainer">

                                        <input type="radio" name="" id="" />
                                        <label htmlFor="" className='Agreements'>Li e Concordo com os <a href="">Termos e Condições</a></label>
                                    </div>

                                    <div className="Reminder">

                                        <input type="radio" name="" id="" />
                                        <label htmlFor="">Lembrar E-mail e Senha</label>

                                    </div>



                                </section>)}


                            <div className="SiginBtnContainer">
                                {isLoginForm ? (

                                    <button onClick={FazerLogin}>
                                        Entrar
                                    </button>
                                ) : (<button data-bs-target="#CorfirmModal" data-bs-toggle="modal" onClick={CadastrarUsuario}>Cadastrar</button>)}
                                {isLoginForm && <a href="#" data-bs-target="#exampleModal" data-bs-toggle="modal" >Esqueceu a senha?</a>}
                            </div>

                        </div>

                        <div className="CadastrarLink">
                            {isLoginForm ? (<span>
                                Novo por aqui? <a className='CadastreseL' onClick={toggleForm}>Cadastre-se</a></span>) : ''}
                        </div>
                    </section>

                </main>

            </section>
        </div>
    );
}

export default LoginPage;