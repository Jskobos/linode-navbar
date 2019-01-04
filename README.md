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