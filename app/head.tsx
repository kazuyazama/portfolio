import Gtag from "@/components/Gtag";
import Script from "next/script";

export default function Head() {
  const title = "Kazuya Zamaのポートフォリオ";
  const description =
    "こんにちは。私はwebサイトとwebアプリケーションを構築するフロントエンドエンジニアです。エンジニア歴は2年です。新しい技術を学ぶことが好きで現在の開発では主にjavascript FWのReactとNEXT.jsを使用しています。";
  const favicon = "/KazuyaZama-favicon.svg";
  const image = "/ogpImage.png";
  const url = "https://kazuya-zama.vercel.app/";
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@restarts_kz" />

      <link
        rel="apple-touch-icon-precomposed"
        sizes="180x180"
        href="/icon-180x180.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="360x360"
        href="/icon-360x360.png"
      />
      <link rel="icon" href={favicon} />
      <link rel="canonical" href={url} />
    </>
  );
}
