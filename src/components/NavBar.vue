<script setup>
import {ref, watchEffect} from 'vue'
import AppButton from './AppButton.vue';
import router from '../router';


const defaultName = "Bruno Perdoná"
const title = ref('')
const toggleMenu = ref(false)

function toggle(event) {
    toggleMenu.value = !toggleMenu.value
}

watchEffect(() => {
    setInterval(()=>{
        if(title.value.length == defaultName.length)
            return
        title.value = defaultName.slice(0, title.value.length+1)
    },100)
})

</script>

<template>
    <nav>
        <div class="menu">
            <div class="nav-title-wrapper">
                <h1>{{ title }}|</h1>
            </div>
            <div class="buttons-wrapper">
                <div class="nav-buttons">
                    <AppButton
                        text="Início"
                        anchor="#"
                    />
                    <AppButton
                        text="Sobre"
                        anchor="#about"
                    />
                    <AppButton
                        text="Projetos"
                        anchor="#project"
                    />
                    <AppButton
                        text="Contato"
                        anchor="#contact"
                    />
                    <AppButton
                        text="Curriculo"
                        anchor="..\..\Currículo-FullStack.pdf"
                        icon="fa-solid fa-download"
                        :download="{download: 'Bruno-Perdona-CV'}"
                    />
                    <AppButton
                        text="Playground"
                    />
                </div>
                <div class="menu-button">
                    <button @click="toggle">
                        <font-awesome-icon
                        icon="fa-solid fa-bars"
                        style="--fa-animation-duration: 3s;"
                        size="2x"
                        color="#16a34a"
                        />
                    </button>
                </div>
            </div>
        </div>
        <div v-if="toggleMenu" class="mobile-menu">
            <a href="#" @click="toggle">Início</a>
            <a href="#project" @click="toggle">Projetos</a>
            <a href="#about" @click="toggle">Sobre</a>
            <a href="#contact" @click="toggle">Contato</a>
            <a href="..\..\Currículo-FullStack.pdf" 
                download 
                target="_blank"
                @click="toggle"
                >Curriculo</a>
            <a href="#" @click="toggle">Playground</a>
        </div>
    </nav>
</template>

<style scoped>

    nav{
        position: sticky;
        top: 0px;
        z-index: 50;
        background: #171717;
    }

    .menu{
        display: flex;
        padding: 0.75rem;
        justify-content:space-between;

        box-shadow: 0px 1px 5px 0px #0e0e0e;
    }

    .nav-title-wrapper{
        padding-left: 2rem;
    }

    .nav-title-wrapper > h1{
        color: white;
        font-weight: 600;
        font-size: 2.5rem;
    }

    .buttons-wrapper{
        display: flex;
        justify-content: space-evenly;
    }

    .nav-buttons{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .menu-button{
        display: none;
    }

    .menu-button > button{
        padding: .5rem;
        border: none;
        background-color: #171717;
        cursor: pointer;
    }

    .menu-button > button:hover{
        border-radius: 0.5rem;
        background-color: rgb(8, 51, 24);
    }

    .mobile-menu{
        display: flex;
        flex-direction: column;
        box-shadow: 0px 1px 5px 0px #0e0e0e;
    }

    .mobile-menu > a {
        padding: .75rem;
        text-decoration: none;
        color: white;
        background-color: #0e0e0e;
        font-weight: 600;
        box-shadow: 0px 1px 5px 0px #212121;
    }

    .mobile-menu > a:hover {
        background-color: #0e0e0e07;
    }


    @media (max-width: 1145px) {
        .nav-buttons{
            gap: .5rem;
        }

        .nav-title-wrapper{
            padding-left: 0;
        }
    }

    @media (max-width: 1024px) {
        .nav-buttons{
            display: none;
        }
        .nav-title-wrapper > h1{
            font-size: 2.0rem;
        }

        .menu-button{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

</style>