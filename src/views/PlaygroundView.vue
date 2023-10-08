<script setup>
import AppButton from '../components/AppButton.vue';

</script>


<template>

    <div class="center">
        <h1>Sorry, working in progress!</h1>
        <AppButton
            text="Return"
            :is-router="true"
            router-to="/"
        />
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