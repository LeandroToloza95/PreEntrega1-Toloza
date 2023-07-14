import Container from 'react-bootstrap/Container';
import data from '../data/products.json'
import { useState } from 'react';
import { useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = (prop) => {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        })

        promesa.then(result => {
            if (id) {
                console.log(id)
                setProducts(result.filter(
                    products => products.id ===id
                    
                ))
            } else {
                setProducts(result)
            }
        }
        )
    }, [id])

    return (
        <Container>
            <h1>Detalle</h1>
            {products.length === 0 ?
                <div>Loading...</div>
                : 
                <ItemDetail products={products} />
            }
        </Container>)

}