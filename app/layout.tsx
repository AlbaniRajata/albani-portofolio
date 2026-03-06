import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Albani Rajata Malik",
  description: "Full Stack Software Engineer based in Malang, Indonesia. Specializing in React, Node.js, TypeScript, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}