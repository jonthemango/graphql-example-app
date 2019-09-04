import { Field, Int, ObjectType } from "type-graphql";
import Edge from "./Edge";

@ObjectType()
export default class Node {

  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => [Edge])
  edges: Edge[];

  
}