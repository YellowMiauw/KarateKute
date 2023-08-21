const SectionSeleccionarDistraccion = document.getElementById("seleccionar-distraccion")
const buttonAnimalitoPlayer = document.getElementById("button-animalito")
const SectionReiniciar = document.getElementById("reiniciar")


const buttonReiniciar= document.getElementById("button-reiniciar")
SectionReiniciar.style.display = "none"

const SectionSeleccionarAnimalito = document.getElementById("seleccionar-animalito")


const spanAnimalitoPlayer = document.getElementById("animalito-player")


const spanAnimalitoEnemy = document.getElementById("animalito-enemy")

/*const spanVidasPlayer = document.getElementById("vidas-Player")
const spanVidasEnemy = document.getElementById("vidas-Enemy")*/

const spanVictoriasPlayer = document.getElementById("victorias-Player")
const spanVictoriasEnemy = document.getElementById("victorias-Enemy")


const sectionMensajes = document.getElementById("resultado")

const distraccionEnemigo = document.getElementById("distraccion-Enemigo")
const distraccionJugador = document.getElementById("distraccion-Jugador")

const ContenedorTarjetas = document.getElementById("ContenedorTarjetas")
const contenedorDistracciones = document.getElementById("contenedorDistracciones")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let Mascotas = []
let MascotasEnemigas = []

let DistraccionEnemy = []   // ¿que van a elegir? no lo sabemos //
let DistraccionPlayer = []  

let opcionDeMascotas
let inputMemrisa
let inputFalou 
let inputChian 

let inputRoo
let inputLeno
let inputPatuki

let VidasPlayer = 3      // varian por que depende de lo que elija el humano y por eso se quedan como let//
let VidasEnemy = 3

let MascotaJugador
let MascotaJugadorObjeto



let distraccionesMascota
let buttonLuz
let buttonAgua
let buttonBrisa

let buttones = []

let DistraccionesMascotasEnemigo

let indexDistraccionPlayer 
let indexDistraccionEnemy 

let VictoriasEnemy = 0
let VictoriasPlayer = 0

let jugadorId = null
let EnemyId = null

let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = "./assets/mapa1.jpg"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 50
const anchoMaximoDelMapa = 600 

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 50
}

if (anchoDelMapa < 360) {
    anchoDelMapa = 360 
}

alturaQueBuscamos = anchoDelMapa * 350 / 400

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos 

class Mascota {
    constructor(nombre, imagen, vida, x =1 , y=1, id=null ) {
        this.nombre= nombre
        this.imagen= imagen
        this.vida= vida
        this.distracciones = []
        this.x = x         /*  aleatorio(0, mapa.width - this.ancho) */
        this.y = y      /* aleatorio(0, mapa.height - this.alto) */
        this.ancho = mapa.width / 6.875
        this.alto = mapa.height / 6.875
        this.mapaFoto = new Image()
        this.mapaFoto.src = imagen
        this.velocidadX = 0
        this.velocidadY = 0
        this.id = id
    }
    
   
    
    
    
    pintarMascota() {
        
        lienzo.drawImage(
            this.mapaFoto,
            this.x + 45,
            this.y + 45 ,
            this.ancho,
            this.alto
        )
    
    }

  
    
}


let Memrisa = new Mascota("Memrisa", "./assets/Mem.png" , 5, 180, 90 )

let Falou = new Mascota("Falou", "./assets/fal.png" , 5 , -10 , 210)

let Chian = new Mascota("Chian", "./assets/china.png" , 5, 300, 10)

let Roo = new Mascota("Roo", "./assets/Roo.png" , 5, -40 , 300)

let Leno = new Mascota("Leno", "./assets/Leno.png " , 5 , 70, 90)

let Patuki = new Mascota("Patuki", "./assets/Patuki.png " , 5, 220, 280)



const MEMRISA_DISTRACCIONES = [
    {nombre: "🌊" , id: "button-Agua"},
    {nombre: "🌊" , id: "button-Agua"},
    {nombre: "🌊" , id: "button-Agua"},
    {nombre: "🍃" , id: "button-Brisa"},
    {nombre: "☀️" , id: "button-Luz"}
]

Memrisa.distracciones.push (...MEMRISA_DISTRACCIONES)

