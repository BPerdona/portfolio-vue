<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    },
    modelValue:{
        type: String,
        required: false
    },
    update_modelValue:{
        type: Function,
        required: false
    },
    type:{
        type: String,
        default: "text"
    },
    inputIsValid:{
        type: Boolean,
        default: false
    },
    inputType:{
        type: String,
        required: false,
        default: "text"
    }
})

</script>

<template>
    <div class="wrapper">
        <label for="fname" >{{label}}</label><br>
        <input
            :type="props.inputType"
            :class="inputIsValid ? 'default-input':'input-invalid'"
            name="fname"
            :placeholder="inputType=='password' ? '*******' : placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            >
    </div>
</template>

<style scoped>

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

.wrapper > label{
    color: white;
    font-weight: 600;
    font-size: 1.25rem;
}

.wrapper > input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    background-color: #0a0a0a;
    border-radius: .5rem;
    outline-width: 0;
    color: white;
    font-size: .875rem;
}

.default-input{
    border: .125rem solid rgba(38,38,38,1);
}

.default-input:focus{
    border: .125rem solid #16a34a;
}

.input-invalid:focus{
    border: .125rem solid red;
}

.input-invalid{
    border: .0625rem solid red;
}

</style>