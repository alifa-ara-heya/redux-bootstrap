// import { useAppDispatch } from "@/redux/hook";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash } from "lucide-react";

interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md flex justify-between">
      {/* using ternary operator
          <div
            className={`size-3 rounded-full ${
              task.priority === "Low"
                ? "bg-green-500"
                : task.priority === "Medium"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          ></div> */}
      <h1 className="text-xl">{user.name}</h1>
      <button onClick={() => dispatch(removeUser(user.id))}>
        <Trash />
      </button>
    </div>
  );
}
