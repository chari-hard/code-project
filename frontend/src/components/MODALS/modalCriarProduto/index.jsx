import { Modal } from '@mui/material'
import { useState } from "react"
import './style.css'
import axios from 'axios'


export const ModalCriarProduto = ({open, close}) => {

    const [nome, setNome] = useState()
    const [imagem, setImagem] = useState()
    const [valor, setValor] = useState()

    const cadastro = () => {

        const novopProduto = {
            nome: nome,
            imagem: imagem,
            valor: valor,
        }

        axios.post('http://localhost:8081/cadastrar', novaMusica)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return(
        <Modal open={open} onClose={close} className='container-modal'>
            <div className="container-card-modal">
                <form>
                    <div>
                        <label htmlFor="">Nome do Produto:</label>
                        <input type="text" placeholder='nome do produto' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Imagem do Produto:</label>
                        <input type="text" placeholder='imagem do produto'value={capa} onChange={(e) => setCapa(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Valor do Produto</label>
                        <input type="text" placeholder='preço do produto' value={link} onChange={(e) => setLink(e.target.value)}/>
                    </div>
                    
                    <button className='btn' onClick={() => cadastro()}> Cadastrar </button>
                </form>
                
            </div>
        </Modal>
    )
}