import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata = {
  title: "Corvex | Build. Scale. Dominate.",
  description: "Corvex builds modern digital experiences that help startups and enterprises grow through cutting-edge development, beautiful design, and result-driven marketing.",
  keywords: ["IT Company", "Web Development", "Frontend Development", "Backend Development", "Digital Marketing", "Corvex"],
  authors: [{ name: "Corvex Team" }],
  robots: "index, follow",
  icons: {
    icon: "/logo2.png", // Official bird logo as the favicon!
    shortcut: "/logo2.png",
    apple: "/logo2.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.png" />
      </head>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
