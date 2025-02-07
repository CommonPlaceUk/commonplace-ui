# Commonplace UI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC.svg)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)](https://tailwindcss.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000.svg)](https://nextjs.org/)

**Democratizing political transparency through AI-powered civic engagement tools.**

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Project Overview

Commonplace is an open-source platform to increase transparency in British politics. This repository contains the **Next.js frontend** for:

- ✉️ AI-assisted email drafting to MPs
- 🗳️ Public figure profiles (MPs, Lords, officials)
- 📜 Petition creation tools

**MVP Goal**: Deliver core civic engagement tools with minimal viable features to attract early adopters and investors.

---

## Features

### Phase 1 (MVP)

- **Email My MP**: Draft fact-based emails with AI suggestions.
- **MP Lookup**: Find representatives by postcode (TheyWorkForYou API).
- **Public Figure Hub**: View voting records, financial interests, and media mentions.

### Future Features (Roadmap)

- Role-based interfaces (Activist, Journalist, Educator)
- Petition analytics dashboard
- Social media sharing integrations

---

## Tech Stack

| Category              | Tools                                                                 |
|-----------------------|-----------------------------------------------------------------------|
| **Framework**         | Next.js 15 (App Router)                                               |
| **Styling**           | Tailwind CSS + Headless UI                                            |
| **State Management**  | Redux Toolkit (RTK) + RTK Query                                       |
| **CI/CD**             | GitHub Actions → Azure Static Web Apps                                |
| **Testing**           | Jest + React Testing Library (Post-MVP)                               |

---

## Setup

### Prerequisites

- Node.js 18+
- yarn 9+
- [TheyWorkForYou API Key](https://www.theyworkforyou.com/api/) (Optional for local dev)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CommonPlaceUk/commonplace-ui.git
   cd commonplace-ui
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create `.env.local` file:

   ```env
   NEXT_PUBLIC_TWFY_API_KEY=your_api_key_here
   NEXT_PUBLIC_OPENAI_KEY=your_key_here  # Post-MVP
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

### Scripts

| Command                | Description                           |
|------------------------|---------------------------------------|
| `yarn dev`             | Start local dev server                |
| `yarn build`           | Production build                      |
| `yarn run lint`        | Run ESLint                            |
| `yarn run format`      | Format code with Prettier             |
| `yarn test`            | Run Jest tests                        |
| `yarn run test:watch`  | Run Jest tests in watch mode          |
|------------------------|---------------------------------------|

---

## Directory Structure

``` plaintext
commonplace-ui/
├── app/
│   ├── (public)/          # Public pages (landing, tools)
│   │   ├── page.tsx       # Landing page
│   │   ├── login/         # Login page
│   │   ├── email/         # Email drafting tool
│   │   ├── profile/       # Public figure profiles
│   │   ├── petition/      # Petition creation tool
│   ├── (auth)/            # Authentication flows
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── features/              # Feature modules
├── redux/
│   ├── store.ts           # Redux store
│   └── api/               # RTK Query endpoints
```

---

## Contributing

We welcome contributions! Please follow these steps:

1. Open an [Issue](https://github.com/CommonPlaceUk/commonplace-ui/issues) to discuss your proposal.
2. Fork the repository and create a feature branch.
3. Submit a Pull Request with:
   - Clear description of changes
   - Relevant tests (Post-MVP)
   - Updated documentation

**Coding Standards**:

- TypeScript strict mode enabled
- Prefer functional components
- Follow [Next.js App Router conventions](https://nextjs.org/docs/app)

---

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## Acknowledgments

- [TheyWorkForYou](https://www.theyworkforyou.com/) for MP data API
- [UK Parliament](https://developer.parliament.uk/) for open data
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

**Empowering citizens through transparency** |
[View Live Demo](https://commonplace.uk) (Coming Soon) | [Contribute](https://github.com/CommonPlaceUk/commonplace-ui)
