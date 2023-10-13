import {NavBar} from "@/components/Navbar";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {/*111/!*magic but this can fly*!/*/}
      {children}
      </body>
    </html>
  )
}
