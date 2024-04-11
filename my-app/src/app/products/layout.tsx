

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div>
      {children}
      <p>kuch sochna parega</p>
      {/* products folder k under jitna v folder hoga sab m p render hoga */}

    </div>
        

  );
}
