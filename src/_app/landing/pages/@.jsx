/** @jsx h */
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

export function App() {
    return (
      <html>
        <head>
          <title>Hello from JSX</title>
          <link rel="stylesheet" href="output.css"/>
        </head>
        <body class="w-screen h-screen bg-black">
          <h1 class="text-7xl text-white">Should have done this last time now to test it later</h1>
        </body>
      </html>
    );
  }

const html_jsx = () => {
    const html = renderSSR(<App />);
    return new Response(html, {
      headers: {
        "content-type": "text/html",
      },
    });
}

export default html_jsx;
