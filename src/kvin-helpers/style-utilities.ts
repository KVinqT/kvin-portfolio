import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateKvinGradient(startColor: string, endColor: string) {
  return `linear-gradient(to bottom right, ${startColor}, ${endColor})`;
}
