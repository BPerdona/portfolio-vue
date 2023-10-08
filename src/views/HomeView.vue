<script setup>
import {ref, reactive} from 'vue'
import data from '../utils/portfolioData'
import AppButton from '../components/AppButton.vue';
import AppChip from '../components/AppChip.vue';
import BigCard from '../components/BigCard.vue';
import NavBar from '../components/NavBar.vue';
import AppFooter from '../components/AppFooter.vue';
import Modal from '../components/Modal.vue';

const showModal = ref(false)
var modelData = reactive({
  title: "Generic Title",
  description: "Generic Description",
  tags: [],
  role: 'Role',
  imagens_path: [],
  features: [],
  github: null
})

function updateModelData(id=0){
  let model = data[id]
  modelData = model

  showModal.value = true
}

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
  <div class="info-section" id="about">
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
          :download="{download: 'Bruno-Perdona-CV'}"
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
  <h2 class="subtitle" id="project">Projetos</h2>
  <div class="project-wrapper">
    <div class="project-grid">
        <BigCard
          v-for="(project, key) in data"
          :photo_url="project.imagens_path[0]"
          :title="project.title"
          :description="project.description"
          :stacks="project.tags"
          :button-click-action="(event)=>{updateModelData(key)}"
        />
    </div>
  </div>

  <!-- Footer -->
  <AppFooter id="contact"/>

  <!-- Modal -->
  <Modal :show="showModal" @close="showModal = false">
    <template #header>
      <h2 class="modal-title">{{ modelData.title }}</h2>
    </template>
    <template #body>
      <div class="modal-image-container" >
      <img 
        class="modal-image"
        v-for="image in modelData.imagens_path" 
        :src="image" 
        alt="Project Image">
      </div>
      <div class="modal-content">
        <div class="modal-section">
          <h2>Descrição</h2>
          <p>{{ modelData.description  }}</p>
        </div>
        <div class="modal-section">
            <h2>Tecnologias</h2>
            <div class="chips">
              <AppChip
                v-for="chip in modelData.tags"
                :text="chip"
              />
            </div>
        </div>
      </div>
      <div class="modal-features">
        <h2>Features</h2>
        <ul>
            <li v-for="feature in modelData.features">{{ feature }}</li>
        </ul>
      </div>
    </template>
    <template #footer>
      <div class="modal-footer">
        <h4>Projeto: {{ modelData.role }}</h4>
        <div class="modal-button">
          <AppButton
            v-if="modelData.github"
            text="Projeto - GitHub"
            :anchor="modelData.github"
            :target="{target: '_blank'}"
          />
          <h4 
            v-else="!modelData.github" 
            style="color: red;">
            Código fonte fechado
          </h4>
        </div>
      </div>
    </template>
  </Modal>

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
  padding-top: 6rem;
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
  height: 3.5rem;
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

.project-wrapper{
  display: flex;
  justify-content: center;
}

.project-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: space-evenly;
  padding-bottom: 5rem;
  gap: 2rem;
}

.subtitle{
  text-align: center;
  color: white;
  font-size: 3rem;
  padding: 5.5rem 0 3rem 0;
}

.modal-title{
  font-size: 2rem;
}

.modal-image-container{
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
}

.modal-image{
  width: 100%;
  max-height: 30rem;
  border-radius: .5rem;
  overflow: hidden;
  transition: all 0.3s;

  box-shadow: 0px 2px 2px 0px #000000b8;
}

.modal-image:hover{
  transform: scale(1.1);
}

.modal-content{
  display: flex;
}

.modal-section{
  padding-top: 1rem;
  flex-basis: 50%;
}

.modal-section{
  padding-top: 1rem;
  flex-basis: 50%;
}

.modal-section > h2{
  padding-bottom: 0.5rem;
}

.modal-section > p{
  padding-right: 2rem;
}

.modal-features > h2{
  padding-top: .5rem;
}

.modal-features > ul{
  list-style: none;
  padding-left: 2rem;
}

.modal-features > ul > li::before {
    content: "\2022";
    color: #16a34a;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }

.modal-footer{
  display: flex;

  justify-content: space-between;
  justify-items: center;
  align-items: center;
}

@media (max-width: 1536px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.5rem;
  }

  .banner-wrapper > p{
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (max-width: 1024px) {
  .info-end-ball, .info-end, .divider{
    display: none;
  }

  .info-section{
    display: block;
  }

  .banner-wrapper>p{
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .project-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }

  .modal-title{
    font-size: 1.5rem;
  }

  .modal-image-container{
    display: block;
  }

  .modal-image{
    width: 100%;
    max-height: 20rem;
    border-radius: .5rem;
    margin-top: 1rem;
    border: none;
    overflow: hidden;
    transition: none;
  }

  .modal-image:hover{
    transform: none;
  }
}

@media (max-width: 768px) { 

  .banner-wrapper{
    padding: 3rem 1rem 3rem 1rem;
  }
  .banner-wrapper>h1{
    font-size: 2.8125rem;
  }
  
  .banner-wrapper>p{
    padding-left: 1rem;
    padding-right: 1rem;
    line-height: 110%;
  }

  .modal-content{
    display: block;
  }

}

</style>