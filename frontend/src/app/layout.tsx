import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voxel — WebGL Shader Editor",
  description: "Create stunning WebGL shader effects with a real-time no-code editor. Build, tweak, and export GLSL shaders for the web.",
  keywords: ["WebGL", "shader", "editor", "React Three Fiber", "GLSL", "no-code"],
  openGraph: {
    title: "Voxel — WebGL Shader Editor",
    description: "Create stunning WebGL shader effects with a real-time no-code editor.",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/ui/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
