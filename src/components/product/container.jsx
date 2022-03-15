import useValue from "../../hooks/use-value";
import { Product } from './component';

export const ProductContainer = ({ product }) => {
    const { amount, decrement, increment } = useValue(0);

    return <Product amount={amount} decrement={decrement} increment={increment} />
}