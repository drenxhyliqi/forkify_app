# forkify

A recipe app for searching, saving, and adding your own recipes. Search over a million recipes, adjust servings, bookmark your favorites, and upload your own.

Built while learning JavaScript — plain JS, no framework, structured with the MVC pattern.

## Features

- Search recipes and browse results with pagination
- View ingredients, cooking time, and servings
- Adjust servings (ingredient amounts update automatically)
- Bookmark recipes (saved in your browser, so they stick around)
- Upload your own recipes

## Built with

- JavaScript (ES6 modules, async/await)
- MVC architecture
- Sass
- Parcel
- [forkify API](https://forkify-api.jonas.io)

## Running it locally

```bash
npm install
npm start
```

Then open the local address Parcel prints (usually http://localhost:1234).

To build for production:

```bash
npm run build
```

## Notes

Uploading recipes needs an API key. There's a public demo key in `src/js/config.js`, or grab your own at the [forkify API site](https://forkify-api.jonas.io).
