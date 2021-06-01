import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeselectedProduct } from '../../redux/actions/productActions';
import { product } from '../../redux/constants/action-types'

type prod = {
    product: product
}

const productDetail = (product: product) => {
    const pro = useSelector((state: prod) => state.product)
    const router = useRouter()
    const dispatch = useDispatch();
    console.log(pro)
    const { productId } = router.query
    useEffect(() => {
        if (productId && productId !== "") {
            const response = axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
                console.log(res.data)
                dispatch(selectedProduct(res.data))
            }).catch((err) => {
                console.log(err);
            })
        }
        return () => {
            dispatch(removeselectedProduct(product))
        }
    }, [productId])
    return (
        <>
            <Head>
                <title>{pro.title}</title>
            </Head>
            <h1>Product Details </h1>
            <div style={{ border: "1px solid gray", padding: "1em", display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "1.5em" }}>
                <div>
                    <img src={pro.image} width="200"></img>
                </div>
                <div>
                    <h2>{pro.title}</h2>
                    <p><strong>price:</strong> {pro.price}</p>
                    <p><strong>category:</strong> {pro.category}</p>
                    <p><strong>description:</strong> {pro.description}</p>
                </div>
            </div>
        </>
    )
}

export default productDetail;