import "../app/globals.css";


export const metadata = {
  title: {
    default: "Aulefrau's Nook",
    template: "%s | Aulefrau's Nook",
  },
  description: "A vibrant haven for creative art and accessories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
