/* eslint-disable react/prop-types */
import "@/styles/globals.css";
import "@/styles/custom.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kamal Pharma | Premium Healthcare",
  description: "Your trusted partner in health and wellness in Govind Mitra, Patna.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
