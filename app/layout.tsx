import Footer from "@/components/Footer";
import Gtag from "@/components/Gtag";
import Header from "@/components/Header";
import { Inter, Noto_Sans } from "@next/font/google";
import "./globals.css";

const NotoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-notosans",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ja" className="scroll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <Gtag />
      </head>
      {/* スタイルガイド
      *:leading-relaxed tracking-wider
      lead: font-bold,font-inter,tracking-wide  sp:text-3xl
      h1:font-bold,text-3xl,traking-widest sp:text-2xl
      h2:font-semibold,text-xl
      p:leading-7
      section:{
        paddingX:px-3,
        paddingY:py-10,

      }
      */}
      <body
        className={`${NotoSans.variable} ${inter.variable} mx-auto font-sans leading-relaxed  tracking-wider  prose-h1:font-inter prose-h1:text-2xl prose-h1:font-bold prose-h1:tracking-widest prose-h2:text-xl prose-h2:font-semibold prose-h2:tracking-wide prose-p:leading-7 prose-lead:font-inter prose-lead:text-3xl prose-lead:font-bold prose-lead:tracking-wide prose-h1:lg:text-3xl prose-lead:lg:text-5xl`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTAG_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