const FALOU_DISTRACCIONES =[

    {nombre: "🍃" , id: "button-Brisa"} ,
    {nombre: "🍃" , id: "button-Brisa"} ,
    {nombre: "🍃" , id: "button-Brisa"} ,
    {nombre: "☀️" , id: "button-Luz"} ,
    {nombre: "🌊" , id: "button-Agua"}
]
    
Falou.distracciones.push (...FALOU_DISTRACCIONES)

const CHIAN_DISTRACCIONES = [
      
    {nombre: "☀️" , id: "button-Luz"},
    {nombre: "☀️" , id: "button-Luz"},
    {nombre: "☀️" , id: "button-Luz"},
    {nombre: "🍃" , id: "button-Brisa"},
    {nombre: "🌊" , id: "button-Agua"}
    
]
        
Chian.distracciones.push (...CHIAN_DISTRACCIONES)

const ROO_DISTRACCIONES = [
    {nombre: "🍃" , id: "button-Brisa"},
    {nombre: "🌊" , id: "button-Agua"},
    {nombre: "☀️" , id: "button-Luz"},
    {nombre: "🍃" , id: "button-Brisa"},
    {nombre: "🌊" , id: "button-Agua"}
    
]

Roo.distracciones.push (...ROO_DISTRACCIONES)

const LENO_DISTRACCIONES = [
           
    {nombre: "🌊" , id: "button-Agua"},
    {nombre: "☀️" , id: "button-Luz"},
    {nombre: "☀️" , id: "button-Luz"},
    {nombre: "🍃" , id: "button-Brisa"},
    {nombre: "🌊" , id: "button-Agua"}
    
]
Leno.distracciones.push (...LENO_DISTRACCIONES)

const PATUKI_DISTRACCIONES = [ 
        
    {nombre: "☀️" , id: "button-Luz"},
    {nombre: "🍃" , id: "button-Brisa"},
    {nombre: "☀️" , id: "button-Luz"},
    {nombre: "🍃" , id: "button-Brisa"},
    {nombre: "🌊" , id: "button-Agua"}

]
    
Patuki.distracciones.push (...PATUKI_DISTRACCIONES)
     
Mascotas.push(Memrisa,Falou,Chian,Roo,Leno,Patuki)
        

function Start () {
    
    SectionSeleccionarDistraccion.style.display = "none"
    sectionVerMapa.style.display = "none"
    
    Mascotas.forEach((Mascota) => {
        opcionDeMascotas = `
        <input type="radio" nombre = "animalito" id=${Mascota.nombre} /> 
        <label class = "tarjeta-animalito" for=${Mascota.nombre}>
        <p>${Mascota.nombre}</p>
        <img src=${Mascota.imagen} alt=${Mascota.nombre}>
        </label> `
        
        ContenedorTarjetas.innerHTML += opcionDeMascotas
        
        inputMemrisa = document.getElementById("Memrisa")
        inputFalou = document.getElementById("Falou")
        inputChian = document.getElementById("Chian")
        inputRoo = document.getElementById("Roo")
        inputLeno = document.getElementById("Leno")
        inputPatuki = document.getElementById("Patuki")
        
        /* console.log(Mascota.distracciones)  */
    })
    

    
    buttonAnimalitoPlayer .addEventListener("click", seleccionarAnimlitoPlayer)
    
    
    buttonReiniciar .addEventListener("click", ReiniciarJuego)
    
    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://192.168.0.107:8080/unirse")
     .then (function (res){
        if (res.ok) {
            res.text()
            .then(function (respuesta) {
                console.log(respuesta)
                jugadorId = respuesta
            })
        }
    })
}



