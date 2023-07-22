

const cart = [];


const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //Check if product is Already Exist
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        //Increase the q uantity
        return state.map((item) =>

          //use of ternary operator
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        //const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },

        ];
      }

    case "DELITEM":
      const exist1 = state.find((item) => item.id === product.id);
      //const exist1 = state.filter((x) => item.id === product.id);
      if (exist1) {
        return state.filter((item) => item.id !== exist1.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    case "CLEARCART":
      return state.cart = [];

    case "INCREASE":
      const tempcart = state.map((item) => {
        if (item.id === product.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      return tempcart;

    case "DECREASE":
      const tempcart1 = state.map((item) => {
        if (item.id === product.id) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
      return tempcart1;

    case "TOTAL":
      const total = Object.values()
        .reduce((result, cartItem) => result + cartItem.price * cartItem.qty, 0);

      return {
        ...state,
        total
      };

    default:
      return state;

  }

};

export default handleCart;
