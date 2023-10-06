<script setup>
import {onBeforeMount, ref} from 'vue'
import router from '../router';

const token = ref(localStorage.getItem('email'))

onBeforeMount(()=>{
    if(!localStorage.getItem('email')){
        router.push('/login')
    }
})

</script>


<template>

    <div class="center">
        <h1>Sorry, working in progress!</h1>
        <p>Logged as: {{ token }}</p>
    </div>

</template>

<style scoped>
.center{
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;
    align-items: center;

}

.center>h1{
    width: 100%;
    text-align: center;
}
</style>