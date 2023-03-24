import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="flex flex-col gap-1 mx-auto justify-center items-center bg-gray-800 text-white p-4 rounded-md relative mb-2"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-white">Crea tu tarea</h2>
        <input
          className="bg-gray-500 rounded-md p-1 w-full"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-gray-500 rounded-md p-1 w-full"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
