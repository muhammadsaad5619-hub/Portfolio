import { Inter, JetBrains_Mono } from 'next/font/google';
import '../src/index.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'Muhammad Saad | Full Stack Developer',
  description: 'Portfolio of Muhammad Saad, a passionate MERN Stack Developer and BSCS student at FAST-NUCES building scalable web applications.',
  keywords: ['Muhammad Saad', 'Full Stack Developer', 'MERN Stack', 'React', 'Next.js', 'Node.js', 'Software Engineer', 'Pakistan'],
  authors: [{ name: 'Muhammad Saad' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Muhammad Saad | Full Stack Developer',
    description: 'Portfolio of Muhammad Saad, a passionate MERN Stack Developer and BSCS student at FAST-NUCES.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Muhammad Saad Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Saad | Full Stack Developer',
    description: 'Portfolio of Muhammad Saad, a passionate MERN Stack Developer and BSCS student at FAST-NUCES.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
