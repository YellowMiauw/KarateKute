const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.static("public"))
app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }

    asignarMascota(mascota) {
        this.mascota = mascota
    }

    actualizarPosicion(x,y){
        this.x = x
        this.y = y
    }

    asignarDistracciones(distracciones) {
        this.distracciones = distracciones    
    }
}

class Mascota {
    constructor(nombre) {
        this.nombre = nombre
    }
}

app.get("/unirse" , (req, res) => {
    const id = `${Math.random ()}`
    
    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")
    
    res.send(id)
})

app.post("/mascota/:jugadorId",(req,res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mascota || ""
    const mascota = new Mascota(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMascota(mascota)
    }
    
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mascota/:jugadorId/posicion" , (req,res) => {
    const jugadorId = req.params.jugadorId || ""
    const x =req.body.x || 0
    const y =req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)
 
    res.send({
        enemigos
    }) 

})

app.post("/mascota/:jugadorId/distracciones",(req,res) => {
    const jugadorId = req.params.jugadorId || ""
    const distracciones = req.body.distracciones || []
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarDistracciones(distracciones)
    }
   
    res.end()
})

app.get("/mascota/:jugadorId/distracciones",(req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        distracciones: jugador.distracciones || []
    })
})

app.listen(8080, () => {
    console.log ("servidor funcionando")

})