import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AddToCartButton, RemoveFromCartButton } from "./AddToCartButton";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div className="container">
      <div className="row">
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <div className="col-md-6 col-lg-4 mb-4" key={expense.id}>
              <div className="card h-100 shadow-sm border-0">
                {/* Image Placeholder */}
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt={expense.name}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-2 text-center">
                    {expense.name}
                  </h5>
                  <div className="text-center">
                    <p className="card-text mb-1">
                      <strong>Quantity:</strong> {expense.quantity}
                    </p>
                    <p className="card-text mb-1">
                      <strong>Unit Price:</strong> $
                      {expense.unitprice.toFixed(2)}
                    </p>
                    {/* <p className="card-text mb-1 text-muted">
                      <strong>Total:</strong> $
                      {(expense.unitprice * expense.quantity).toFixed(2)}
                    </p> */}
                  </div>
                </div>
                {/* Add buttons to add or remove item */}
                <div className="card-footer d-flex justify-content-between">
                  <AddToCartButton name={expense.name} />
                  <RemoveFromCartButton name={expense.name} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted">
            <p>No items in the cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
