import "./globals.css";

export const metadata = {
  title: "1Place | Home",
  description: "Next.js and Supabase unite to create a bespoke tweeting experience leveraging Typescript without proprietary vendor lock-in.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-900 min-h-screen flex">{children}</div>
      </body>
    </html>
  );
}
