
const hnLatestStream = require ('hn-latest-stream')

//hnLatestStream - accepts  2 parameters
//this plugin ,loads different articles - total 10 articles
//hacker news api is used to fertch the data
//all this is done by package hn-latest-stream


//HOW TO USE STREAMS USING FASTIFY

module.exports = async( fastify , opts ) => {
    fastify.get("/" , async (request , reply) => {
        //defaulted to 10 and html
        const { amount = 12 , type = 'html'} = request.query

        //we set the correct content- type HTTP header for the content

        if ( type === 'html') reply.type('text/html')
        if( type === 'json') reply.type('application/json')
        return hnLatestStream( amount , type)
    })
}