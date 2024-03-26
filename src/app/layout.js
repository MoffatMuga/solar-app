import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Solar-Spark-Solutions",
  
};



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={raleway.className}>
            <div className="container" >
              <Navbar />
              {children}
            </div>
      </body>
    </html>
  );
}
