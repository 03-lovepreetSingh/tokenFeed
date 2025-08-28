import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import Footer from "./components/Footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
    <header className="sticky top-0 z-50 bg-white shadow-md">
       <Navbar/>
    </header>
    
        {children}
        <Footer/>
      </body>
    </html>
  );
}
