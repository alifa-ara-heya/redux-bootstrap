import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks); //state, todo comes from store.ts, tasks come from taskSlice.ts , so the reducer name will be appended with state
  console.log(tasks);
  // const filter = useAppSelector(selectFilter);
  // console.log(filter);

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {/*  <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard /> */}
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
