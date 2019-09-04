import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { nodes, EdgeData, edges } from "../data";
import Edge from "../schemas/Node";

@Resolver(of => Edge)
export default class {
    @Query(returns => [Edge], { nullable: true })
    fetchEdges(): EdgeData[] {
        return edges;
    }

    // @FieldResolver()
    // to_node(@Root() edgeData: EdgeData) {
    //     return nodes.find(node => {
    //         return node.id === edgeData.to_id;
    //     });
    // }

    // @FieldResolver()
    // from_node(@Root() edgeData: EdgeData) {
    //     return nodes.find(node => {
    //         return node.id === edgeData.from_id;
    //     });
    // }
}