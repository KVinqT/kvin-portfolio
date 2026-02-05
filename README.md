# KVin Portfolio

My very very very first time portfolio in 2026! 🚀

## Tech Stack

This portfolio is built with modern web technologies:

- **Next.js 16** with App Router
- **TypeScript** for type-safe development
- **Tailwind CSS** for utility-first styling
- **shadCN-inspired** custom UI components
- **React 19** for modern UI development

## Custom Features

### KVin-Branded Components

This project includes custom-built UI components inspired by shadCN:

- `KvinButton` - Versatile button component with multiple variants
- `KvinCard` - Card component with header, content, and footer sections
- Custom color palette with brand colors (Primary Purple, Secondary Cyan, Accent Amber)
- Custom utility functions for style management

### Folder Structure

```
kvin-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── kvin-components/        # Custom UI components
│   │   └── ui/
│   │       ├── kvin-button.tsx
│   │       └── kvin-card.tsx
│   └── kvin-helpers/           # Utility functions
│       └── style-utilities.ts
├── components.json             # shadCN configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KVinqT/kvin-portfolio.git
cd kvin-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  kvinPrimary: "#4f46e5",    // Brand purple
  kvinSecondary: "#06b6d4",   // Brand cyan
  kvinAccent: "#f59e0b",      // Brand amber
}
```

### Components

All custom components are located in `src/kvin-components/ui/` and can be imported like:

```typescript
import { KvinButton } from "@/kvin-components/ui/kvin-button";
import { KvinCard, KvinCardHeader, KvinCardTitle } from "@/kvin-components/ui/kvin-card";
```

## Screenshots

![Portfolio Homepage](https://github.com/user-attachments/assets/7800b642-7d61-424e-8113-655dff83ba2a)

## License

ISC

