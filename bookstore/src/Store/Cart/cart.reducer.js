

const initialState = {
    cartItems: [],
    total: 0
}

const CartReducer = (state = initialState, action) => {
    console.log("reducer called", action)
    switch (action.type){
        case "ADD_TO_CART":
            // const newData = [...state.cartItems,action.payload];
            // console.log("Add_to_cart reducer called", action, newData)
            state.cartItems.push(action.payload);

            return {...state, total: state.total + 1 };
   
        case "REMOVE_FROM_CART": 
            console.log("remove_from_cart reducer called", state.cartItems.filter((items) => items.id !== action.payload.id))
                return { ...state,  total: state.total - 1, cartItems:state.cartItems.filter((items) => items.id !== action.payload.id) };

            // return {...state, cartItems: state.cartItems.pop(action.payload)};
    default:
        return state;
            
    }
}


export default CartReducer;