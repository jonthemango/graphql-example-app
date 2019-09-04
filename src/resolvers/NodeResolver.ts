import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { nodes, edges, NodeData } from "../data";
import Node from "../schemas/Node";

@Resolver(of => Node)
export default class {
  @Query(returns => [Node], {nullable: true})
  fetchNodes(): NodeData[] {
    return nodes;
  }
  
  @Query(returns => Node, { nullable: true })
  getNodeByName(@Arg("name") name: string): NodeData | undefined {
    return nodes.find(node => node.name === name);
  }

  @FieldResolver()
  edges(@Root() node: NodeData) {
    return edges.filter(edge => {
      return edge.to_id === node.id || edge.from_id === node.id;
    });
  }

}