export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket: any) =>
  basket?.reduce(
    (amount: any, item: any) => item.price.props.value + amount,
    0
  );

export const totalDiscount = (basket: any) =>
  basket?.reduce(
    (amount: any, item: any) => item.discountedPrice.props.value + amount,
    0
  );

const reducer = (state: any, action: any) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem: any) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
      break;
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    default:
      return state;
  }
};

export default reducer;