import React from "react";
import { TaskFormData } from "./TasksForm";
import {
  DeleteButton,
  Table,
  TableCell,
  TableHeader,
} from "../styles/StyledTasksList";

interface TaskListProps {
  tasks: TaskFormData[];
  onDelete: (taskId: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  if (tasks?.length === 0) {
    return <p>No tasks yet.</p>;
  }
  
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Title</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Action</TableHeader>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task._id}>
            <TableCell>{task?.title}</TableCell>
            <TableCell>{task?.description}</TableCell>
            <TableCell>{task?.completed.toString()}</TableCell>
            <TableCell>
              <DeleteButton onClick={() => onDelete(task._id)}>
                Delete
              </DeleteButton>
            </TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
