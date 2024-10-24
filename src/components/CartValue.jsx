import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CartValue = () => {
  const { expenses, Location } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.unitprice * item.quantity;
  }, 0);

  return (
    <div className="alert alert-primary d-flex justify-content-between align-items-center">
      <span>
        <strong>Location:</strong> {Location}
      </span>
      <span>
        <strong>Cart Value:</strong> ${totalExpenses.toFixed(2)}
      </span>
    </div>
  );
};

export default CartValue;
