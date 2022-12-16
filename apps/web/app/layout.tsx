import { getCssText } from '../stitches.config';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}/></head>
      <body>{children}</body>
    </html>
  );
}