<script setup>
import AppButton from './AppButton.vue';

</script>

<template>
    <footer>
    <div class="footer-wrapper">
      <div class="footer-sinopse">
        <h3 class="footer-title">Bruno Perdoná</h3>
        <p>
          Estou, desde 2019, estudando sobre a área de
          desenvolvimento e buscando resolver seus desafios;
          sempre aberto a aprender novas tecnologias, maneiras e
          problemas para que possa me desenvolver ainda mais
          como um profissional na área. Me destacando na rápida
          adaptação referente ao contexto em que fui inserido,
          focado em agregar valor em tudo que faço.
        </p>
      </div>
      <div class="footer-links">
        <h3 class="footer-title">Acesso Rápido</h3>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#project">Projetos</a></li>
        </ul>
        <div class="button-wrapper">
          <AppButton
            text="Curriculo"
            anchor="..\..\Currículo-FullStack.pdf"
            icon="fa-solid fa-download"
            :download="{download: 'Bruno-Perdona-CV'}"
          />
        </div>
      </div>
      <div class="social-medias">
        <h3 class="footer-title">Contato</h3>
        <a href="mailto:bruno15perdona@gmail.com">
          <p style="text-align: center;">bperdona@contato.com</p>
        </a>
        <ul>
          <li>
            <a href="https://github.com/BPerdona" target="_blank">
              <font-awesome-icon
                icon="fa-brands fa-github"
                style="--fa-animation-duration: 3s;"
                size="xl"
                color="white"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bperdona/" target="_blank">
              <font-awesome-icon
                icon="fa-brands fa-linkedin"
                style="--fa-animation-duration: 3s;"
                size="xl"
                color="white"
              />
            </a>
          </li>
          <li>
            <a href="http://wa.me/554796156906" target="_blank">
              <font-awesome-icon
                icon="fa-brands fa-whatsapp"
                style="--fa-animation-duration: 3s;"
                size="xl"
                color="white"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="footer-divider">
    <p class="credits">
      Bruno Perdoná - Todos os direitos Reservados - 2023
    </p>
  </footer>
</template>


<style scoped>

  footer{
    background-color: #040404;
  }

  .footer-wrapper {
    padding-top: 3rem;
    margin-left: 5rem;
    margin-right: 5rem;

    display: flex;

    justify-content: space-between;
    
  }

  .footer-sinopse{
    flex-basis: 33%;
  }

  .footer-title {
    color: white;
    padding-bottom: 1.5rem;
  }

  .footer-links{
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-links > ul{
    padding-left: .75rem;
    list-style: none;
  }

  .footer-links > ul > li::before {
    content: "\2022";
    color: #16a34a;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }

  .footer-links > ul > li > a{
    text-decoration: none;
    color: rgba(235, 235, 235, 0.64)
  }

  .footer-links > ul > li > a:hover{
    color: #16a34a ;
  }

  .footer-links .button-wrapper{
    padding-top: 4rem;
  }

  .social-medias{
    flex-basis: 33%;
  }

  .social-medias > h3{
    text-align: center;
  }

  .social-medias > ul {
    padding-top: 1rem;
    padding-left: 0;
    display: flex;

    justify-content: center;
    align-items: start;

    gap: 1rem;
    list-style: none;
  }

  .social-medias > ul > li > a{
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.0rem;
    border-radius: 80rem;
    background-color: #0a0a0a;
    box-shadow: 0px 1px 1px 0px #16a34a;
  }

  .social-medias > ul > li > a:hover{
    background-color: rgb(21, 128, 61);
    box-shadow: none;
  }
  
  .social-medias > a {
    color: white;
    font-size: 1.125rem;
    text-decoration: none;
  }

  .footer-divider{
    margin: 2rem 5rem 2rem 5rem;
  }
  .credits{
    padding-bottom: 1rem;
    text-align: center;
  }
  
</style>