import UserCard from "@/components/module/tasks/UserCard";
import { AddUserModal } from "@/components/module/users/AddUserModal";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUsers);
  console.log(users);

  return (
    <div>
      <h1>User</h1>
      <AddUserModal />
      <div className="space-y-5 mt-5">
        {/*  <TaskCard />
              <TaskCard />
              <TaskCard /> */}

        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
