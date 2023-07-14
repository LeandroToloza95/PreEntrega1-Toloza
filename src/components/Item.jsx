import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const Item = ({ products }) => {
    // return (
    //     <>
    //         <div key={products.id}>
    //             {products.correct_answer}
    //         </div>
    //     </>)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products.img} />
            <Card.Body>
                <Card.Title>{products.question}</Card.Title>
                <Card.Text> Respuesta correcta: {products.correct_answer}
                </Card.Text>
                <Link to={`/item/${products.id}`}>
                    <Button variant="primary">Ver detalle</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}