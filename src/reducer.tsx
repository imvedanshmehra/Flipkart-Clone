export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket: []) =>
  basket?.reduce(
    (amount: number, item: any) =>
      item.price.props.value * item.quantity + amount,
    0
  );

export const totalDiscount = (basket: []) =>
  basket?.reduce(
    (amount: number, item: any) =>
      item.discountedPrice.props.value * item.quantity + amount,
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
    case "QTYUP":
      let addedItem = state.basket.find((item: any) => item.id === action.id);
      addedItem.quantity += 1;
      return { ...state };
      break;
    case "QTYDOWN":
      let removedItem = state.basket.find((item: any) => item.id === action.id);
      removedItem.quantity -= 1;
      return { ...state };
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
