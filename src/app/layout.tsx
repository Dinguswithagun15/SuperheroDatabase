import "./globals.css";
import {ReactNode} from 'react';

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <html lang="en">
      <body className="p-0 m-0 font-sans text-center">
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
