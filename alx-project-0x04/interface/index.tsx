import { ReactNode } from "react";

// Interface definitions extracted from project files

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From components/common/Button.tsx
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gray';
}

// From components/layouts/Layout.tsx
export interface LayoutProps {
  children: ReactNode;
}