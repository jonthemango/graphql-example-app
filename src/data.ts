// src/data.ts

export interface ProjectData {
    id: number;
    name: string;
}

export interface TaskData {
    id: number;
    title: string;
    completed: boolean;
    project_id: number;
}

export interface NodeData {
    id: number;
    name: string;
}

export interface EdgeData {
    id: number;
    name: string;
    from_id: number,
    to_id: number
}

export const nodes: NodeData[] = [
    { id: 1, name: "A"},
    { id: 2, name: "B" },
    { id: 3, name: "C"},
    { id: 4, name: "D"},
    { id: 5, name: "E" },
    { id: 6, name: "F" },
    { id: 7, name: "G" },
    { id: 8, name: "H" },
    { id: 9, name: "I" },
    { id: 10, name: "J" },
    { id: 11, name: "K" },
    { id: 12, name: "L" }
];

export const edges: EdgeData[] = [
    {id: 1, name: "A->B", from_id: 1, to_id: 2}
];


export const projects: ProjectData[] = [
    { id: 1, name: "Learn React Native" },
    { id: 2, name: "Workout" },
];

export const tasks: TaskData[] = [
    { id: 1, title: "Install Node", completed: true, project_id: 1 },
    { id: 2, title: "Install React Native CLI:", completed: false, project_id: 1 },
    { id: 3, title: "Install Xcode", completed: false, project_id: 1 },
    { id: 4, title: "Morning Jog", completed: true, project_id: 2 },
    { id: 5, title: "Visit the gym", completed: true, project_id: 2 },
];