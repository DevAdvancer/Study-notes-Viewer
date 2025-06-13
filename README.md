
# Study Notes Viewer 📚

## Overview

Study Notes Viewer is a React-based web application for managing and organizing study notes. The application allows users to view, filter, and interact with study notes across different subjects and progress stages, with support for embedded multimedia content.

## Features 🌟

- **Dynamic Note Display**: View study notes in a grid layout
- **Progress Filtering**: Filter notes by their current progress status
- **Responsive Design**: Optimized for desktop and mobile devices
- **Animated Interactions**: Smooth animations using Framer Motion
- **Easy Navigation**: Intuitive note viewing and closing mechanism
- **Embedded Content**: Support for YouTube videos and Google Drive documents directly in notes
- **Markdown Support**: Rich text formatting with Markdown, including code highlighting

## Technologies Used 🛠️

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Lucide React Icons
- ReactMarkdown
- Rehype plugins for enhanced Markdown rendering

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/DevAdvancer/Study-notes-Viewer.git
   ```

2. Navigate to the project directory
   ```bash
   cd Study-notes-Viewer
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## Project Structure 📂

- `src/App.tsx`: Main application component
- `src/components/`: Reusable React components
- `src/data/`: Static data for notes
- `src/types.ts`: TypeScript type definitions

## Filtering Notes 🔍

The application supports filtering notes by their progress:
- `all`: Show all notes
- `completed`: Show only completed notes
- `in-progress`: Show notes currently being studied
- `not-started`: Show notes not yet begun

## Components 🧩

- `NoteCard`: Displays individual note summary
- `NoteViewer`: Expanded view of a selected note with support for embedded content
- `SortControls`: Filtering and sorting interface
- `Footer`: Application footer

## Embedded Content 🎬

The application supports embedding external content directly in your notes:

### YouTube Videos
Simply add a YouTube link in your markdown content, and it will automatically be converted to an embedded video player:
```markdown
[Video Title](https://www.youtube.com/watch?v=VIDEO_ID)
```

### Google Drive Documents
Add Google Drive file links to preview documents, presentations, and PDFs directly in your notes:
```markdown
[Document Title](https://drive.google.com/file/d/FILE_ID/view)
```

## Customization 🎨

You can easily customize notes by modifying the `notes` array in the `data` directory. Add YouTube videos and Google Drive document links in your markdown content to enhance your study materials.

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

Email: [theabhirupkumar@gmail.com](mailto:theabhirupkumar@gmail.com)
