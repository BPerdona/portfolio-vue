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
    inputType:{
        type: String,
        required: false,
        default: "text"
    }
})

</script>

<template>
    <div class="wrapper">
        <label for="fname">First name:</label><br>
        <input :type="props.inputType" name="fname" :placeholder="props.placeholder"><br>
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

.wrapper > input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    background-color: #0a0a0a;
    border-radius: .5rem;
    border: .0625rem solid rgba(38,38,38,1);
    outline-width: 0;
    color: white;
    font-size: .875rem;
}

.wrapper > input[type=text]:focus{
    border: 1px solid black;
    border: .125rem solid #16a34a;
}

</style>