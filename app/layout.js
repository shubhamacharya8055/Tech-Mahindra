import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

   const poppins = Poppins({
      subsets: ["latin"] , 
      display: "swap",
      weight: ["100" , "200" , "300" , "400" , "500" , "600", "700", "800", "900"]
   })

export const metadata = {
  title: "Tech Mahindra | Scale at Speed",
  description: "The Mahindra Co. which looks after the technical aspects of mahindra motors and company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} no-scrollbar`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
