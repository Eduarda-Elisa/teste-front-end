'use client'

import React, { useState, useEffect } from "react";
import { ProductInterface } from "../../core/model/product.model";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./RelatedProducts.module.scss"
import { getProducts } from "../../core/service/product.service";
import { ProductModal } from "../ProductModal/ProductModal";

interface RelatedProductsProps {
    navigation: boolean;
    index: number
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ( navigation ) => {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [positionScrollCard, setPositionScrollCard] = useState(0);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductInterface | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
          const data = await getProducts();
          setProducts(data);
        };
        fetchProducts();
      }, []);
    
      const openModal = (product: ProductInterface) => {
        setSelectedProduct(product);
        setIsModalVisible(true);
        document.body.style.overflow = 'hidden';
      }
    
      const closeModal = () => {
        setIsModalVisible(false);
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
      };
    
      const scrollCardsRight = () => {
        const containerCards = document.querySelector(`.${styles.containerCards}_${navigation.index}`);
        const cardsCarousel = document.querySelector(`.${styles.carrousel}_${navigation.index}`);
        const card = cardsCarousel?.children[0];
      
        const containerCardsWidth = Number(getComputedStyle(containerCards!).width.replace("px", ""));
        const cardWidth = Number(getComputedStyle(card!).width.replace("px", ""));
        const containerCardsGap = Number(getComputedStyle(cardsCarousel!).gap.replace("px", ""));
        const totalWidth = containerCards!.scrollWidth;
      
        if (positionScrollCard + containerCardsWidth + cardWidth + containerCardsGap - 1 <= totalWidth) {
          const newPosition = positionScrollCard + cardWidth + containerCardsGap;
          setPositionScrollCard(newPosition);
          containerCards!.scrollTo({
            left: newPosition,
            behavior: "smooth",
          });
        }
      };
      
      const scrollCardsLeft = () => {
        const containerCards = document.querySelector(`.${styles.containerCards}_${navigation.index}`);
        const cardsCarousel = document.querySelector(`.${styles.carrousel}_${navigation.index}`);
        const card = cardsCarousel?.children[0];
      
        const cardWidth = Number(getComputedStyle(card!).width.replace("px", ""));
        const containerCardsGap = Number(getComputedStyle(cardsCarousel!).gap.replace("px", ""));
      
        if (positionScrollCard - (cardWidth + containerCardsGap) >= 0) {
          const newPosition = positionScrollCard - (cardWidth + containerCardsGap);
          setPositionScrollCard(newPosition);
          containerCards!.scrollTo({
            left: newPosition,
            behavior: "smooth",
          });
        }
      };
    return (
        <>
        {isModalVisible && (
            <section className={styles.modal}
            style={{ top: `${window.scrollY}px` }} >
              
                <div className={styles.modalBox}>
                  <ProductModal {...selectedProduct!}/>
                  <button 
                  className={styles.exit}
                  onClick={closeModal}
                  >
                    <img src="/assets/images/x.png" alt="" />
                  </button>
                </div>
            </section>
          )}

        <section className={styles.relatedProducts}>
            <div className={styles.containerNav}>

            <div className={styles.title}>
                <span></span>
                <h1>Produtos Relacionados</h1>
                <span></span>
            </div>

            {!navigation.navigation && ( <p className={styles.seeAll}>Ver Todos</p>)}

            {navigation.navigation && (
                    <nav>
                        <ul>
                            <dt>CELULAR</dt>
                            <dt>ACESSÓRIOS</dt>
                            <dt>TABLETS</dt>
                            <dt>NOTEBOOKS</dt>
                            <dt>TVS</dt>
                            <dt>VER TODOS</dt>
                        </ul>
                    </nav>
                )
            }

            </div>
            
            <div className={styles.boxCards}>
            <button 
            className={styles.buttonSlide}
            onClick={scrollCardsLeft}>
                &#8249;
            </button>

            <div className={`${styles.containerCards} ${styles.containerCards}_${navigation.index}`}>
                <div className={`${styles.carrousel} ${styles.carrousel}_${navigation.index}`}>
                {products.map((product, index) => (
                    <div
                    key={index}
                    onClick={() => openModal(product)}
                    >
                    <ProductCard 
                    key={index} 
                    {...product}
                    />
                    </div>
                ))}
                </div>
            </div>

            <button 
            className={styles.buttonSlide}
            onClick={scrollCardsRight}>
                &#8250;
            </button>
            </div>

        </section>
    </>
    )
}