<script setup>
import {ref, watchEffect} from 'vue'
import AppButton from './AppButton.vue';


const defaultName = "Bruno Perdoná"
const title = ref('')
const pipe = ref('|')

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
        <div class="nav-title-wrapper">
            <h1>{{ title }}{{pipe}}</h1>
        </div>
        <div class="buttons-wrapper">
            <div class="nav-buttons">
                <AppButton
                    text="Início"
                />
                <AppButton
                    text="Sobre"
                />
                <AppButton
                    text="Projetos"
                />
                <AppButton
                    text="Contato"
                />
                <AppButton
                    text="Curriculo"
                    anchor="..\..\Currículo-FullStack.pdf"
                    icon="fa-solid fa-download"
                />
                <AppButton
                    text="Playground"
                />
            </div>
        </div>
    </nav>
</template>

<style scoped>

    nav{
        position: sticky;
        top: 0px;
        z-index: 50;

        background: #171717;
        display: flex;
        padding: 1.25rem 1.25rem;
        justify-content:space-between;

        box-shadow: 0px 1px 5px 0px #171717;
    }

    .nav-title-wrapper{
        padding-left: 2rem;
    }

    .nav-title-wrapper > h1{
        color: white;
        font-weight: 600;
        font-size: 40px;
    }

    .buttons-wrapper{
        display: flex;
        justify-content: space-evenly;
    }

    .nav-buttons{
        display: flex;
        align-items: center;
    }

    .theme-switch{
        display: flex;
        align-items: center;
        justify-items: center;
    }

</style>