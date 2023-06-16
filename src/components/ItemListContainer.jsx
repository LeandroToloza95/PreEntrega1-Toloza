import Container from 'react-bootstrap/Container';

export const ItemListContainer = (prop) => {
    return(
        <Container>
            <h1>{prop.greeting}</h1>
        </Container>)

}