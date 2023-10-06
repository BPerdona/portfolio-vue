function validateEmail(email){
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

function validatePassword(pwd){
  if(pwd.length >= 8){
    return true
  }else{
    return false
  }
}

export {validateEmail, validatePassword}