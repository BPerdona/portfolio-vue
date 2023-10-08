<script setup>
import AppInput from '../components/AppInput.vue'
import AppButton from '../components/AppButton.vue'
import {ref, watch, onMounted} from 'vue'
import {auth} from '../firebase/init.js'
import {validateEmail, validatePassword} from '../utils/validations.js'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import router from '../router'

const email = ref('')
const isEmailValid = ref(true)

const password = ref('')
const isPasswordValid = ref(true)

const loginErrorMessage = ref('')

async function logInUser(){
  if(!formIsValid()){
    loginErrorMessage.value = "Preencha o login corretamente."
    return
  }

  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((credential)=>{
    saveToken(credential)
    router.push("/playground")
  })
  .catch((error)=>{
    loginErrorMessage.value = "Dados de login inválidos."
  })
}

onMounted(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      router.push('/playground')
    }
  })
});


async function registerUser(){
  if(!formIsValid()){
    loginErrorMessage.value = "Preencha o login corretamente."
    return
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((credential)=>{
    saveToken(credential)
    router.push("/playground")
  })
  .catch((error)=>{
    loginErrorMessage.value = "Dados de login inválidos."
  })
}

function saveToken(credential){
    localStorage.setItem('email', credential.user.email)
}

function formIsValid(){
  if(isEmailValid && isPasswordValid && (email.value.length > 0) && (password.value.length > 7))
    return true
  return false
}


watch(email, (newEmail)=>{
  isEmailValid.value = validateEmail(newEmail)
})

watch(password, (newPassword)=>{
  isPasswordValid.value = validatePassword(newPassword)
})

</script>

<template>
  <div class="mobile-header">
    <RouterLink to="/">
      <font-awesome-icon
        icon="fa-solid fa-arrow-left"
        size="2x"
        color="white" 
      />
    </RouterLink>
  </div>
  <div class="playground-container">
    <div class="side-page">
      <img 
        src="/Logo.png" 
        alt="Bruno Perdona logo"
        @click="()=>{router.push('/')}"
      >
    </div>
    <div class="login-form">
      <h1>Login</h1>
      <AppInput
        input-type="text"
        v-model="email"
        label="Email"
        placeholder="example@mail.com"
        :input-is-valid="isEmailValid"
      />
      <AppInput
        input-type="password"
        v-model="password"
        label="Password"
        :input-is-valid="isPasswordValid"
      />
      <div class="button-wrapper">
        <AppButton
          text="Register"
          :on-click-event="registerUser"
        />
        <AppButton
          text="Login"
          :on-click-event="logInUser"
        />
      </div>
      <p class="form-error" v-show="loginErrorMessage">{{ loginErrorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>

.mobile-header{
  display: none;
  height: 5vh;

  background-color: #0a0a0a;
}

.playground-container{
  background-color: #171717;
  display: flex;
  justify-items: center;
  align-items: center;
}

.side-page{
  flex-basis: 60%;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.side-page > img{
  cursor: pointer;
}

.login-form{
  flex-basis: 40%;
  align-self: center;
  justify-self: center;
  height: 100%;

  margin: 1rem;
  padding: 3rem;
  border-radius: 0.75rem;
  background-color: #262626;
}

.login-form > h1{
  color: white;
  font-size: 3rem;
  text-align: center;
  padding-bottom: 4rem;
}

.button-wrapper{
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-between;

  padding-top: 2rem;
}

.form-error{
  padding-top: 2rem;
  color: red;
}

@media (max-width: 1024px) {
  .side-page{
    display: none;
  }
  
  .login-form{
    flex-basis: 100%;
    height: auto;
    padding: 1.5rem;
  }
  .playground-container{
    height: 95vh;
    padding: 1rem;
  }

  .mobile-header{
    display: flex;

    justify-items: center;
    align-items: center;
    padding-left: 1rem;
  }
}

</style>