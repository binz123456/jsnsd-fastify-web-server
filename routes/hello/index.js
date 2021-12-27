// const root = require("../root")

const { default: fastify } = require("fastify");

// const hello = `<html>
// <head>
// <style>
// body { background: #333; margin: 1.25rem }
// h1 { color: #EEE; font-family: sans-serif }
// </style>
// </head>
// <body>
// <h1>Helloooooooo</h1>
// </body>
// </html>
// `

// module.exports = async function (fastify , opts){
//     fastify.get("/" , async function(request , reply){
//         reply.type("text/html")
//         return hello
//     })
// }



// // we register a GEt route here
// module.exports = async (fastify , opts) => {
//     fastify.get("/" , async (request , reply) => {
//         return reply.sendFile("hello.html")
//     })

// }

module.exports = async (fastify , opts) => {
    fastify.get("/" , async (request , reply) => {
        const { greeting = " Hello" } = request.query
        return reply.view( "hello.hbs"  , { greeting })
    })
}