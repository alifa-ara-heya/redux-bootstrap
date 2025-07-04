import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList /* TabsTrigger */ } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
// import { useGetTasksQuery } from "@/redux/api-features/user/userSlice";
// import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";

const Tasks = () => {
  // for local states
  // const tasks = useAppSelector(selectTasks); //state, todo comes from store.ts, tasks come from taskSlice.ts , so the reducer name will be appended with state
  // console.log(tasks);
  // const filter = useAppSelector(selectFilter);
  // console.log(filter);
  // const dispatch = useAppDispatch();

  // for RTK query
  const { data, isLoading } = useGetTasksQuery(undefined, {
    pollingInterval: 30000, //to get real time updates, to send request after a specific time
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true, //if you change route, it will automatically refetch
    refetchOnReconnect: true, //if your internet connection gets lost
  });

  console.log({ data, isLoading });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex items-center justify-end gap-3">
        <h1 className="text-2xl font-bold mr-auto">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid gap-4 grid-cols-4 ">
            {/* <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger> */}
            {/* <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger> */}
            {/* <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger> */}
            {/* <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger> */}
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {/*  <TaskCard />
        <TaskCard />
        <TaskCard /> */}

        {/*   {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))} */}

        {!isLoading &&
          data.tasks.map((task: ITask) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Tasks;
