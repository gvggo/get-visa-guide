import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Get Visa Guide | Expert Visa & Immigration Consultants",
  description: "Get Your Visa Smarter & Faster. Specialized in Student Visas, Work Permits, PR, and Citizenship with a 98.7% success rate.",
  keywords: ["visa consultant", "study visa", "work visa", "immigration expert", "permanent residency", "Get Visa Guide"],
  openGraph: {
    title: "Get Visa Guide | Premium Immigration Solutions",
    description: "Your journey to a new country starts here. Fast, reliable, and expert-led visa processing.",
    images: ["https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}