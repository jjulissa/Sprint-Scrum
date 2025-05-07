import { Link } from 'react-router-dom'; 
import iconCesta from "../../src/Assets/compra.png";  
import Logo from "../../src/Assets/ventas.png";  

export default function Header() { 

    return ( 
        <> 
            <header className=' bg-orange-600 text-white flex justify-around'> 
                <img className='w-[7%]' src={Logo} alt="Logo" /> 
                <input type="search" placeholder="Busca tu producto" name="BuscaProducto" id="BuscaProducto" /> 
                <Link to="/Login"> 
                    ¡Bienvenido Identifícate / Regístrate 
                </Link>
                <img className='w-[7%]' src={iconCesta} alt="Cesta" />
            </header>
            
            
        </>
    )
} 
