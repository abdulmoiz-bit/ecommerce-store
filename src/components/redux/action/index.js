// For ADD ITEM TO CART
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// For DELETE ITEM TO CART

export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product 
    }
}

// FOR DELETE ALL ITEMS TO CART

export const clearCart = (product) =>{
    return{
        type : "CLEARCART",
        payload : product
    };
}
export const incCart = (product) =>{
    return{
        type : "INCREASE",
        payload : product
    };
}
export const decCart = (product) =>{
    return{
        type : "DECREASE",
        payload : product
    };
}

export const total = (product) =>{
    return{
        type : "TOTAL",
        payload : product
    };
}

