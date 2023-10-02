<script setup>



const props = defineProps({
    text: {
        type: String,
        required: true
    },
    icon:{
        type: String,
        required: false
    },
    animate:{
        type: String,
        required: false,
        default: ""
    }
})

</script>

<template>
    <div class="chip-wrapper">
        <font-awesome-icon
            v-if="props.icon"
            :icon="props.icon"
            :class="props.animate"
            style="--fa-animation-duration: 3s;"
            size="xl"
            color="green" 
        />
        
        <p>{{ props.text }}</p>
    </div>
</template>

<style scoped>

.chip-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .625rem;

    padding: 0.5rem 0.75rem;
    background-color: #0a0a0a;
    border-radius: 1rem;
    box-shadow: 0px 1px 1px 0px #16a34a;
}

.chip-wrapper > p {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
}

</style>