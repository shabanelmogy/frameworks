# 🧩 Frameworks Learning Hub

A monorepo of interactive demos comparing **React**, **Angular**, and **Blazor WebAssembly** — side by side, covering the same concepts in each framework.

---

## 📁 Project Structure

```
frameworks/
├── react-demo/      # React 19 + Vite + TypeScript
├── angular-demo/    # Angular 18 + TypeScript
└── blazor-demo/     # Blazor WebAssembly (.NET 10)
```

---

## 📚 Topics Covered

Each project covers the **same set of topics** implemented natively in each framework:

| Topic | React | Angular | Blazor |
|---|---|---|---|
| Overview | ✅ | ✅ | ✅ |
| Variables & Data | ✅ | ✅ | ✅ |
| Counter (State) | ✅ | ✅ | ✅ |
| Events | ✅ | ✅ | ✅ |
| Components | ✅ | ✅ | ✅ |
| Forms | ✅ | ✅ | ✅ |
| Services | ✅ | ✅ | ✅ |
| State Management | ✅ | ✅ | ✅ |
| Directives / Hooks | ✅ | ✅ | ✅ |
| Advanced Signals / Hooks | ✅ | ✅ | ✅ |
| Async / RxJS | ✅ | ✅ | ✅ |
| Auth Demo | ✅ | ✅ | ✅ |
| Roadmap | ✅ | ✅ | ✅ |

---

## 🚀 Getting Started

### ⚛️ React Demo

```bash
cd react-demo
npm install
npm run dev
```
> Runs on `http://localhost:5173`  
> Stack: React 19, React Router 7, Vite 8, TypeScript

---

### 🅰️ Angular Demo

```bash
cd angular-demo
npm install
npm start
```
> Runs on `http://localhost:4200`  
> Stack: Angular 18, RxJS 7, TypeScript

---

### 🔷 Blazor Demo

```bash
cd blazor-demo
dotnet run
```
> Runs on `https://localhost:5001`  
> Stack: Blazor WebAssembly, .NET 10

---

## 🛠️ Requirements

| Tool | Version |
|---|---|
| Node.js | ≥ 18 |
| npm | ≥ 9 |
| .NET SDK | ≥ 10 |
| Angular CLI | `npm i -g @angular/cli` |

---

## 📝 Notes

- `node_modules/`, `dist/`, `bin/`, `obj/` are excluded from version control via `.gitignore`
- Each sub-project has its own `.gitignore` for framework-specific rules
- The root `.gitignore` covers shared rules for all three projects

---

## 👤 Author

**Shaban El-Mogy** — [@shabanelmogy](https://github.com/shabanelmogy)
