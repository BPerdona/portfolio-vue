<script setup>
import AppButton from './AppButton.vue';
import AppChip from './AppChip.vue';


const props = defineProps({
    photo_url:{
        type: String,
        required: false,
        default: "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    stacks:{
        type: Array,
        required: true
    }
})

</script>

<template>
    <div class="card-wrapper">
        <div class="card-info">
            <img :src="props.photo_url" alt="Photo missing">
            <h3>{{props.title}}</h3>
            <p>{{props.description}}</p>
            <h3>Tecnologias</h3>
            <div class="chips-wrapper" style="display: flex; gap: 10px;">
                <AppChip 
                    v-for="tech in props.stacks"
                    :key="tech"
                    :text="tech"
                />
            </div>
        </div>

        <div class="card-button">
            <AppButton 
                text="Mais detalhes"
                :full-width="true"
                />
        </div>
        
    </div>
</template>

<style scoped>

.card-button{
    margin-top: 2rem;
}

.card-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-wrapper{
    width: 30rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: .5rem;
    background-color: #040404;

    box-shadow: 6px 6px 0px 0px #16a34ab2;
}

.card-info > img{
    width: 100%;
    min-height: 15rem;
    max-height: 15rem;
    border-radius: .5rem;
    border: 2px solid #16a34a;
    align-self: center;
    overflow: hidden;
}

.card-info > h3 {
    padding-top: .5rem;
    color: white;
    font-size: 1.5rem;
}

.card-info > p {
    font-size: 1.125rem;
    padding-left: 1rem;
}

.chips-wrapper{
    padding: 0.5rem 0 1rem 0;
    flex-wrap: wrap;
}

@media (max-width: 768px) {

    .card-wrapper{
        width: 22rem;
        margin: 0rem;
    }
    .card-info > p{
        line-height: 95%;
    }
    .card-info > img{

    }
}

</style>