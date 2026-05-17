import './globals.css'

export const metadata = {
  title: 'JG University — Shape Tomorrow, Today',
  description: 'A new-age tech-driven university offering UGC-approved programs in Management, Commerce, Computing, Engineering, and more. Admissions open 2026-27.',
  keywords: 'JG University, MBA, BBA, BCA, MCA, B.Tech, Ahmedabad, Gujarat, Best University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
