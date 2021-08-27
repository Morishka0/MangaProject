import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import PreviewResolver from './src/Resolvers/PreviewResolver'
import MangaResolver from './src/Resolvers/MangaResolver'
import FiltersResolver from './src/Resolvers/FiltersResolver'

const app = express()

app.use(cors())

async function start() {
    try {
        const schema = await buildSchema({
            resolvers: [PreviewResolver, MangaResolver, FiltersResolver],
        })
        const apolloServer = new ApolloServer({ schema })
        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        mongoose.connect(
            'mongodb+srv://barghest:1234@cluster0.myy8p.mongodb.net/animeDB?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        )
        app.listen(4000, () => console.log('API'))
    } catch (e) {
        console.log(e.message)
    }
}
start()
