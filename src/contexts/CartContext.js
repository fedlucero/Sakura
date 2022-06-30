import React, { createContext, useState }from 'react';

export const CartContext = createContext([]);

const { Provider }= CartContext;

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // ItemDetail - Metodo Some - Detecta si el producto a agregar ya está en el carrito. Retorna booleano.
    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    // ItemDetail - Agrega producto al cart, sin sobreponerse a los ya agregados. Aumenta la cantidad.
    const addItem = (product, quantity) => {
        const newProduct = {...product, quantity}
        const auxArr = [...cart]

        if (isInCart(newProduct.id)) {
            const findProd = cart.find(x => x.id === newProduct.id)
            const prodIndex = cart.indexOf(findProd)

            auxArr[prodIndex].quantity += quantity
        } else {
            auxArr.push(newProduct)
        }
        setCart(auxArr)
    }

    // Vaciar carrito - Cart - Botón.
    const emptyCart = () => {
        setCart([])
    }

    // Método filter - Cart - En función del ID, retorna un array sin el producto seleccionado.
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    // Método Reduce - CartWidget - Retorna la cantidad total de unidades en el state del cart.
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.quantity, 0)
    }

    // Método Reduce - Cart - Retorna el precio total del cart.
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.quantity * x.regularPrice, 0)
    }


    return (
        <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>{children}</Provider>
    )
}
