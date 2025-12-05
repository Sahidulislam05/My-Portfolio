import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Sahidul Islam | Junior MERN Stack Developer",
    description: "Portfolio of Sahidul Islam, a passionate Junior MERN Stack Developer specializing in React.js, Next.js, and Node.js.",
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={cn(
                    "min-h-screen bg-neutral-950 font-sans antialiased text-neutral-200 selection:bg-purple-500/30 selection:text-purple-200",
                    inter.variable,
                    poppins.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
