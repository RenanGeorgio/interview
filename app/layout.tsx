import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "AI-Powered Mock Interviews - by: RenanGeorgio",
  openGraph: {
    title: "AI-Powered Mock Interviews - by: RenanGeorgio",
    description:
      "AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://demo.useliftoff.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Mock Interviews - by: RenanGeorgio",
    description:
      "AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://demo.useliftoff.com/opengraph-image"],
    creator: "@renan.georgio",
  },
  metadataBase: new URL("https://demo.useliftoff.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
