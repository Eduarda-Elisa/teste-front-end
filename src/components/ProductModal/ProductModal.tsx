'use client'

import { ProductInterface } from "../../core/model/product.model"
import styles from "./ProductModal.module.scss"
import React, { useState } from "react";


export const ProductModal = (product: ProductInterface) => {
  const [value, setValue] = useState(1);

  const handleDecrement = () => {
    if (value > 1) setValue(value - 1);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
      <div 
      className={styles.popup}>

        <img src={product.photo} />

        <div className={styles.description}>
          <p className={styles.name}>{product.productName}</p>
          <h1 className={styles.price}>R$ {product.price?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h1>
          <p className={styles.text}>
            Many desktop publishing packages and web page <br />
            editors now many desktop publishing
          </p>
          <p className={styles.seeMore}>
            Veja mais detalhes do produto &#8250;
          </p>

          <div className={styles.buttons}>

            <div className={styles.numberInput}>
              <button
                className={`decrement ${value <= 1 ? "disabled" : ""}`}
                onClick={handleDecrement}
                disabled={value <= 1}
              >
                -
              </button>
              <span className={styles.numberDisplay}>{String(value).padStart(2, "0")}</span>
              <button className="increment" onClick={handleIncrement}>
                +
              </button>
            </div>

            <button className={styles.buy}>COMPRAR</button>

          </div>

        </div>

      </div>
  )
}

