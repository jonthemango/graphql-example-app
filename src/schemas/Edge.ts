import { Field, Int, ObjectType } from "type-graphql";
import Node from "./Node";

@ObjectType()
export default class Edge {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Node)
  from_node: Node;
  
  @Field(type => Node)
  to_node: Node;
}