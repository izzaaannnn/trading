import "./globals.css";

export const metadata = {
  title: "Trading Journal",
  description: "Dashboard de trading profesional creado por Izan."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex">{children}</body>
    </html>
  );
}