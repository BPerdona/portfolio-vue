<script setup>
import AppButton from '../components/AppButton.vue';
import AppChip from '../components/AppChip.vue';
import NavBar from '../components/NavBar.vue';

</script>

<template>
  <!-- Menu bar -->
  <NavBar></NavBar>

  <!-- Banner Wrapper -->
  <div class="banner-wrapper">
    <h1>Full Stack Developer</h1>
    <p>Formado em Análise e Desenvolvimento de Sistemas e atuando na área de desenvolvimento a mais de 2 anos com participação nos mais variados tipos de projeto como freelances, bolsas e estágios. Atuando em todas as etapas de desenvolvimento do software e focando sempre em entregar o produto proposto da melhor forma possível.</p>
  </div>

  <!-- Info Section -->
  <div class="info-section">
    <div class="about-me section">
      <h2 class="section-title">Sobre mim</h2>
      <ul>
        <li><strong>Nome: </strong>Bruno Perdoná</li>
        <li><strong>Idade: </strong>22 Anos</li>
        <li><strong>Endereço: </strong>Canoinhas/SC</li>
        <li><strong>Formaçã: </strong>Análise e Desenvolvimento de Sistemas</li>
        <li><strong>Tempo de Experiencia: </strong>2 Anos</li>
      </ul>
      <div class="curriculum-button">
        <AppButton 
          text="Curriculo"
          icon="fa-solid fa-download"
          anchor="..\..\Currículo-FullStack.pdf"
        />
      </div>
    </div>
    <div class="divider"></div>
    <div class="skill-list section">
      <h2 class="section-title">Tecnologias</h2>
      <h3>Linguagens</h3>
      <div class="chips">
        <AppChip
          text="Java"
          icon="fa-brands fa-java"
          animate="fa-flip"
        />
        <AppChip
          text="Python"
          icon="fa-brands fa-python"
          animate="fa-flip"
        />
        <AppChip
          text="JavaScript"
          icon="fa-brands fa-js"
          animate="fa-flip"
        />
        <AppChip
          text="TypeScript"
          icon="fa-brands fa-js"
          animate="fa-flip"
        />
      </div>
      <h3>Frameworks e Tecnologias</h3>
      <div class="chips">
        <AppChip
          text="Vue.js"
          icon="fa-brands fa-vuejs"
          animate="fa-flip"
        />
        <AppChip
          text="React"
          icon="fa-brands fa-react"
          animate="fa-flip"
        />
        <AppChip
          text="Angular"
          icon="fa-brands fa-angular"
          animate="fa-flip"
        />
        <AppChip
          text="TailWind"
          icon="fa-solid fa-wind"
          animate="fa-flip"
        />
        <AppChip
          text="Android"
          icon="fa-brands fa-android"
          animate="fa-flip"
        />
        <AppChip
          text="Spring"
          icon="fa-solid fa-leaf"
          animate="fa-flip"
        />
      </div>
    </div>
  </div>

  <!-- End info decoration -->
  <div class="info-end">
    <div class="info-end-ball"></div>
  </div>

  <!-- Projects List -->
  <h2 class="project-title">Projetos</h2>
</template>

<style scoped>

.banner-wrapper{
  padding: 5rem;
  background: rgb(38,38,38);
  background: linear-gradient(90deg, rgba(38,38,38,1) 0%, rgba(22,163,74,1) 50%, rgba(38,38,38,1) 100%);
}

.banner-wrapper:hover{
  background: rgb(38,38,38);
  background: linear-gradient(90deg, #052e16 0%, rgba(22,163,74,1) 50%, #052e16 100%);
}

.banner-wrapper > h1 {
  text-align: center;
  font-size: 60px;
  font-weight: 800;
  color: white;
  padding-bottom: 4rem;
}

.banner-wrapper > p{
  padding-left: 8rem;
  padding-right: 8rem;
  font-size: 1.25rem;
  color: white;
  font-weight: 600;
  text-align: center;
}

.info-section{
  display: flex;
  flex-direction: row;

  justify-content: space-between;
}

.divider{
  border: 6px solid rgba(22,163,74,1);
}

.section{
  padding: 2rem;
  flex-basis: 50%;
}

.section-title{
  color: white;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 2rem;
}
.about-me > ul >li {
  color: white;
  padding-bottom: .75rem;
}

.curriculum-button{
  display: flex;
  padding-top: 1.875rem;
  justify-content: center;
}

.skill-list > h3{
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
}

.chips{
  display: flex;
  gap: 0.75rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  flex-wrap: wrap;
}

.info-end{
  height: 10rem;

  display: flex;
  justify-content: center;
}

.info-end-ball{
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50rem;
  background-color: rgba(22,163,74,1);
  margin: -1px;
}

</style>