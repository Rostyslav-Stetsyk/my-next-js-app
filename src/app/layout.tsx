import './globals.css';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-zinc-50">{children}</body>
    </html>
  );
};

export default RootLayout;
