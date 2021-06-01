import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../redux/actions/productActions"
import { product } from "../redux/constants/action-types"
import Link from 'next/link'
import Head from "next/head"

type allProducts = {
    allProducts: {
        product: product[]
    },
}

export const ProductListing = () => {
    const [isloading, setIsloading] = useState(true)
    const products = useSelector((state: allProducts) => state)
    console.log(products)
    const dispatch = useDispatch()
    useEffect(() => {
        const response = axios.get("https://fakestoreapi.com/products").then((res) => {
            dispatch(setProducts(res.data))
            setIsloading(false)
        }).catch((err) => {
            console.log("Err", err);
        })
    }, [])
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "1em" }}>
            <Head>
                <title>Fake Store</title>
            </Head>
            {isloading
                ?
                <p>loading...</p>
                :
                products.allProducts.product.map((product,index) => (
                    <Link key={index} href="/product/[productId]" as={`/product/${product.id}`}>
                        <div key={index} style={{ border: "1px solid gray", padding: "5px", width: "300px", marginBottom: "2em" }}>
                            <img src={product.image} width="100" key={product.id}></img>
                            <hr></hr>
                            <p><strong>{product.title}</strong> </p>
                            <p><strong>price:</strong> {product.price}</p>
                        </div>
                    </Link>
                ))}
        </div>
    )
}