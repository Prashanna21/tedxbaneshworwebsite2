import { clsx, type ClassValue } from "clsx";
import { Span } from "next/dist/trace";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

