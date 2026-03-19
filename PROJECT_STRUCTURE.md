# Web-Project Directory Structure

```
Web-Project/
├── .git/                          # Git version control
├── .gitignore                     # Git ignore file
├── node_modules/                  # Project dependencies
├── public/                        # Public static files
├── src/                           # Source code
│   ├── App.jsx                    # Main App component
│   ├── App.css                    # App styling
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Global styles
│   ├── gallery.js                 # Gallery utility
│   └── assets/
│       └── react.svg              # React logo asset
├── Components/                    # Gallery & Header components
│   ├── gallery.js                 # Gallery logic
│   ├── galleryDataTwo.js          # Gallery data
│   ├── galleryOne.jsx             # Gallery component 1
│   ├── galleryOne.css             # Gallery 1 styles
│   ├── galleryTwo.jsx             # Gallery component 2
│   ├── galleryTwo.css             # Gallery 2 styles
│   ├── header.jsx                 # Header component
│   ├── header.css                 # Header styles
│   ├── home.jsx                   # Home component
│   ├── home.css                   # Home styles
│   ├── info.jsx                   # Info component
│   ├── info.css                   # Info styles
│   └── info1.js                   # Info utility
├── Components2/                   # Navigation & Contact components
│   ├── menu.jsx                   # Menu component
│   ├── menu.css                   # Menu styles
│   ├── menuData.js                # Menu data
│   ├── contact.jsx                # Contact component
│   ├── contact.css                # Contact styles
│   ├── reservation.jsx            # Reservation component
│   └── reservation.css            # Reservation styles
├── images/                        # Project images
│   ├── bg.jpg                     # Background image
│   ├── bg1.avif                   # Background image (avif)
│   ├── contact-bg.webp            # Contact background
│   ├── diet-coke-by-vivek.webp    # Product image
│   ├── logo-dark.jpg              # Dark logo
│   ├── logo-light.jpeg            # Light logo
│   ├── pizza-image-1.png          # Pizza product 1
│   ├── pizza-image-2.png          # Pizza product 2
│   ├── pizza-image-3.png          # Pizza product 3
│   ├── pizza-image-4.png          # Pizza product 4
│   ├── pizza-image-5.png          # Pizza product 5
│   ├── pizza-image-6.png          # Pizza product 6
│   ├── pizza-image-7.png          # Pizza product 7
│   └── pizza-image-8.png          # Pizza product 8
├── index.html                     # HTML entry point
├── package.json                   # Project dependencies & scripts
├── package-lock.json              # Locked dependency versions
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
└── README.md                      # Project documentation
```

## Directory Summary

| Directory | Purpose |
|-----------|---------|
| `src/` | Main React application source code |
| `Components/` | Gallery and header related React components |
| `Components2/` | Navigation and contact related React components |
| `images/` | Project image assets (backgrounds, logos, products) |
| `public/` | Public static files served by the web server |
| `.git/` | Git version control repository |
| `node_modules/` | Installed npm packages |

## Key Files

| File | Purpose |
|------|---------|
| `src/main.jsx` | React application entry point |
| `src/App.jsx` | Root React component |
| `index.html` | HTML template |
| `vite.config.js` | Vite bundler configuration |
| `package.json` | Project metadata and dependencies |
| `eslint.config.js` | Code linting configuration |
