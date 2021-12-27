// 'use strict'

// //when we change this exmaple to hello , route aslo changes
// //

// module.exports = async function (fastify, opts) {

//   //using fasyify registers GET route
//   fastify.get('/', async function (request, reply) {
//     return 'this is an example'
//   })
// }
  module.exports = async(fastify , opts) => {
    fastify.get("/" , async (request , reply) => {
      const { greeting = " Hello" } = request.query

      // secnd argumnt of reply.view method is object
      //hello.hbs contains greeeting template
      //we pass object witha property called greeting
      //there default vallue "hello"
      //
      return reply.view('hello.hbs'  , { greeting})
    })
  }