// custom layout for the auth folder (eg: If we dont want the navbar in the auth routes than we can do it here)

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
// SEO Optimization
export const metadata = {
  title: "Threads",
  description: "A NextJs 13 Meta Threads Application",
};

// fonts
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // cleark provides auth throughout all the components
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
