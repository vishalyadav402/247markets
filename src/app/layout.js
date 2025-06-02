import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <title>Play & Win on 247Marketing - Win Millions for a Better Future</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Favicon & Icons */}
    <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

    {/* SEO Meta Tags */}
    <meta name="title" content="Play & Win on 247Marketing - Win Millions for a Better Future" />
    <meta name="keywords" content="247Marketing, play and win, win money, win prizes, lucky draw, contests, online rewards, spin and win, jackpot, instant cash prizes, gaming platform, earn online" />
    <meta name="description" content="Join 247Marketing and play fun games to win real cash, prizes, and more. Your chance to win millions daily and secure a better future starts here!" />
    <meta name="author" content="247Marketing Team" />

    {/* Open Graph / Facebook */}
    <meta property="og:title" content="Play & Win on 247Marketing - Win Big Every Day!" />
    <meta property="og:description" content="Participate in exciting games, lucky draws, and contests to win real money and prizes. 247Marketing is your destination to earn while having fun." />
    <meta property="og:image" content="/247-marketing.png" />
    <meta property="og:url" content="https://www.247marketingindia.com" />
    <meta property="og:type" content="website" />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Win Millions Daily - 247Marketing Play & Win" />
    <meta name="twitter:description" content="Spin, play, and win on 247Marketing. Start your journey toward a better future with exciting cash prizes and fun games!" />
    <meta name="twitter:image" content="/247-marketing.png" />
      <body className={inter.className}>
        <ToastContainer/>
         {children}
      </body>
    </html>
  );
}
