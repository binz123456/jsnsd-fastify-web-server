'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const { default: fastify } = require('fastify')
const { request } = require('http')
const pointOfView =require("point-of-view")
const handlebars = require("handlebars")
//we need to register the and configure the fastify-static plugin
const dev = process.env.NODE_ENV !== 'production'

// node_env is the environment variable
// we set this to deploy cod in production

const fastifyStatic = dev && require('fastify-static')


module.exports = async function (fastify, opts) {



//register the new plugin not in production
//development mode
// if(dev)
// {
//   fastify.register(fastifyStatic , {
  
//     //first argu - fastify plugin
//     //2nd - options
//     //we set the option as root that points to the folder "public"
//     // which means ask to serve files only from that folder
//     // we operate with hello.html, index.htm
//     //root is the route
    
//     root : path.join(__dirname , 'public')
//   })
// }


  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    //dir always points to plugin folder and routes folder
    options: Object.assign({}, opts)
  })



  fastify.register(pointOfView , {
    //engine option specifies name of engine
    //{ handlebars} - created an object named handlebars of handlebars
    //
    engine : { handlebars},
    root : path.join(__dirname , "views"),
    //layout template
    layout: "layout.hbs"
  })




  //setNotFoundHandler - it sia normal function
  //error handling function
  //used to inspect the incomung request
  //not get then 405
 fastify.setNotFoundHandler((request , reply) => {
   if(request.method !== 'GET'){
     reply.status(405)
     return 'method not allowes'
   }

   return 'not found'
 })






}