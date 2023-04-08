const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const app = express();
const port = 3000;

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: {  
                type: GraphQLString,
                resolve: () => 'HelloWorld'
            }
        })  
    })

});


app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiqi: true,
 }))



// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     }
// );


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

