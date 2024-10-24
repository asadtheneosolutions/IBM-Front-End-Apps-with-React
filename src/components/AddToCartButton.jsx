import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddToCartButton = ({ name }) => {
  const { dispatch } = useContext(AppContext);

  const handleAddToCart = () => {
    const item = {
      name: name,
      quantity: 1, // Default quantity to 1 when adding
    };

    dispatch({
      type: "ADD_QUANTITY",
      payload: item,
    });
  };

  return (
    <button className="btn btn-success" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

const RemoveFromCartButton = ({ name }) => {
  const { dispatch } = useContext(AppContext);

  const handleRemoveFromCart = () => {
    const item = {
      name: name,
      quantity: 1, // Default quantity to 1 when removing
    };

    dispatch({
      type: "RED_QUANTITY",
      payload: item,
    });
  };

  return (
    <button className="btn btn-danger" onClick={handleRemoveFromCart}>
      Remove from Cart
    </button>
  );
};

export { AddToCartButton, RemoveFromCartButton };
