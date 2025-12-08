import './style.css'
import imagemCarrinho from '../../../assets/images/iconSacola.svg'
import { Box } from "@mui/material";

export const Cardroupas = ({ imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa }) => {
    return (
        <div className='cardroupa'>

            {/* IMAGEM DA ROUPA RESPONSIVA */}
            <Box
                component="img"
                src={imagemRoupa}
                alt={nomeRoupa}
                sx={{
                    width: {
                        xs: "200px",
                        sm: "150px",
                        md: "300px",
                    },
                    height: "auto",
                    display: "block",
                    margin: "0 auto",
                }}
            />

            <div className='roupa-content'>
                <div>
                    <p className='nome-roupa'>{nomeRoupa}</p>

                    <div className='prizes'>

                        {/* DESCONTO RESPONSIVO */}
                        <Box
                            className='discount'
                            sx={{
                                fontSize: {
                                    xs: "12px",
                                    sm: "14px",
                                    md: "16px",
                                },
                                textDecoration: "line-through",
                            }}
                        >
                            R${descontoRoupa}
                        </Box>

                        {/* PREÇO RESPONSIVO */}
                        <Box
                            className='prize'
                            sx={{
                                fontSize: {
                                    xs: "14px",
                                    sm: "16px",
                                    md: "18px",
                                },
                                fontWeight: "bold",
                            }}
                        >
                            R${precoRoupa}
                        </Box>

                    </div>
                </div>

                {/* ÍCONE DO CARRINHO RESPONSIVO */}
                <Box
                    component="img"
                    src={imagemCarrinho}
                    alt="Carrinho"
                    sx={{
                        width: {
                            xs: "20px",
                            sm: "24px",
                            md: "28px",
                        },
                        height: "auto",
                    }}
                />
            </div>
        </div>
    )
}
