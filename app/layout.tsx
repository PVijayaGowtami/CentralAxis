import '../styles/globals.css';


export const metadata = {
  metadataBase: new URL('https://example.com'), // 
  title: 'Central Axis',
  description: 'Clone',
  author: 'Vijaya Gowtami Pappu',
  openGraph: {
    title: 'Central Axis',
    description: 'Clone',
    images: ['/softsell.png'], // Replace with your actual image URL
    url: '/softsell.png', // Replace with your actual URL
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
