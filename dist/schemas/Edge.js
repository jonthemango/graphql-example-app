"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Node_1 = require("./Node");
let Edge = class Edge {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Edge.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Edge.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(type => Node_1.default),
    __metadata("design:type", Node_1.default)
], Edge.prototype, "from_node", void 0);
__decorate([
    type_graphql_1.Field(type => Node_1.default),
    __metadata("design:type", Node_1.default)
], Edge.prototype, "to_node", void 0);
Edge = __decorate([
    type_graphql_1.ObjectType()
], Edge);
exports.default = Edge;
//# sourceMappingURL=Edge.js.map