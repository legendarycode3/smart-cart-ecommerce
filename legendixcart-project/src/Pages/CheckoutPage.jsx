import { Link } from "react-router-dom";

import axios from "axios";

import dayjs from "dayjs";

import { useEffect, useState } from "react";
// import { formatMoney } from '../utils/money';

import "./CheckoutPage.css";
import "./Checkout-Header.css";
import { formatMoney } from "../utils/money";

export function CheckoutPage({ cart }) {
  /**
   * USING THE LIFTED STATE "cart" WHICH CAN BE ACCESSED IN ALL PAGES , INSTEAD OF USEING THE AND WRITTING THE axios.get HTTP REQUEST AGAIN
   */
  //   const [cart, setCart] = useState([]);

  //   const cartDataURL = "http://localhost:3000/api/cart-items";

  //   useEffect(() => {
  //     axios.get(`${cartDataURL}`).then((res) => {
  //       console.log(res.data);
  //       setCart(res.data);
  //     });
  //   }, []);

  const [deliveryOptions, setDeliveryOptions] = useState([]);

  const deliveryOptionURL =
    "http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime";

  useEffect(() => {
    axios.get(`${deliveryOptionURL}`).then((res) => {
      // USED .then , TO WAIT FOR THE RESPONSE TO COME BACK, SO THAT ONCE WE GET THE RESPONSE , THEN WE KNOW SAVE IT ON THE "deliveryOptions" WHICH IS THE INITIAL FUNCTIOn
      // console.log(res.data);
      setDeliveryOptions(res.data);
    });
  }, []);

  const paymentSummaryURL = "http://localhost:3000/api/payment-summary";

  const [paymentSummarys, setPaymentSummarys] = useState(null);

  useEffect(() => {
    axios.get(`${paymentSummaryURL}`).then((res) => {
      setPaymentSummarys(res.data);
    });
  });

  return (
    <>
      <link rel="icon" type="image/cart-favicon" href="/cart-favicon.png" />

      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {deliveryOptions.length > 0 &&
              cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find(
                  (deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                  },
                );

                return (
                  <div key={cartItem.productId} className="cart-item-container">
                    <div className="delivery-date">
                      Delivery date:{" "}
                      {dayjs(
                        selectedDeliveryOption.estimatedDeliveryTimeMs,
                      ).format("dddd, MMMM D")}
                    </div>

                    <div className="cart-item-details-grid">
                      <img
                        className="product-image"
                        src={cartItem.product.image}
                      />

                      <div className="cart-item-details">
                        <div className="product-name">
                          {cartItem.product.name}
                        </div>
                        <div className="product-price">
                          ${(cartItem.product.priceCents / 100).toFixed(2)}
                        </div>
                        <div className="product-quantity">
                          <span>
                            Quantity:{" "}
                            <span className="quantity-label">
                              {cartItem.quantity}
                            </span>
                          </span>
                          <span className="update-quantity-link link-primary">
                            Update
                          </span>
                          <span className="delete-quantity-link link-primary">
                            Delete
                          </span>
                        </div>
                      </div>

                      <div className="delivery-options">
                        <div className="delivery-options-title">
                          Choose a delivery option:
                        </div>

                        {deliveryOptions.map((deliveryOption) => {
                          let priceString = "Free Shipping";
                          if (deliveryOption.priceCents > 0) {
                            priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
                          }
                          return (
                            <div
                              key={deliveryOption.id}
                              className="delivery-option"
                            >
                              <input
                                type="radio"
                                checked={
                                  deliveryOption.id ===
                                  cartItem.deliveryOptionId
                                }
                                className="delivery-option-input"
                                name={`delivery-option-${cartItem.productId}`}
                              />
                              <div>
                                <div className="delivery-option-date">
                                  {dayjs(
                                    deliveryOption.estimatedDeliveryTimeMs,
                                  ).format("dddd, MMMM D")}
                                </div>
                                <div className="delivery-option-price">
                                  {priceString}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>




          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            {paymentSummarys && (
              <>
                <div className="payment-summary-row">
                  <div>Items ({paymentSummarys.totalItems}):</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummarys.productCostCents)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummarys.shippingCostCents)}
                  </div>
                </div>

                <div className="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummarys.totalCostBeforeTaxCents)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div className="payment-summary-money">
                    ${paymentSummarys.taxCents}
                  </div>
                </div>

                <div className="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummarys.totalCostCents)}
                  </div>
                </div>

                <button className="place-order-button button-primary">
                  Place your order
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// export default CheckoutPage
