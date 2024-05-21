export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Coming soon powered by HyvBangkok</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
