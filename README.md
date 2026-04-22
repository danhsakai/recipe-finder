# 🥗 Recipe Finder

A lightweight, responsive recipe discovery website built with vanilla HTML, CSS, and JavaScript. This project demonstrates modern web development practices including BEM methodology, accessibility (ARIA), responsive design, and Vite+ tooling.

## ✨ Features

- **Clean, Semantic HTML** - Properly structured markup with BEM class naming conventions
- **Accessibility First** - ARIA attributes for screen readers and inclusive UI
- **Responsive Design** - Mobile-first approach with media queries for all screen sizes
- **Real-time Recipe Filtering** - Search by recipe title with instant results
- **Advanced Filtering** - Filter recipes by prep time and cook time
- **Exclusive Dropdowns** - Only one filter can be open at a time for better UX
- **Dynamic Recipe Rendering** - Load and display recipes from JSON data
- **Zero Dependencies** - Pure vanilla JavaScript, no frameworks or libraries
- **Multiple Pages** - Home, About, and Recipes pages with modular JavaScript
- **Variable Fonts** - Uses Nunito and Nunito Sans variable fonts for optimal performance
- **Modern Tooling** - Built with Vite+ for fast development and optimized production builds

## 📁 Project Structure

```
recipe-finder/
├── index.html              # Home page
├── recipes.html            # Recipes listing with filtering
├── src/
│   ├── style.css           # Global styles & design system
│   ├── recipes.css         # Recipe page specific styles
│   ├── header-common.css   # Shared header styles
│   ├── main.js             # Home page and header logic
│   ├── recipes.js          # Recipe filtering and search logic
│   └── data.json           # Recipe data
├── public/
│   ├── fonts/              # Nunito & Nunito Sans variable fonts
│   └── images/             # Recipe images and icons (WebP format)
├── vite.config.ts          # Vite+ configuration
└── package.json            # Project dependencies
```

## 🎨 Design System

### Colors

- **Neutral**: `--neutral-0` to `--neutral-900`
- **Accent Colors**: Orange, Teal, Indigo, Pink

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

| Command      | Description                                 |
| ------------ | ------------------------------------------- |
| `vp dev`     | Start dev server at `http://localhost:5173` |
| `vp build`   | Create optimized production build           |
| `vp preview` | Preview production build locally            |
| `vp check`   | Run format, lint, and type checks           |
| `vp lint`    | Check code quality with Oxlint              |
| `vp fmt`     | Format code with Oxfmt                      |
| `vp test`    | Run tests with Vitest                       |
| `vp install` | Install dependencies after pulling changes  |

## 🏗️ Pages Overview

### Home (`index.html`)

- Hero section with call-to-action
- Features showcase grid
- "Built for real life" section with imagery
- Project philosophy and values
- Secondary CTA section

### Recipes (`recipes.html`)

- **Recipe Grid** - Display all 8 recipes with beautiful cards
- **Real-time Search** - Filter recipes by title instantly
- **Time Filters** - Filter by prep time and cook time
- **Exclusive Dropdowns** - Only one filter dropdown open at a time
- **Responsive Layout** - 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Recipe Metadata** - Display servings, prep time, cook time for each recipe

## 📋 Recipe Features

### Search Functionality

- Case-insensitive search by recipe title
- Real-time filtering as you type
- Shows all recipes when search is empty

### Filter System

- **Prep Time Filter**: 0, 5, 10 minutes
- **Cook Time Filter**: 0, 5, 10, 15, 20 minutes
- Clear button to reset each filter
- Exclusive dropdown behavior (click one filter closes the other)

### Recipe Card Display

Displays recipes with:

- High-quality recipe image
- Recipe title
- Brief description
- Servings count
- Prep time
- Cook time
- "View Recipe" button

## 🏷️ BEM Class Naming

This project follows the BEM (Block, Element, Modifier) methodology for maintainability:

### Recipe Components

