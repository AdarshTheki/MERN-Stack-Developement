#### Setup Vite and Tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

1. Setup vite project

```sh
npm create vite@latest my-project -- --template react
cd my-project
```

2. Add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

-   Rename to tailwind.config.cjs, Auto following content
-   Add the Tailwind directives to your CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
#### Useful Tailwind Extensions

-   [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
-   [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)

### Repeating Styles

index.css

```css
@layer components {
    .align-element {
        @apply mx-auto max-w-7xl px-8;
    }
}
```

### Global Styles

index.html

```html
<html lang="en" class="bg-slate-50 scroll-smooth"></html>
```
