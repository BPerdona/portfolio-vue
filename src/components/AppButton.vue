<script setup>

    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        onClickEvent:{
            type: Function,
            required: false,
        },
        anchor: {
            type: String,
            required: false
        },
        fullWidth:{
            type: Boolean,
            required: false,
            default: false
        },
        download:{
            type: Object,
            required: false,
        },
        target:{
            type: Object,
            required:false
        },
        isRouter:{
            type: Boolean,
            default: false
        },
        routerTo:{
            type: String,
            default: '/'
        }
    })


</script>

<template>
    <a v-if="!isRouter" :href="props.anchor" v-bind="props.download, props.target" :class="props.buttonClass">
        <button v-on:click="props.onClickEvent" :class="props.fullWidth ? 'full-width-button' : ''">
            <p>{{props.text}}</p>
            <font-awesome-icon
                v-if="props.icon"
                :icon="props.icon"
                style="--fa-animation-duration: 3s;"
                size="lg"
                color="white" 
            />
        </button>
    </a>
    <RouterLink v-if="isRouter" :to="routerTo" class="router-button">{{ text }}</RouterLink>
</template>

<style scoped>
a{
    text-decoration: none;
}

a > button, .router-button{
    display: flex;
    gap: .5rem;

    justify-content: center;
    align-items: center;

    padding: .5rem 1.5rem .5rem 1.5rem;
    background-color: #0a0a0a;
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    box-shadow: 0px 1px 1px 0px #16a34a;
}

.full-width-button{
    width: 100%;
}

a > button:hover, .router-button:hover{
    background-color: rgb(21, 128, 61);
    box-shadow: none;
}

a > button > p {
    font-family: 'Segoe UI';
    font-weight: 600;
    font-size: 1rem;
}
</style>