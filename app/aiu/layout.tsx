
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

        <><header>ヘッド</header><main> {children}</main><footer>降った</footer></>
   
  );
}