function seleccionarAnimlitoPlayer() {
    
    
    if(inputMemrisa.checked) {
        spanAnimalitoPlayer.innerHTML = inputMemrisa.id
        MascotaJugador = inputMemrisa.id
    } else if(inputFalou.checked) {
        spanAnimalitoPlayer.innerHTML = inputFalou.id
        MascotaJugador = inputFalou.id
    } else if(inputChian.checked) {
        MascotaJugador = inputChian.id
        spanAnimalitoPlayer.innerHTML = inputChian.id
    } else if(inputRoo.checked) {
        MascotaJugador = inputRoo.id
        spanAnimalitoPlayer.innerHTML = inputRoo.id
    } else if(inputLeno.checked) {
        MascotaJugador = inputLeno.id
        spanAnimalitoPlayer.innerHTML = inputLeno.id
    } else if(inputPatuki.checked) {
        MascotaJugador = inputPatuki.id
        spanAnimalitoPlayer.innerHTML = inputPatuki.id
    }
    
    else {alert ("Debes seleccionar un animalito")
    return
    }

    SectionSeleccionarAnimalito.style.display = "none"
    
    seleccionarMascota(MascotaJugador)

    extraerDistracciones (MascotaJugador)
    sectionVerMapa.style.display= "flex"
    iniciarMapa()   
    
}

function seleccionarMascota(MascotaJugador) {
    fetch(`http://192.168.0.107:8080/mascota/${jugadorId}`,{
        method:"post" ,
        headers: {
            "Content-Type": "application/json"
        } ,
        body:JSON.stringify ({
            mascota: MascotaJugador
        })
    })
}

function extraerDistracciones(MascotaJugador) {
    
    let distracciones
    for (let i = 0; i < Mascotas.length; i++) {
        if (MascotaJugador === Mascotas[i].nombre) {
            distracciones = Mascotas[i].distracciones;
        }
    }

    
    
    mostrarDistracciones(distracciones)
    
}

function mostrarDistracciones (distracciones) {
    
    distracciones.forEach((distraccion) => {
        distraccionesMascota = ` 
        <button id=${distraccion.id} class="boton-distraccion BDistraccion">${distraccion.nombre}</button>
        `
        contenedorDistracciones.innerHTML += distraccionesMascota
        
        
    })
    
    buttonLuz = document.getElementById("button-Luz")
    buttonAgua = document.getElementById("button-Agua")
    buttonBrisa = document.getElementById("button-Brisa")
    
    buttones = document.querySelectorAll(".BDistraccion")
    
    
}

function secuenciaDistraccion() {
    buttones.forEach ((button) => {
        button.addEventListener("click" , (e)=> {
            if (e.target.textContent === "☀️"){
                DistraccionPlayer.push("LUZ")
                console.log(DistraccionPlayer)
                button.style.background = "#112f58"
                button.disabled= true
            }

            else if (e.target.textContent === "🌊"){
            DistraccionPlayer.push("AGUA")
            console.log(DistraccionPlayer)
            button.style.background = "#112f58 "
            button.disabled= true
        }
        
        else {
            DistraccionPlayer.push("BRISA")
            console.log(DistraccionPlayer)
            button.style.background = "#112f58"
            button.disabled= true
        }
        if(DistraccionPlayer.length === 5) {
            enviarDistracciones()
        }
        
        
    })
})


}

function  enviarDistracciones() {
    fetch(`http://192.168.0.107:8080/mascota/${jugadorId}/distracciones`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            distracciones: DistraccionPlayer
        })

    })
    intervalo = setInterval(obtenerDistracciones, 50)
}

function obtenerDistracciones() {
    fetch(`http://192.168.0.107:8080/mascota/${EnemyId}/distracciones`)
        .then(function(res){
            if(res.ok) {
                res.json()
                 .then(function({distracciones}){
                    if(distracciones.length === 5) {
                        DistraccionEnemy = distracciones
                        combate()
                    }
                 })
            }
        })
}

function seleccionarAnimalitoEnemy(Enemy) {
    /* let Aaleatorio = aleatorio(0,Mascotas.length -1) */
    
    spanAnimalitoEnemy.innerHTML= Enemy.nombre
    DistraccionesMascotasEnemigo= Enemy.distracciones
    secuenciaDistraccion()
    
} 

    
    

/* function DistraccionAleatoriaEnemy() {
    console.log("distraccion enemigo" , DistraccionesMascotasEnemigo )
    let DistraccionAleatoria = aleatorio(0, DistraccionesMascotasEnemigo.length -1)
    
    if (DistraccionAleatoria == 1 || DistraccionAleatoria == 3) {
        DistraccionEnemy.push("LUZ")
    } else if (DistraccionAleatoria == 2 || DistraccionAleatoria == 4 )  {
        DistraccionEnemy.push("AGUA")
    } else {
        DistraccionEnemy.push("BRISA")
    }
    console.log(DistraccionEnemy)
    iniciarCombate()//combate()
}

function iniciarCombate() {
    if (DistraccionPlayer.length === 5) {
        combate()
    }
} */

