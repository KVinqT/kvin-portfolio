import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function mergeKvinStyles(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const kvinColorPalette = {
  brandPurple: "#6366f1",
  brandCyan: "#22d3ee", 
  brandAmber: "#fbbf24",
  neutralLight: "#f1f5f9",
  neutralDark: "#1e293b",
} as const;

export function generateKvinGradient(startColor: string, endColor: string) {
  return `linear-gradient(to bottom right, ${startColor}, ${endColor})`;
}
