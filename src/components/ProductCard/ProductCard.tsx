'use client';

import React from "react";
import styles from "./ProductCard.module.scss";
import { ProductInterface } from "../../core/model/product.model"

export function ProductCard(product: ProductInterface) {
  return (
    <div className={styles.card}>
      <img src={product.photo} />

      <div className={styles.info}>
        <p className={styles.text}>{product.descriptionShort}</p>
        <h2>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
        <h1>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h1>
        <p>{product.productName}</p>
        {product.productName && <p className={styles.freight}>Frete grátis</p>}
      </div>

      <button className={styles.button}>COMPRAR</button>
    </div>
  );

   
}
