import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='bg-slate-900 '>
        {children}
      </body>
    </html>
  )
}
