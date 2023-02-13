import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth  ">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* スタイルガイド
      *:leading-relaxed tracking-wider
      h1:font-bold,text-3xl
      h2:font-semibold,text-xl
      p:leading-7
      section:{
        paddingX:px-3,
        paddingY:py-10,

      }
      個別上書き可能 */}
      <body className=" mx-auto prose-lead:text-5xl prose-lead:font-bold leading-relaxed tracking-wider prose-headings: prose-h1:text-3xl prose-h1:font-bold prose-h2:text-xl prose-h2:font-semibold prose-p:leading-7 ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
