import { Header } from "../components/Header/Header";
import { Partner } from "../components/PartnerCard/Partner";
import styles from "./page.module.scss";
import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { CircleBrand } from "../components/CircleBrand/CircleBrand";
import React from "react";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";

export default function Home() {

  return (
    <>
      
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>Venha conhecer nossas promoções</h1>
              <p><span>50% Off</span> nos produtos</p>
              <button>Ver produto</button>
            </div>
          </div>
        </section>

        <CategoryCard />

        <RelatedProducts navigation={true} index={0}/>

        <section className={styles.partner}>
          <Partner />
          <Partner />
        </section>

        <RelatedProducts navigation={false} index={1}/>
          
        <section className={styles.partner}>
          <Partner />
          <Partner />
        </section>
        
        <section className={styles.circle}>

          <p>Navegue por marcas</p>

          <div className={styles.container}>

            <CircleBrand />
            <CircleBrand />
            <CircleBrand />
            <CircleBrand />
            <CircleBrand />

          </div>

        </section>

        <RelatedProducts navigation={false} index={2}/>
        
        <section className={styles.newsletter}>
          
          <div className={styles.containerNewsletter}>
            <div className={styles.left}>

              <p className={styles.title}>
                Inscreva-se na nossa newsletter
              </p>

              <p className={styles.text}>
                Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br />
                da Econverse.
              </p>

            </div>

            <div className={styles.right}>

                <div className={styles.box}>

                  <input type="text" placeholder="Digite seu nome"/>
                  <input type="text" placeholder="Digite seu e-mail" />

                  <button>INSCREVER</button>

                </div>
                <div className={styles.Checkbox}>

                  <input type="Checkbox" />
                  <p>Aceito os termos e condições</p>

                </div>

            </div>
          </div>

        </section>

        <footer className={styles.footer}>

            <div className={styles.containerFooter}>

                <div className={styles.brand}>

                  <img className={styles.logo} src="/assets/images/Group 35.png" alt="" />

                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit.
                  </p>

                  <div className={styles.icons}>

                    <img className={styles.instagram} src="/assets/images/instagram.png" alt="" />
                    <img className={styles.facebook} src="/assets/images/facebook.png" alt="" />
                    <img className={styles.linkedin} src="/assets/images/linkedin.png" alt="" />

                  </div>

                </div>

                <span></span>

                <div className={styles.list}>

                  <ul>
                    <dt className={styles.institutional}>Institucional</dt>
                    <dt>Sobre nós</dt>
                    <dt>Movimento</dt>
                    <dt>Trabalhe conosco</dt>
                  </ul>

                  <ul>
                    <dt className={styles.help}>Ajuda</dt>
                    <dt>Suporte</dt>
                    <dt>Fale Conosco</dt>
                    <dt>Perguntas Frequentes</dt>
                  </ul>

                  <ul>
                    <dt className={styles.terms}>Termos</dt>
                    <dt>Termos e Condições</dt>
                    <dt>Política de Privacidade</dt>
                    <dt>Troca e Devolução</dt>
                  </ul>

                </div>
                
            </div>

            <div className={styles.bottom}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </footer>

      </main>
    </>
  )
}

