export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <footer className="w-full bg-black px-6 pb-10 pt-4 text-center text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} Htet Naung Htun. All rights reserved.
        </p>
        <p className="mt-1 text-white/40">Made with love by Htet Naung Htun.</p>
      </footer>
    </div>
  );
}
