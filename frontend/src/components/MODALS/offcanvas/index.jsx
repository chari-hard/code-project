import './style.css'
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import bolapretahehe from "../../../assets/images/bola preta com numero 1.svg"
import fecharcanvas from "../../../assets/images/x-carrinho.svg"

const DrawerContent = styled("div")(({ theme }) => ({
    width: 420,
    padding: theme.spacing(2),
    height: "100%",
    backgroundColor: theme.palette.background.default,
}));

export default function OffCanvasCarrinho({ open, onClose, items = [] }) {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <DrawerContent className='container-canvas'>

                    <div className="header-canvas">
                        <div className='carrinho-com-bola'>
                            <h2>Carrinho</h2>
                            <img src={bolapretahehe} alt="" />
                        </div>
                        <img className='fechar-canvas' src={fecharcanvas} alt="" onClick={() => onClose()} />
                    </div>
                    <div className='footer-canvas'>

                        <div className='subtotal-valor'>
                            <h2>SUBTOTAL 79,99</h2>
                        </div>
                    </div>

            </DrawerContent>
        </Drawer>
    );
}