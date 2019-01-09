# Linode Navbar

Basic navbar intended to help maintain consistent styles across Linode websites.

## Usage

The navbar is a React component, bundled into a module so that you don't have to include React in your project or HTML.

`npm install @kobonaut/linode-navbar`

The `navbar` module exposes a single function, `showNavBar()`.

In your HTML:

```{html}
<script>navbar.showNavBar(document.getElementById('navbar-root'), 'name');</script>
<body>
  <div id="navbar-root"></div>
</body>
```

## Development

In order to modify the component(s) you'll need to do the following:

- `git clone https://github.com/Jskobos/linode-navbar`
- `git clone https://github.com/linode/linode-hugo-theme repos/linode-hugo-theme`
- `npm install`
- `npm run dev`