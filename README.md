# Beenzod

**Beenzod** is a lightweight, customizable JavaScript utility library that offers easy-to-use UI components like loaders, notifications, and error handlers — usable in any JS framework or vanilla JS projects.

---

## ✨ Features

- 🚀 **Customizable Loaders** (`circular`, `bar`, and more)
- 🔔 **Notification System** *(coming soon)*
- ❗ **Error Handler** *(coming soon)*
- ⚙️ Easy integration with any JS framework (React, Vue, Angular, or Vanilla JS)
- 💡 Simple API for quick setup

---

## 📦 Installation

```bash
npm install beenzod
```

or with yarn:

```bash
yarn add beenzod
```

---

## ⚙️ Usage

### Import in your project:

```js
import { createLoader } from 'beenzod';
```

### Create a loader:

```js
createLoader({
  type: 'circular', // 'circular' | 'bar' | other types
  color: 'red',     // Loader color
  size: 40,         // Size in pixels
  time: 3000        // Duration in milliseconds before auto-remove
});
```

You can call `createLoader` inside React's `useEffect` or event handlers to show loaders easily.

---

## 📘 API

### `createLoader(options)`

| Option       | Type     | Description                             |
|--------------|----------|-----------------------------------------|
| `type`       | `string` | Type of loader (`circular`, `bar`, etc.)|
| `color`      | `string` | Loader color (any CSS color)            |
| `size`       | `number` | Size in pixels                          |
| `time`       | `number` | Time in ms to auto-hide the loader      |

---

## 🛣 Roadmap

- [ ] ✅ Add **Notifier** feature for toast notifications
- [ ] ✅ Build **Error Handler** for easy error catching and logging
- [ ] More loader styles & customization options
- [ ] TypeScript support
- [ ] Detailed examples & documentation

---

## 🧑‍💻 Contributing

Feel free to open issues or submit pull requests. Suggestions and feedback are always welcome!

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍🎨 Author

**Avinash** — [GitHub](https://github.com/) | [npm](https://www.npmjs.com/)

> Built with ❤️ by Avinash