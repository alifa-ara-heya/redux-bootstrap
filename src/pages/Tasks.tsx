import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks); //state, todo comes from store.ts, tasks come from taskSlice.ts , so the reducer name will be appended with state
  console.log(tasks);
  const filter = useAppSelector(selectFilter);
  console.log(filter);

  return (
    <div>
      <h1>This is Tasks component</h1>
    </div>
  );
};

export default Tasks;
