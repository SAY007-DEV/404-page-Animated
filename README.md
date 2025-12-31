# Code404 - Creative 404 Page

A creative, developer-themed 404 Not Found page component for React applications. It features a terminal-style typing animation that humorously "debugs" the missing page using a simulated JavaScript code snippet.

![404 Page Demo](https://raw.githubusercontent.com/SAY007-DEV/404-page-Animated/main/public/screenshot.png)

<!-- > *Note: To see the preview, please capture a screenshot of the application and save it as `screenshot.png` in this directory.* -->

## Features

- **Typing Animation**: Simulates code being typed character-by-character in real-time.
- **Developer Humor**: Displays a custom JavaScript function attempting to "find" the page and throwing a 404 error.
- **Syntax Highlighting Style**: Mimics a code editor environment.
- **Cursor Effect**: Includes a blinking cursor that follows the typing and disappears from previous lines.
- **Responsive**: Adapts to the container size.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SAY007-DEV/404-page-Animated
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Code404
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

### Running Locally
To start the development server and view the animation:

```bash
npm run dev
```

### Integration
To use the `NotFound` component in your own React project:

1. Copy the `src/Components/404-page` directory into your project.
2. Import and render the component where needed (usually in your router's catch-all route):


## Technologies Used

- **React**: For component structure and state management.
- **CSS3**: For the typing animations and layout.
- **Vite**: For fast development and building.
