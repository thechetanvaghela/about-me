import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        {/* <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" /> */}
        <link href="/vendor/remixicon/remixicon.css" rel="stylesheet" />
        {/* <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" /> */}
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />

        <script src="/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* <script src="/vendor/glightbox/js/glightbox.min.js"></script> */}
        <script src="/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        {/* <script src="/vendor/swiper/swiper-bundle.min.js"></script> */}
        <script src="/vendor/waypoints/noframework.waypoints.js"></script>
        {/* <script src="/vendor/php-email-form/validate.js"></script> */}

        <script src="/js/main.js"></script>
      </body>
    </QwikCityProvider>
  );
});
