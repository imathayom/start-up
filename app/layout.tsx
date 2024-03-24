export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Coming soon powered by Krungthep Startup</title>  
           
      </head>
      <body>{children}</body>
    </html>
  )
}
