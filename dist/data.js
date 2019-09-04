"use strict";
// src/data.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodes = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
    { id: 7, name: "G" },
    { id: 8, name: "H" },
    { id: 9, name: "I" },
    { id: 10, name: "J" },
    { id: 11, name: "K" },
    { id: 12, name: "L" }
];
exports.edges = [
    { id: 1, name: "A->B", from_id: 1, to_id: 2 }
];
exports.projects = [
    { id: 1, name: "Learn React Native" },
    { id: 2, name: "Workout" },
];
exports.tasks = [
    { id: 1, title: "Install Node", completed: true, project_id: 1 },
    { id: 2, title: "Install React Native CLI:", completed: false, project_id: 1 },
    { id: 3, title: "Install Xcode", completed: false, project_id: 1 },
    { id: 4, title: "Morning Jog", completed: true, project_id: 2 },
    { id: 5, title: "Visit the gym", completed: true, project_id: 2 },
];
//# sourceMappingURL=data.js.map