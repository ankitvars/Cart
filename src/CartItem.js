import React from "react";

const CartItem = (props) => {
  const { title, price, qty, img } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} alt="product-pic" />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#ccc" }}>Rs: {price}</div>
        <div style={{ color: "#ccc" }}>Qty:{qty} </div>
        <div className="cart-item-actions">
          <img
            alt="increase"
            src="https://cdn-icons-png.flaticon.com/128/3914/3914248.png"
            className="action-icons"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            src="https://cdn-icons-png.flaticon.com/128/4338/4338830.png"
            className="action-icons"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            src="https://www.flaticon.com/svg/vstatic/svg/3917/3917378.svg?token=exp=1672588873~hmac=a5ff594a73e68a6be4c4b9bb11c9afd4"
            className="action-icons"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 120,
    width: 120,
    borderRadius: 5,
    background: "#ccc",
  },
};

export default CartItem;
