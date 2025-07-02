# 🧭 Introduction to React Router v7 (Data Router API)

[React Router v7](https://reactrouter.com/start/data/installation) introduced the **Data Router API**, a declarative and more powerful way to define routes, load data, handle actions, and manage layouts. Unlike the traditional approach using `BrowserRouter`, `Routes`, and `Route`, the data router approach uses functions like `createBrowserRouter` and `RouterProvider` to define routing, layouts, nested routes, and more.

Use this guide if:

- You want a clean, nested layout structure
- You plan to use loaders, actions, or error boundaries
- You are using Vite/React and want a modern routing setup

---

## 🚀 Install React Router

```bash
npm i react-router-dom
```

---

## 🗂️ Create `routes/index.tsx`

You can use either `Component` or `element`, but with the Data Router API, prefer `Component`.

```ts
import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import UserDetails from "@/pages/UserDetails";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Tasks />, // Show on homepage
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "users",
        element: <User />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "*",
        element: <NotFound />, // 404 Page
      },
    ],
  },
]);

export default router;
```

---

## 🧵 Setup `main.tsx`

Make sure to use `RouterProvider` with the created `router`. If you're using state management (like Redux) or a UI library (like shadcn), wrap accordingly.

```ts
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
import { ThemeProvider } from "./providers/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
```

---

## 🧩 Define Layout with `<Outlet />` in `App.tsx`

Child routes render wherever `<Outlet />` is used. Without it, nothing will render.

```tsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
```

---

## 🧪 Example Page Component - Tasks

```tsx
const Tasks = () => {
  return (
    <div>
      <h1>This is Tasks component</h1>
    </div>
  );
};

export default Tasks;
```

---

## 🔁 Dynamic Route Example - `users/:id`

```tsx
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
};

export default UserDetails;
```

---

## ❌ 404 Page Example

```tsx
const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

export default NotFound;
```

---

## 📝 Key Notes

- ✅ Use `index: true` to render default content on `/`.
- ✅ Include `<Outlet />` in your layout to render child routes.
- ✅ Use `path: "*"` for fallback 404 pages.
- ✅ Use `useParams()` to extract dynamic values like `:id`.
- ✅ You can share state/context (Redux, Theme) using top-level providers.

---

## 📦 What You’ve Built So Far

- ✅ Modern nested routing with layout (`App.tsx`)
- ✅ Default (index) route
- ✅ 404 not found handler
- ✅ Dynamic route (`users/:id`)

---

## ➕ What's Next (Optional Add-ons)

### 1. 📤 Loader and Action Route Example

```ts
import { createBrowserRouter } from "react-router-dom";
import Tasks from "@/pages/Tasks";

const router = createBrowserRouter([
  {
    path: "/tasks",
    element: <Tasks />, // fallback to "element" usage here for loader/action
    loader: async () => {
      const res = await fetch("/api/tasks");
      return res.json();
    },
    action: async ({ request }) => {
      const formData = await request.formData();
      return fetch("/api/tasks", {
        method: "POST",
        body: formData,
      });
    },
  },
]);
```

---

### 2. 🔐 Protected Routes Full Example

```ts
import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "@/layouts/ProtectedLayout";
import Profile from "@/pages/Profile";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    Component: ProtectedLayout,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
```

---

### 3. 🧱 Separate Layouts Example

```ts
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import AdminDashboard from "@/pages/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [{ path: "dashboard", element: <AdminDashboard /> }],
  },
]);
```

---

### 4. 🧭 Nested Routes Example

```ts
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "@/layouts/UserLayout";
import UserList from "@/pages/UserList";
import UserDetails from "@/pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "/users",
    Component: UserLayout,
    children: [
      { index: true, element: <UserList /> },
      { path: ":id", element: <UserDetails /> },
    ],
  },
]);
```
