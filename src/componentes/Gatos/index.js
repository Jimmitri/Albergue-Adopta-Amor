import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider'
import { ProductoItem } from './InfoGatos'


export const Gatitos = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  const productosFiltrados = productos.filter(producto => producto.id >= 16 && producto.id <= 30);

  console.log(productos)


  return (
    <>
      <h2 className='prod_h2'>¡Encuentra a tu amigo felino!</h2>
      <div className='Mascotas'>
        {
          productosFiltrados.map(producto =>(
            <ProductoItem 
            key={producto.id}
            id={producto.id}
            title={producto.title}
            image={producto.image}
            descrip={producto.descrip}
            />
          ))
        }
        
      </div>
    </>
  );
}
