import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";
import NodeResolver from "./resolvers/NodeResolver";
import EdgeResolver from "./resolvers/EdgeResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [ProjectResolver, TaskResolver, NodeResolver, EdgeResolver],
        emitSchemaFile: true,
    });

    const server = new GraphQLServer({
        schema,
    });

    server.start(() => console.log("Server is running on http://localhost:4000"));
    
}
try{
    bootstrap();
} catch (e){
    console.log(e)
}
