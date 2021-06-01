import { useSelector } from "react-redux";
import { product } from "../redux/constants/action-types";

type allProducts = {
    allProducts: {
        product: product[]
    },
}
export const ProductComponent = () => {
    const products: product[] = useSelector((state: allProducts) => state.allProducts.product);
    console.log(products)
    const {id,title} = products[0];
    return (
        <div>
            <div>
                <div>
                    <div></div>
                    <div>
                        <div>
                           {title} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}