function indexAmbosOponentes( Player, Enemy) {
    indexDistraccionPlayer = DistraccionPlayer[Player]
    indexDistraccionEnemy = DistraccionEnemy[Enemy]
}


function combate() {
    clearInterval(intervalo)
    console.log('COMBATE')

    for (let index = 0; index < DistraccionPlayer.length; index++) {
        if(DistraccionPlayer[index] === DistraccionEnemy[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("Empate 🤷" )  
            
        }
        
        else if(DistraccionPlayer[index] === "LUZ" && DistraccionEnemy[index] === "AGUA") {
            indexAmbosOponentes(index, index)
            VictoriasEnemy++
            spanVictoriasEnemy.innerHTML= VictoriasEnemy
            crearMensaje("Ash Perdiste 😮‍💨 " )  
            
          
            
        }
        
        else if(DistraccionPlayer[index] === "AGUA" && DistraccionEnemy[index]=== "BRISA" ) {
            indexAmbosOponentes(index, index)
            VictoriasEnemy++
            spanVictoriasEnemy.innerHTML= VictoriasEnemy 
            crearMensaje("Ash Perdiste 😮‍💨 " )  
            
        }
        
        else if(DistraccionPlayer[index] === "BRISA" && DistraccionEnemy[index]=== "LUZ" ) {
            indexAmbosOponentes(index, index)
            VictoriasEnemy++
            spanVictoriasEnemy.innerHTML= VictoriasEnemy
            crearMensaje("Ash Perdiste 😮‍💨 " )  
            
        }
        
        
        else{
            indexAmbosOponentes(index, index)
            VictoriasPlayer++
            spanVictoriasPlayer.innerHTML = VictoriasPlayer
            crearMensaje("Yuju! ganaste 🥳" )  
            
            
        }
        
    }  
    contarVictorias() 
}




function contarVictorias() {
    if(VictoriasEnemy < VictoriasPlayer) {
        crearMensajeFinal("Bravo - GANASTE:D ")
    }
    else if (VictoriasEnemy > VictoriasPlayer) {
        crearMensajeFinal ("Paila  -PERDISTE :/")
    }

    else  {
        crearMensajeFinal ("Meh -EMPATE :|")
    }
}



function crearMensaje (resultado) {
    
    
    
    
    let nuevaDistraccionDelEnemigo = document.createElement("p")
    let nuevaDistraccionDelJugador = document.createElement("p")
    
    
    sectionMensajes.innerHTML = resultado
    nuevaDistraccionDelEnemigo.innerHTML = indexDistraccionEnemy
    nuevaDistraccionDelJugador.innerHTML = indexDistraccionPlayer
    
    
    // let parrafo = document.createElement("p")
    // parrafo.innerHTML = "Tu animalito arrojó " + DistraccionPlayer + ", el animalito del enemigo arrojó "  + DistraccionEnemy + " - " + Resultado
    
    
    distraccionEnemigo.appendChild(nuevaDistraccionDelEnemigo)
    distraccionJugador.appendChild(nuevaDistraccionDelJugador)
    
} 

function crearMensajeFinal (ResultadoFinal) {
    
    
    
    sectionMensajes.innerHTML = ResultadoFinal
    
    
    
    

    SectionReiniciar.style.display = "block"
} 

function ReiniciarJuego() {
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max -min + 1)+min)
}

function pintarCanvas() {
    
    MascotaJugadorObjeto.x = MascotaJugadorObjeto.x + MascotaJugadorObjeto.velocidadX
    MascotaJugadorObjeto.y = MascotaJugadorObjeto.y + MascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width , mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    MascotaJugadorObjeto.pintarMascota()
   
    enviarPosicion(MascotaJugadorObjeto.x , MascotaJugadorObjeto.y)
      
    MascotasEnemigas.forEach(function (mascota){
        if(mascota != undefined){
        mascota.pintarMascota()
        revisarColision(mascota)
        }
    })

}
    

