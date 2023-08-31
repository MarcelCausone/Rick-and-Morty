 export default function validation (userData){
    const errors = {}
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let numberRegex = /\d/

    if (!emailRegex.test(userData.email)) {
        errors.email = "Debe ser un email valido";
      }

    if(!userData.email){
        errors.email="ingrese un email";
    }

    if(userData.email.length >= 35){
        errors.email ="Demasiados caracteres";
    }

    if(!numberRegex.test(userData.password)){
      errors.password = "la contraseña debe contener un numero"
    }

    if(userData.password.length < 6 || userData.password.length > 10){
      errors.password = "la contraseña debe tener entre 6 y 10 carcateres"
    }
  return errors
}
