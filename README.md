# 📝 React Todo App with Routing & Lifecycle

This project is a simple Todo App built using **React** that demonstrates the following concepts:

- JSX syntax
- Component creation and management
- State and hooks (`useState`, `useEffect`)
- Component lifecycle using `useEffect`
- React Router (v6) for navigation
- Dynamic route params and query strings

---

## 📁 Project Structure

```
react-todo-router/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── TodoList.jsx
│ │ └── TodoLogger.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ └── TodoDetails.jsx
│ ├── App.js
│ └── index.js
```
---

## ⚙️ Features Covered

### ✅ JSX and Component Basics

- Uses **JSX** for HTML-like syntax in JavaScript
- Reusable functional components like `<TodoList />`, `<Navbar />`

### 🔁 Component Lifecycle (with Hooks)

- Uses `useEffect()` to log todo updates
- Cleanup function to simulate `componentWillUnmount`

### 🔗 Routing with `react-router-dom`

- `BrowserRouter` wraps the app
- Pages: Home (`/`), About (`/about`), Todo Details (`/todo/:id`)
- Navigation using `<Link>` and `useNavigate()`
- Read route parameters using `useParams()`
- Access query strings with `useSearchParams()`

---

## 🚀 Getting Started

```bash
npx create-react-app react-todo-router
cd react-todo-router
npm install react-router-dom
```

## ✏️ Code Notes

Adding a Todo:
• Handled in Home.jsx using useState

```js
const [todos, setTodos] = useState([]);
```

Logging Side Effects:
• Logs every change to todos using useEffect

```js
useEffect(() => {
  console.log("Todos updated", todos);
}, [todos]);
```

Navigating to a Todo Detail:

```js
<Link to={`/todo/${index}?ref=home`}>{todo}</Link>
```

Dynamic Page (TodoDetails.jsx):

```js
const { id } = useParams();
const [searchParams] = useSearchParams();
```
