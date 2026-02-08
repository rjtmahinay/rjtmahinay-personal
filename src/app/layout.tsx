import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rjtmahinay.com"),
  title: "Tristan Mahinay | Tech Community Leader, Innovator & Open-source Committer",
  description:
    "Reynaldo John Tristan Mahinay Jr. - Tech Community Leader, Innovator and Open-source Committer. Experienced Java Developer specializing in Spring Boot, enterprise applications, and cloud technologies.",
  keywords: [
    "Tristan Mahinay",
    "Java Developer",
    "Software Engineer",
    "Open Source Contributor",
    "Spring Boot",
    "Tech Community Leader",
    "IBM Developer",
  ],
  authors: [{ name: "Tristan Mahinay", url: "https://rjtmahinay.com" }],
  creator: "Tristan Mahinay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rjtmahinay.com",
    siteName: "Tristan Mahinay",
    title: "Tristan Mahinay | Tech Community Leader & Open-source Committer",
    description:
      "Tech Community Leader, Innovator and Open-source Committer. Experienced Java Developer specializing in Spring Boot and enterprise applications.",
    images: [
      {
        url: "/images/profile_latest.jpg",
        width: 500,
        height: 500,
        alt: "Tristan Mahinay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tristan Mahinay | Tech Community Leader",
    description:
      "Tech Community Leader, Innovator and Open-source Committer.",
    creator: "@rjtmahinay",
    images: ["/images/profile_latest.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/profile_latest.jpg",
  },
};

/**
 * Root layout component for the application.
 * Wraps all pages with the HTML structure and applies global styles.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The content to render inside the layout.
 * @returns {JSX.Element} The root layout structure.
 *
 * @author Tristan Mahinay
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
