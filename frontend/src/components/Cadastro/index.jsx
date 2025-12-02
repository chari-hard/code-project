import './style.css'

export const Cadastro = () => {
    return (

        <>

            <div className="cadastro-container">
                <h2 className='titulo-h2'>CADASTRO</h2>
                <p>Por favor preencha as informações para continuar comprando.</p>

                <form className="form-cadastro">
                    <div className="coluna-info-contatos">
                        <h3>INFORMAÇÕES PESSOAIS:</h3>



                        <div className='nome-email'>
                            <label>Nome Completo*</label>
                            <input type="email" required />

                            <label>E-mail*</label>
                            <input type="email" required />
                        </div>


                        <div className='senhas'>
                            <label>Senha*</label>
                            <input type="password" required />

                            <label>Confirmar Senha*</label>
                            <input type="password" required />
                        </div>


                        <div className='contatos'>
                            <h3>CONTATOS:</h3>

                            <label>Telefone Celular*</label>
                            <input type="number" required />

                            <label>Telefone Celular 2</label>
                            <input type="number" />
                        </div>

                    </div>



                    <div className="coluna-endereco">
                        <h3>ENDEREÇO:</h3>

                        <div className='cep'>
                            <label>CEP*</label>
                            <input type="number" required />
                        </div>

                        <div className='numero'>
                            <label>Número*</label>
                            <input type="number" required />
                        </div>

                        <div className='complemento'>
                            <label>Complemento*</label>
                            <input type="text" required />
                        </div>


                        <div className='btn-class'>

                            <button className="btn-cadastrar" type="submit">
                                CADASTRAR
                            </button>
                        </div>



                    </div>
                </form>

                <h3>© 2025 CODE. Todos os direitos reservados.</h3>
            </div>

        </>
    );
}