export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string | Date; //video showed just string
    isCompleted: boolean;
    priority: "high" | "medium" | "low";
    assignedTo: string | null; //assigned to te keu thakteo pare, nao pare
}

export interface IUser {
    id: string,
    name: string
}