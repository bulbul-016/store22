const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_CART':
          return {
            ...state,
            items: {
                [action.payload.id]: [
                    ...state.items[action.payload.id],
                    action.payload,
                
                ]
            }
          };
    
        
    
        default:
          return state;
      }
};

export default products;