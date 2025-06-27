# 🧠 JavaScript Concept: Currying and its implementation in Redux

## 🔍 What is Currying?

**Currying** is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time.

Instead of:

```js
const add = (a, b) => a + b;
```

You curry it as:

```js
const curriedAdd = (a) => (b) => a + b;
```

---

## 📌 Why Use Currying?

- **Reusability:** You can create specialized versions of functions.
- **Function composition:** Useful in pipelines and functional chains.
- **Cleaner syntax for functional operations.**

---

## ✅ Examples

### 1. Normal Function

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### 2. Curried Function

```js
const curriedAdd = (a) => (b) => a + b;
console.log(curriedAdd(3)(5)); // 8
```

### 3. Multi-level Curried Function

```js
function curriedAdd2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd2(4)(6)(2)); // 12
```

---

### 4. Real-Life Example: Calculating Discount

Normal:

```js
const totalPrice = (amount, discount) => amount - amount * discount;
console.log(totalPrice(100, 0.3)); // 70
```

Curried:

```js
const curriedTotalPrice = (discount) => (amount) => amount - amount * discount;
const withDiscount = curriedTotalPrice(0.3);

console.log(withDiscount(100)); // 70
console.log(withDiscount(200)); // 140
console.log(withDiscount(250)); // 175
```

This helps you reuse the same discount logic without repeating the discount value every time.

---

## 🛠 Currying in Redux Middleware

Redux middleware often uses currying to handle the flow of **store → next → action**.

```js
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("previous state", store.getState());
  const result = next(action);
  console.info("next state", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
```

This is a **triple-curried** function:

- `(store)` gives access to the state and dispatch
- `(next)` passes control to the next middleware or reducer
- `(action)` is the actual dispatched action

### Used in `store.ts` like this:

```ts
import logger from "./middlewares/logger";

middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger);
```

---

## 🧩 Summary

| Concept      | Explanation                                                      |
| ------------ | ---------------------------------------------------------------- |
| **Currying** | Transforming a function so it takes arguments one at a time      |
| **Syntax**   | `f(a, b)` → `f(a)(b)`                                            |
| **Use Case** | Reusability, configuration, partial application                  |
| **Redux**    | Currying is used in middleware to access store, next, and action |
