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
  metadataBase: new URL("https://linlin200217.github.io"),

  title: "Jielin Feng (冯捷琳) | Ph.D. Student at Fudan University",

  description:
    "Jielin Feng (冯捷琳) is a Ph.D. student at Fudan University and a visiting Ph.D. student at the University of Vienna. Research interests include Human-Computer Interaction, Human-AI Collaboration and Co-Creation, and Data Storytelling and Communication.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Jielin Feng | Academic Homepage",
    description:
      "Ph.D. student at Fudan University researching Human-Computer Interaction, Human-AI Collaboration and Co-Creation, and Data Storytelling.",
    url: "https://linlin200217.github.io/",
    siteName: "Jielin Feng",
    type: "profile",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jielin Feng — Academic Homepage",
      },
    ],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};


const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://linlin200217.github.io/#profile",
  url: "https://linlin200217.github.io/",
  mainEntity: {
    "@type": "Person",
    "@id": "https://linlin200217.github.io/#person",
    name: "Jielin Feng",
    alternateName: ["冯捷琳", "Feng Jielin"],
    url: "https://linlin200217.github.io/",
    image: "https://linlin200217.github.io/profile-photo.jpg",
    jobTitle: "Ph.D. Student",
    affiliation: [
      {
        "@type": "Organization",
        name: "Fudan University",
        url: "https://www.fudan.edu.cn/",
      },
      {
        "@type": "Organization",
        name: "University of Vienna",
        url: "https://www.univie.ac.at/",
      },
    ],
    knowsAbout: [
      "Human-Computer Interaction",
      "Human-AI Collaboration and Co-Creation",
      "Data Storytelling and Communication",
      "Data Visualization",
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
