# 🥗 Recipe Finder

A lightweight, multi-page recipe discovery website built with vanilla HTML, CSS, and JavaScript. Perfect for learning how to structure maintainable web projects without frameworks.

## ✨ Features

- **Clean, Semantic HTML** - Properly structured markup with BEM class naming conventions
- **Responsive Design** - Mobile-first approach using custom CSS with variables
- **Recipe Filtering** - Real-time search and filter recipes by name or ingredient
- **Zero Dependencies** - Pure vanilla JavaScript, no frameworks or libraries
- **Multiple Pages** - Home, About, and Recipes pages with modular JavaScript
- **Variable Fonts** - Uses Nunito and Nunito Sans variable fonts for optimal performance
- **Modern Tooling** - Built with Vite+ for fast development and optimized production builds

## 📁 Project Structure

```
recipe-finder/
├── index.html              # Home page
├── about.html              # About page
├── recipes.html            # Recipes listing page
├── src/
│   ├── style.css           # Global styles & design system
│   ├── main.js             # Home page logic
│   ├── about.js            # About page interactions
│   └── recipes.js          # Recipe filtering logic
├── public/
│   ├── fonts/              # Nunito & Nunito Sans variable fonts
│   └── images/             # SVG icons and images
├── vite.config.ts          # Vite+ configuration
└── package.json            # Project dependencies
```

## 🎨 Design System

### Colors
- **Neutral**: `--neutral-0` to `--neutral-900`
- **Primary**: Orange (`--orange-500`), Teal (`--teal-500`), Indigo (`--indigo-500`), Pink (`--pink-500`)

### Typography
- **Font**: Nunito & Nunito Sans (Variable fonts 200-900 weight)
- **Size scale**: `--font-size-14` to `--font-size-72`

### Spacing
- **System**: Consistent spacing scale from `--spacing-025` to `--spacing-1800`

### Border Radius
- **Variants**: `--radius-0` to `--radius-full`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (managed by Vite+)
- pnpm 10.33.0+

### Installation

```bash
# Install dependencies
vp install

# Start development server
vp dev

# Build for production
vp build

# Preview production build
vp preview
```

## 📝 Available Scripts

All scripts use Vite+ (`vp`) CLI:

| Command | Description |
|---------|-------------|
| `vp dev` | Start dev server at `http://localhost:5173` |
| `vp build` | Create optimized production build |
| `vp preview` | Preview production build locally |
| `vp check` | Run format, lint, and type checks |
| `vp lint` | Check code quality with Oxlint |
| `vp fmt` | Format code with Oxfmt |
| `vp test` | Run tests with Vitest |

## 🏗️ Pages Overview

### Home (`index.html`)
- Hero section with call-to-action
- Features showcase grid
- "Built for real life" section with imagery
- Secondary CTA section

### About (`about.html`)
- Project overview
- Interactive button to reveal project focus
- Demonstrates page-specific JavaScript

### Recipes (`recipes.html`)
- Real-time recipe search/filter
- Searches by name or ingredient
- Dynamic list rendering with no matches feedback
- Page-specific filtering logic

## 💻 JavaScript Architecture

Each page has its own JavaScript module:

- **main.js** - Minimal setup, just imports styles
- **about.js** - Handles button interaction and text updates
- **recipes.js** - Manages recipe filtering and dynamic rendering

No shared state between pages - each is completely independent.

## 🎯 BEM Class Naming

This project follows the BEM (Block, Element, Modifier) methodology for CSS classes:

```html
<!-- Block -->
<header class="header">
  <!-- Element -->
  <nav class="header__nav">
    <!-- Element with Modifier -->
    <a class="header__nav-link header__nav-link--active">Home</a>
  </nav>
</header>

<!-- Block -->
<section class="hero">
  <!-- Element -->
  <h1 class="hero__title">Healthy meals, zero fuss</h1>
  <!-- Element -->
  <button class="hero__cta">Start exploring</button>
</section>
```

## 🔧 Development Workflow

1. **Code Quality**: Pre-commit hooks run `vp check --fix` automatically
2. **Type Safety**: TypeScript type checking enabled with type-aware linting
3. **Hot Reload**: Automatic browser refresh on file changes
4. **Build Optimization**: Multiple entry points configured for multi-page builds

## 📦 Production Build

The project is configured for multi-page output:

```typescript
// vite.config.ts
rollupOptions: {
  input: {
    home: "index.html",
    about: "about.html",
    recipes: "recipes.html",
  },
}
```

Each page is built independently with code splitting and optimization.

## 🎓 Learning Resources

This project demonstrates:
- ✅ Multi-page site structure
- ✅ CSS custom properties and design systems
- ✅ BEM methodology for maintainable CSS
- ✅ Vanilla JavaScript patterns
- ✅ Modern tooling with Vite+
- ✅ Web typography with variable fonts
- ✅ Semantic HTML practices

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ and 🥑 for developers who value simplicity.**
