# 🎮 JuegosConX

An interactive games collection built with **Vue 3**, **TypeScript**, and **Tailwind CSS**. A project focused on demonstrating modern architecture, reusable components, and well-structured game logic.

## 🎯 Features

- ✨ **Multiple games** — Blackjack, Hangman, Pokémon, and more
- 🏗️ **Scalable architecture** — Each game is an independent module
- 📘 **Full TypeScript** — Type-safe throughout the application
- 🎨 **Tailwind CSS** — Modern and responsive styling
- 🚀 **Vite** — Fast builds and HMR development
- ✅ **ESLint & Prettier** — Clean and consistent code

## 🕹️ Available Games

| Game | Description |
|------|-------------|
| **Blackjack** | Play the classic card game against the dealer |
| **Hangman** | Guess the word letter by letter |
| **Pokémon** | Search and discover Pokémon data via API |

## 🛠️ Tech Stack

- **Vue 3** — Progressive framework
- **TypeScript** — Type safety
- **Vite** — Modern build tool
- **Tailwind CSS** — Utility-first CSS framework
- **Vue Router** — Single-page application routing
- **Axios** — HTTP client
- **ESLint & Prettier** — Linting and code formatting

## 📁 Project Structure

```
src/
├── blackjack/          # Blackjack module
├── hangman/            # Hangman module
├── pokemon/            # Pokémon module
├── shared/             # Shared components
│   ├── components/     # NavBar, SideBar, etc.
│   └── interfaces/     # Global types
├── router/             # Route configuration
├── App.vue             # Root component
└── main.ts             # Entry point
```

## 🚀 Getting Started

### Requirements
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation and Development

```sh
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

The application will be available at `http://localhost:5173`

### Available Commands

```sh
# Type checking and build
pnpm build

# Preview production build
pnpm preview

# Linting and automatic formatting
pnpm lint
pnpm format

# Type checking
pnpm type-check
```

## 🔧 Development Environment Setup

### Recommended IDE

It's recommended to use **VS Code** with the following extensions:
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) — Vue 3 support
- [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

**Note:** Disable Vetur if you have it installed.

## 📚 Technical Learning Points

This project demonstrates:
- ✅ Composable patterns in Vue 3
- ✅ TypeScript usage in Vue SFC components
- ✅ Scalable modular structure
- ✅ Dynamic routing with lazy loading
- ✅ Integration with external APIs (Pokémon API)
- ✅ Reusable components with slots

## 📖 Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

**Author:** eduardoconx  
**License:** MIT
