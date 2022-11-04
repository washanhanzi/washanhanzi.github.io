import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { Head } from './components/head/head';
import { QwikPartytown } from './components/partytown/partytown';


import './global.css';

export default component$(() => {
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="A personal blog about programming and writing" />
        <QwikPartytown forward={["dataLayer.push"]} />;
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-FSZE01YQC3"
        />;
        <Head />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