function enviarPosicion(x,y) {
    fetch(`http://192.168.0.107:8080/mascota/${jugadorId}/posicion`, {
        method: "post" ,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
       
    })
    .then(function(res) {
       if (res.ok) {
          res.json()
            .then(function ({enemigos}){
                console.log (enemigos)
                MascotasEnemigas = enemigos.map(function(Enemy) {
                    let mascotaEnemigo = null
                    if(Enemy.mascota != undefined) {
                    const mascotaNombre = Enemy.mascota.nombre || ""
                    if (mascotaNombre === "Memrisa") {
                        mascotaEnemigo = new Mascota ("Memrisa", "./assets/Mem.png" , 5 ,90 , 180 , Enemy.id )
  
                    } else if (mascotaNombre === "Falou"){
                        mascotaEnemigo = new Mascota ("Falou", "./assets/fal.png" , 5 , 210 , -10 , Enemy.id )

                    } else if (mascotaNombre === "Chian") {
                        mascotaEnemigo = new Mascota ("Chian", "./assets/china.png" , 5 , 10 , 300 , Enemy.id)

                    } else if (mascotaNombre === "Roo") {
                        mascotaEnemigo = new Mascota ("Roo", "./assets/Roo.png" , 5 , 300 , -40 , Enemy.id)
 
                    } else if (mascotaNombre === "Leno") {
                        mascotaEnemigo = new Mascota ("Leno", "./assets/Leno.png " , 5 , 90 , 70 , Enemy.id)

                    } else if (mascotaNombre === "Patuki") {
                        mascotaEnemigo = new Mascota ("Patuki", "./assets/Patuki.png " , 5 ,280 , 220, Enemy.id)

                    }

                    mascotaEnemigo.x = Enemy.x
                    mascotaEnemigo.y = Enemy.y
                    }
                   return mascotaEnemigo
                }) 

            })
       }
    })
}


    
function moverDerecha(){
    MascotaJugadorObjeto.velocidadX = 5
}
   
function moverIzquierda(){
    MascotaJugadorObjeto.velocidadX = -5  
    
}

function moverArriba(){
    MascotaJugadorObjeto.velocidadY = -5
    
}

function moverAbajo(){
    MascotaJugadorObjeto.velocidadY = 5
    
}

function detenerMovimiento() {
    MascotaJugadorObjeto.velocidadX = 0
    MascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch(event.key) {
    case "ArrowUp" :
        moverArriba()
        break
        case "ArrowDown" :
            moverAbajo()
            break
            case "ArrowLeft" :
        moverIzquierda()
        break
        case "ArrowRight" :
            moverDerecha()
            break 
            default:
                break   
            }
        }
        
function iniciarMapa() {
    
   /*  mapa.width = 500
    mapa.height = 450  */
    
    MascotaJugadorObjeto= obtenerObjetoMascota(MascotaJugador)
    console.log(MascotaJugadorObjeto , MascotaJugador);
    
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener("keydown" , sePresionoUnaTecla)
    
    window.addEventListener("keyup" , detenerMovimiento) 
}

function obtenerObjetoMascota(){
    for (let i = 0; i < Mascotas.length; i++) {
        if (MascotaJugador === Mascotas[i].nombre) {
            return Mascotas[i]
        }
    }

}

function revisarColision(Enemy) {
    const arribaEnemy = Enemy.y
    const abajoEnemy = Enemy.y + Enemy.alto
    const derechaEnemy = Enemy.x + Enemy.ancho
    const izquierdaEnemy =Enemy.x

    const arribaMascota = 
        MascotaJugadorObjeto.y
    const abajoMascota =
         MascotaJugadorObjeto.y + MascotaJugadorObjeto.alto
    const derechaMascota = 
        MascotaJugadorObjeto.x + MascotaJugadorObjeto.ancho
    const izquierdaMascota =
        MascotaJugadorObjeto.x


    if(
       abajoMascota < arribaEnemy ||
       arribaMascota > abajoEnemy ||
       derechaMascota < izquierdaEnemy ||
       izquierdaMascota > derechaEnemy

    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("Se detecto una colision");

    EnemyId= Enemy.id
    SectionSeleccionarDistraccion.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarAnimalitoEnemy(Enemy)
    /* alert("hay una colision con " + Enemy.nombre) */
}
        
window.addEventListener("load", Start)
