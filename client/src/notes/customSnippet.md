# ⚡ VS Code Snippet: Auto-Named React TypeScript Component Based on File Name

Tired of manually naming your components to match the filename every time you create a new file in your React TypeScript project?

With just a few lines in your VS Code snippet config, you can:

✅ Generate a functional component
✅ Automatically name it after the filename (e.g., `Tasks.tsx → const Tasks = () => {}`)
✅ Create it in **seconds** using a custom shortcut like `cc`

Let’s walk through how to set it up.

---

## 🧪 What the Snippet Does

When you're in a file like `Tasks.tsx` and type:

```
cc + TAB
```

You instantly get:

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

The component is automatically named `Tasks` — no renaming required!

---

## ⚙️ How to Set It Up

### 1. Open VS Code Snippets

Open the Command Palette:

```
Ctrl + Shift + P → Snippets: Configure Snippets
```

Choose:

```
typescriptreact.json
```

This file stores custom snippets for `.tsx` files.

---

### 2. Add Your Custom Snippet

Paste this inside the JSON file:

```json
"Custom Functional Component (cc)": {
  "prefix": "cc",
  "body": [
    "const $TM_FILENAME_BASE = () => {",
    "  return (",
    "    <div>",
    "      <h1>This is $TM_FILENAME_BASE component</h1>$0",
    "    </div>",
    "  );",
    "};",
    "",
    "export default $TM_FILENAME_BASE;"
  ],
  "description": "TypeScript Functional Component with cc"
}
```

---

## 💡 What Each Part Does

🔍 What’s Happening Here?

- `$TM_FILENAME_BASE`: Built-in VS Code variable that automatically inserts the current file name without extension

- `"prefix"`: `"cc"`: Just type cc and hit Tab to trigger the snippet. Reminder: This is the shortcut you'll type to trigger the snippet. You can rename `cc` to anything you like!

- `$0`: (optional) Marks final cursor position

---

## 🚀 Bonus Tips

- Add Props typing like this:

```tsx
Copy code
type ${TM_FILENAME_BASE}Props = {};
const ${TM_FILENAME_BASE} = (props: ${TM_FILENAME_BASE}Props) => { ... }
```

- Use with Tailwind, children, or default layouts

This trick saves time, avoids copy-paste mistakes, and keeps your component names consistent with file names.
