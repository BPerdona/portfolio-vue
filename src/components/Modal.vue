<script setup>
import AppButton from './AppButton.vue';
import {ref} from 'vue'

const iconColor = ref('6a0000')

const changeIconColor = (event)=>{
    iconColor.value = iconColor.value === '6a0000' ? 'e40101' : '6a0000'
}

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    }
})

</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modal-header">
                <slot name="header"></slot>
                    <div class="icon-container" @click="$emit('close')" v-on:mouseenter="changeIconColor" v-on:mouseleave="changeIconColor">
                            <font-awesome-icon
                                icon="fa-solid fa-xmark"
                                size="2x"
                                :color="'#'+iconColor"/>
                    </div>
                </div>
                <div class="modal-content">
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <div class="modal-default-button">
                                <AppButton
                                    text="Fechar"
                                    @click="$emit('close')"
                                />
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>


.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container{
    color: black;
    width: 80%;
    max-height: 90%;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: .875rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
}

.icon-container{
    padding: 0.25rem;
    cursor: pointer;
}

.modal-body{
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

.modal-enter-form{
    opacity: 0;
}

.modal-leave-to{
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (max-width: 1024px){

    .modal-container{
        overflow-y: initial !important;
        padding: .625rem 0rem .625rem 1.25rem;
    }

    .modal-content{
        height: 80vh;
        overflow-y: auto;
        padding-right: 1rem;
    }

    .icon-container{
        padding-right: 1.25rem;
    }

    .modal-header > h2{
        margin-top: 0;
        color: #42b983;
    }
}
</style>