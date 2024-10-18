
// while(decision){
    //     console.log('Decidiste volver a entrar al bucle!')
    
    //     decision = confirm('Seguir en el bucle')
    // }
    





let decision = confirm("Seguir en el bucle")

do {
  console.log("Decidiste volver a entrar al bucle! al menos ingreso una vez")
  decision = confirm("Seguir en el bucle")

} while (decision)

console.log("Ya estamos afuera del bucle")