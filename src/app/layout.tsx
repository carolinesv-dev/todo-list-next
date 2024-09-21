import React from 'react';
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "ToDo List Next",
  description: "Título",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type='image/ico' href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
