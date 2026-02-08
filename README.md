# Tristan Mahinay - Personal Portfolio

A modern, responsive personal portfolio website showcasing my professional journey, technical expertise, and community engagements as a Tech Lead and Solutions Architect. Built with performance, accessibility, and clean code in mind.

## Features

- **Impact-Driven Metrics**: Highlighted key achievements and measurable impacts across professional experiences.
- **Modular Component Architecture**: Reusable and encapsulated components (`About`, `Experience`, `Skills`, `Engagements`) for maintainability.
- **Responsive Design**: Mobile-first approach ensuring seamless viewing on all devices.
- **Static Site Generation (SSG)**: Leveraging Next.js for optimal performance and SEO.
- **Clean & Professional Aesthetics**: Utilizing CSS Modules for scoped styling and a consistent design system.
- **JSDoc Documentation**: Comprehensive code documentation with author attribution.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules
- **Deployment**: Validated for static export (`next build`).

## Project Structure

```
├── public/             # Static assets (images, fonts, favicon)
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   ├── components/     # Reusable UI components
│   │   ├── About/      # Professional summary & profile
│   │   ├── Engagements/# Community leadership & speaking roles
│   │   ├── Experience/ # detailed work history & impact cards
│   │   ├── Hero/       # Modern landing section
│   │   ├── Navbar/     # Responsive navigation
│   │   ├── Skills/     # Categorized technical skills
│   │   └── ...
│   └── data/           # Structured data files (content management)
│       ├── engagements.ts
│       ├── experience.ts
│       └── skills.ts
└── ...
```

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/rjtmahinay/rjtmahinay-personal.git
    cd rjtmahinay-personal
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `.next` folder (or `out` if configured for static export).

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Tristan Mahinay**

- **Role**: Tech Lead & Solutions Architect | Community Leader
- **Email**: [me@rjtmahinay.com](mailto:me@rjtmahinay.com)
- **LinkedIn**: [rjtmahinay](https://linkedin.com/in/rjtmahinay)
- **GitHub**: [rjtmahinay](https://github.com/rjtmahinay)
- **Website**: [rjtmahinay.com](https://rjtmahinay.com)

---

_Built with passion and code by Tristan Mahinay._
