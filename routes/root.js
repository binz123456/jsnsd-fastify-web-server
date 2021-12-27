// 'use strict'

const { default: fastify } = require("fastify");



// const root = `<html>
// <head>
// <style>
// body { background: #333; margin: 1.25rem }
// a { color: yellow; font-size: 2rem; font-family: sans-serif }
// </style>
// </head>
// <body>
// <a href ="/hello">Hello</a>
// </body>
// </html>
// `



// //takes fastify instance and options parameter
// //root.js module exports Fastify plugin
// //fastify is the server instance
// module.exports = async function (fastify, opts) {




//   //using server instance we call HTTP GET route
//   //First argument is string
//   //"/" is the root route
//   //using fastify rest all http methods can be called


//   //second argument- async function 
//   //route handler having re, reply objects
//   fastify.get('/', async function (request, reply) {

//     //content type header to text/html
//     reply.type('text/html')
//     return root


//     //reply.send ({ root: true }) can also be used
//     // return { root: true }
//   })
// }


 // we defines the route handler here

//point -of -view plugin first goes to index.hbs and insert the output into layout.hbs 
//sends combined output of both files as response

//on loading loacal host , control first flows to index.hbs

module.exports = async (fastify , opts) => {
    fastify.get("/" , async (request , reply) => {

        // we modify reply object
        //call view method
        //pass the file in views folder
        //it will look for that file in views folder
        return reply.view("index.hbs"    )
    })
}  