```html
<!-- Grid block -->
<section class="recipes__grid">
  <!-- Card block -->
  <article class="recipes__card">
    <!-- Card elements -->
    <img class="recipes__card-image" src="..." />
    <h3 class="recipes__card-title">Recipe Title</h3>
    <p class="recipes__card-description">Description</p>
    <ul class="recipes__card-meta">
      <li class="recipes__card-meta-item">
        <img class="recipes__card-meta-icon" src="..." />
        <p class="recipes__card-meta-text">Serving: <span>2</span></p>
      </li>
    </ul>
    <button class="recipes__card-cta">View Recipe</button>
  </article>
</section>

<!-- Filter components -->
<div class="recipes__filter">
  <button class="recipes__filter-btn" aria-expanded="false" aria-controls="prep-time-options">
    Max Prep Time
  </button>
  <div class="recipes__filter-options" id="prep-time-options" aria-hidden="true">
    <label class="recipes__filter-label">
      <input type="radio" class="recipes__filter-input" />
      5 minutes
    </label>
    <button class="recipes__filter-clear">Clear</button>
  </div>
</div>
```

## ♿ Accessibility Features

- **ARIA Labels**:
  - `aria-expanded` on filter buttons to indicate open/closed state
  - `aria-controls` to link buttons to their controlled elements
  - `aria-hidden` to hide filter options from screen readers
- **Semantic HTML**: Proper heading hierarchy and form labels
- **Screen Reader Friendly**: All images have meaningful alt text or are marked as decorative
- **Keyboard Navigation**: All interactive elements are keyboard accessible

## 📱 Responsive Breakpoints

| Breakpoint | Width         | Changes                            |
| ---------- | ------------- | ---------------------------------- |
| Desktop    | > 768px       | 3-column grid, all filters visible |
| Tablet     | 480px - 768px | 2-column grid, dropdown filters    |
| Mobile     | < 480px       | 1-column grid, stacked controls    |

## 💻 JavaScript Architecture

### Modular Structure

- **main.js** - Home page logic and header interactions
- **recipes.js** - Recipe filtering, search, and dynamic rendering

### Key Functions

**recipes.js:**

- `renderRecipe(recipe)` - Generate HTML for a single recipe card
- `addRecipe(recipe)` - Insert recipe card into DOM
- `displayUI()` - Render all recipes to the grid
- `clearFilter()` - Reset filter to show all recipes

### Event Handlers

1. **Filter Button Toggle** - Click to expand/collapse filter options
2. **Filter Change** - Select prep/cook time to filter recipes
3. **Search Input** - Real-time search by recipe title
4. **Clear Button** - Reset filter and show all recipes

## 🎯 Data Management

Recipe data is stored in `src/data.json` with the following structure:

```json
{
  "title": "Recipe Name",
  "description": "Brief description",
  "servings": 2,
  "prep_time_min": 10,
  "cook_time_min": 15,
  "image": "/images/recipe-name-large.webp"
}
```

All images are stored as WebP format in `public/images/` for optimal performance.

## 🔧 Development Workflow

1. **Code Quality**: Pre-commit hooks run `vp check --fix` automatically
2. **Type Safety**: TypeScript type checking enabled with type-aware linting
3. **Hot Reload**: Automatic browser refresh on file changes
4. **Build Optimization**: Multi-page builds configured for separate entry points

## 📦 Production Build

The project is configured for multi-page output with code splitting and optimization:

```typescript
// vite.config.ts
rollupOptions: {
  input: {
    home: "index.html",
    recipes: "recipes.html",
  },
}
```

## 🎓 Learning Resources

This project demonstrates:

- ✅ Multi-page site structure
- ✅ BEM methodology for maintainable CSS
- ✅ CSS custom properties and design systems
- ✅ Vanilla JavaScript patterns and event handling
- ✅ Dynamic DOM manipulation and rendering
- ✅ Accessibility standards (ARIA attributes)
- ✅ Responsive design with media queries
- ✅ Modern tooling with Vite+
- ✅ Web typography with variable fonts
- ✅ Semantic HTML practices

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ and 🥑 for developers who value clean code and user experience.**
