import { useState } from "react";
import { Form, Input, Label } from "../styles/StyledTasksForm";

export interface TaskFormData {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const TasksForm = ({ onAdd, error }: any) => {
  const [taskForm, setTaskForm] = useState({});

  const updateFormData = (e: any) => {
    setTaskForm({
      ...taskForm,
      [e.target.name]: e.target.value,
    });
  };

  const renderError = () => {
    setTimeout(() => {
    }, 5000);
    return <p style={{ color: "red" }}>{error}</p>;
  };

  return (
    <Form>
      <Label htmlFor="title">Title:</Label>
      <Input
        name="title"
        type="text"
        id="title"
        placeholder="Enter title"
        onChange={updateFormData}
      />

      <Label htmlFor="description">Description:</Label>
      <Input
        name="description"
        type="text"
        id="description"
        placeholder="Enter description"
        onChange={updateFormData}
      />

      <div className="error">{error && renderError()}</div>

      <button
        type="submit"
        onClick={(e) => {
          console.log("click");
          onAdd(e, taskForm);
        }}
      >
        Add Task
      </button>
    </Form>
  );
};
