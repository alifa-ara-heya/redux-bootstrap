# 🧠 Understanding Object Mutability, Shallow vs Deep Copy, and the Power of Immer in JavaScript

In JavaScript, objects are **mutable**. This means if you assign an object to a new variable, **both variables refer to the same memory**. Any change made through one will affect the other.

Let's explore what this means — and how to avoid unintended side effects using techniques like shallow copy, deep copy, and [Immer](https://immerjs.github.io/immer/).

---

## 🔁 Problem: Object Mutability

```js
const employee = {
  name: "Mir",
  address: {
    country: "Bangladesh",
    city: "Dhaka",
  },
};

const employee2 = employee;
employee2.name = "Mezba";

console.log(employee.name); // "Mezba" ❗ Unexpected mutation
```

> `employee2` and `employee` point to the same object. Changing `employee2` affects `employee`.

---

## 🧪 Solution 1: Shallow Copy with Spread Operator

```js
const employee2 = {
  ...employee,
  name: "Mezba",
};

employee2.address.city = "Chittagong";

console.log(employee.address.city); // "Chittagong" ❗ still mutated!
```

> This only copies the **top-level** fields — nested objects like `address` are still **shared**.

---

## 🌊 Solution 2: Manual Deep Copy (One Level Down)

```js
const employee2 = {
  ...employee,
  name: "Mezba",
  address: {
    ...employee.address,
    city: "Chittagong",
  },
};

console.log(employee.address.city); // "Dhaka" ✅
```

> We manually copy nested structures to break the shared reference.

---

## 🧱 Solution 3: Structured Clone (Modern Browsers)

```js
const employee2 = structuredClone(employee);
employee2.name = "Mezba";
employee2.address.city = "Chittagong";

console.log(employee.address.city); // "Dhaka" ✅
```

> `structuredClone()` performs a deep copy automatically.
> ⚠️ Browser support: Modern browsers only (Chrome 98+, Node.js 17+)

---

## 🛠️ Solution 4: Deep Copy Using Immer

[Immer](https://immerjs.github.io/immer/) lets you write **mutative code** that produces **immutable updates**.

### 🔧 Step 1: Install Immer

```bash
npm install immer
```

### 📦 Step 2: Use `produce` to Make Safe Updates

```js
import { produce } from "immer";

const employee = {
  name: "Mir",
  address: {
    country: "Bangladesh",
    city: "Dhaka",
  },
};

const employee2 = produce(employee, (draft) => {
  draft.name = "Mezba";
  draft.address.city = "Chittagong";
});

console.log(employee);
// Output: { name: 'Mir', address: { country: 'Bangladesh', city: 'Dhaka' } }

console.log(employee2);
// Output: { name: 'Mezba', address: { country: 'Bangladesh', city: 'Chittagong' } }
```

> ✅ Clean, concise, and powerful. Perfect for managing immutable state in tools like Redux.

---

## 📌 Summary Table

| Technique            | Type         | Handles Nested? | Notes                              |
| -------------------- | ------------ | --------------- | ---------------------------------- |
| `...` spread         | Shallow Copy | ❌              | Only copies top-level              |
| Manual nested spread | Partial Deep | ✅ (Manual)     | Tedious for deep structures        |
| `structuredClone()`  | Deep Copy    | ✅              | Browser/Node support required      |
| `Immer` (`produce`)  | Deep Copy    | ✅              | Cleaner syntax for immutable logic |

---

## 🧠 Final Thoughts

- Use **shallow copy** for flat objects.
- Use **structuredClone** or **Immer** for deeply nested updates.
- Immer is especially useful in **React** state management scenarios where immutability is key.

---

✍️ _If you found this helpful, feel free to share or comment below. Happy coding!_
