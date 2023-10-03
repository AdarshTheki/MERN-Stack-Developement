## Appwrite backend used with create the globally Blog Post Todo Lists:

### Setup Instructions

1.  Clone the Project

```
  git clone https://github.com/AdarshTheki/lms-frontend.git
```

2. Move to the directory

```
  cd lms-frontend/
```

3. Install dependencies

```
  npm install
```

4. Run the server

```
  npm run dev
```
### Adding plugin and dependencies
``` 
    react-router-dom appwrite @tinymce/tinymce-react react-hook-form html-react-parser  @reduxjs/toolkit react-redux
```

### How to setup tailwind in your Project Link
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

### Add daisyUI as a Tailwind CSS plugin
1. Add daisyUI to your tailwind.config.js files:
```
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "night"],
  },
```
2. Use in index.html file Add Attributes to data-theme in html tag:
```
  <html data-theme="dark"></html>
```