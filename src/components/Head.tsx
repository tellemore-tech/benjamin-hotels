export const Head = ({ children }: any) => {
  return (
    <>
      {children}
      <link rel="stylesheet" href="https://use.typekit.net/jsu0tuv.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Actor&display=swap"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#84421e"
      />
      <meta name="msapplication-TileColor" content="#84421e" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};
