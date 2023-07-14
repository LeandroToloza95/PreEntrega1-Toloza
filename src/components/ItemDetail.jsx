export const ItemDetail = ({ products }) => {
    console.log(products[0])
    return (
        <>
        <div>{products.category}</div>
        <div>{products.type}</div>
        <div>{products.difficulty}</div>
        <div>{products.question}</div>
        <div>{products.correct_answer}</div>
        <div>{products.incorrect_answers}</div>
        <div>{products.id}</div>
        <img src={products.img} alt={products.correct_answer}/>
        </>
    );
}

