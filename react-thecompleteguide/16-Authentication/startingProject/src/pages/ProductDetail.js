import { useParams } from "react-router" /* Hook that returns a params object */

const ProductDetail = () => {

    const params = useParams();    

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    )
}

export default ProductDetail