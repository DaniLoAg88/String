window.onload = function() { //CUANDO LA PÁGINA SE CARGUE EJECUTA LA FUNCIÓN
    let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; //Es una cadena y la también comienza desde 0
    let contador = 5;

    let letraAleatoria = parseInt(Math.random() * 27);
    console.log(abecedario.charAt(letraAleatoria)); //chartAt nos da el caracter de la posición que le pasemos


    document.querySelector("#boton").addEventListener("click", ()=>{
        //Recogemos el valor introducido por el user
        let letraUser = document.querySelector("#letra").value; 
        let salida = document.querySelector("#salida");
        salida.innerHTML = "";

        //PODEMOS USAR UN TERNARIO:
        //letraUser.toUpperCase() == abecedario.charAt(letraAleatoria)?salida.innerHTML = "Correcto" : salida.innerHTML = "No es correcto";
        //O UN if CLÁSICO:
        if(letraUser.toUpperCase() == abecedario.charAt(letraAleatoria)){
            salida.innerHTML = "Correcto";
        } else{
            salida.innerHTML = "No es correcto";
            contador--;
        }
    
        document.querySelector("#contador").innerHTML = "Intentos restantes -> " + contador;

        if (contador == 0) {
            salida.innerHTML = "Has perdido!";
            document.querySelector("#letra").setAttribute("disabled", "true");
            document.querySelector("#boton").setAttribute("disabled", "true");
        }
    })


    //**** PROBANDO MÉTODOS ****
    //Los String tienen MÉTODOS definidos
    console.log(abecedario.length); //length nos da la cantidad de caracteres
    
    console.log(abecedario.charAt(letraAleatoria)); //chartAt nos da el caracter de la posición que le pasemos

    console.log(abecedario.indexOf("F")); //Devuelve la posición del primer caracter que encuentre(De izq a drch)
    console.log(abecedario.lastIndexOf("F")); //Devuelve la posición del último caracter que encuentre(De drch a izq)

    console.log(abecedario.endsWith("XYZ")); //Devuelve true si el texto finaliza con lo buscado
    console.log(abecedario.startsWith("ABC")); //Devuelve true si el texto empieza con lo buscado

    let telefonos = ["654236874","621489324","926478234","654268726"];
    for(let i = 0; i < telefonos.length; i++){
        if (telefonos[i].startsWith("926")){
            console.log("El teléfono " + telefonos[i] + " es de Ciudad Real");
        } else if(telefonos[i].startsWith("6")){
            console.log("El teléfono " + telefonos[i] + " es un móvil");
        }
    }


    let apellido = "Mendez";
    apellido.replace("Mendez","López"); //Replace sustituye el texto primero por el segundo dentro del String
    console.log(apellido);
    //¡OJO! No lo sustituye en la variable
    //Si queremos que la variable cambie el valor hay que asignarlo
    apellido = apellido.replace("Mendez","López"); //Replace sustituye el texto primero por el segundo dentro del String. ¡OJO! No lo sustituye en la variable
    console.log(apellido);


    let nombre = " María ";
    let nuevoNombre = nombre.trim(); //Elimina los espacios del principio y del final
    //¡OJO! No lo sustituye en la variable
    console.log(nombre);
    console.log(nuevoNombre);


    console.log(apellido.slice(0,3));//Extrae los caracteres desde la posicion que le pones primero hasta la posición que le pones después.
    //¡OJO! La primera posición la incluye en la extracción, pero no la segunda posición (se queda en el anterior)

    apellido = apellido.toLowerCase();
    console.log(apellido);

    console.log(apellido.substring(0,1).toUpperCase() + apellido.substring(1)); /**Extrae
        un string desde la posición que ponemos en el primer dígito, y coge el número
        de caracteres que le decimos en la segunda posición*/
        //Aquí hemos cogido en primer lugar, 1 caracter desde la posición 0
        //En segundo lugar sólo indicamos un número, que será desde que posición empezamos a extraer, pero lo haría hasta el final


    let paises = "España-Francia-Italia-Portugal-Alemania"
    let todosPaises = paises.split("-"); //Rompe un String teniendo en cuenta el delimitador que le pasamos y construye un Array con las palabras que quedan
    console.log(todosPaises);


}