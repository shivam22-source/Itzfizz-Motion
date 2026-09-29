import "./globals.css";

export const metadata = {
  title: "Itzfizz Motion",
  description: "Scroll-driven hero animation built for the Itzfizz web development assignment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
