"use client";

import { NextUIProvider } from "@nextui-org/react";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
