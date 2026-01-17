# Workflows UI

Workflows is an open-source platform designed for developers to write, schedule, and manage JavaScript-based automation. This repository contains the frontend application, a professional-grade dashboard and editor environment designed for building everything from simple CRON jobs to complex data integrations.

The project is hosted at `flexcodelabs/workflows-ui`.

## The Vision

Automation shouldn't be limited by the constraints of no-code drag-and-drop interfaces. Workflows is built on the idea that code is the most expressive way to define logic. This UI is designed to feel like a first-class development environment, offering the reliability and feedback you expect from a local IDE, but accessible from anywhere.

## Tech Stack

The interface is built with a focus on type safety, accessibility, and high-performance developer experience:

*   **Vite**: The build tool and development server, ensuring a fast feedback loop during development.
*   **React**: For building a modular, component-based user interface.
*   **TypeScript**: Used throughout the project for end-to-end type safety.
*   **Tailwind CSS**: A utility-first CSS framework for efficient and maintainable styling.
*   **Radix UI**: Unstyled, accessible UI primitives that form the backbone of our design system.
*   **Lucide**: A clean and consistent icon library used across the dashboard.
*   **Zod**: Used for robust schema declaration and validation, ensuring data integrity across forms and API responses.

## Getting Started

### Prerequisites

To set up the project locally, you will need:
*   Node.js (version 18 or higher)
*   A package manager like npm, pnpm, or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/flexcodelabs/workflows-ui.git
    cd workflows-ui
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

The application will be accessible at `http://localhost:5173`.

## Architecture

The project is organized to be easy to navigate for new contributors:

*   **/src/components**: Core UI primitives built with Radix UI and Tailwind, alongside more complex functional components.
*   **/src/pages**: The primary views of the application, such as the Login screen, Dashboard, and Editor.
*   **/src/hooks**: Custom React hooks for shared logic, state management, and data fetching.
*   **/src/schemas**: Zod validation schemas for forms and data structures.
*   **/src/types**: Centralized TypeScript interfaces and type definitions.
*   **/src/assets**: Static assets including the Lucide icon configurations.

## Contributing

We welcome contributions from the community. Whether you are fixing a UI bug, improving accessibility, or adding a new feature, your help is appreciated.

Please refer to `CONTRIBUTING.md` for our full guidelines. We use GitHub Issues for bug reports and feature requests, and we ask that you use the provided templates to help us understand your submission.

1.  Fork the repository at `flexcodelabs/workflows-ui`.
2.  Create your feature branch.
3.  Ensure your code passes all linting and type checks.
4.  Open a Pull Request with a clear description of your changes.

## License

Workflows UI is open-source software licensed under the MIT License.

## Support

If you have questions or run into issues while setting up the project, please open an issue in the GitHub repository or join our community discussions. We are here to help you get started.