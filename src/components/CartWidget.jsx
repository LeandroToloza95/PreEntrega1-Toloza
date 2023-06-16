import cart from "../assets/carrito.png"

const styles={
    img: {
        height:"2rem",
        width:"auto"
    },
    span:{
        color:"white",
        paddingLeft:12
    }
}

export const CartWidget = () => {
    return <>
        <img src={cart} alt="Changuito" style={styles.img}/>
        <span style={styles.span}>  1</span>
    </>

}