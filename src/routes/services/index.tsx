import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section id="services" class="services section-show">
    <div class="container">

      <div class="section-title">
        <h2>Services</h2>
        <p>My Services</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="icon-box">
            <div class="icon"><i class="bx bxl-dribbble"></i></div>
            <h4>Theme Development</h4>
            <p>Creating custom WordPress themes to meet client needs and enhance website functionality.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-file"></i></div>
            <h4>Plugin Development</h4>
            <p>Designing and developing custom WordPress plugins to extend website functionality and meet client requirements.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-tachometer"></i></div>
            <h4>WooCommerce Customization</h4>
            <p>Customizing WooCommerce to tailor online stores to specific client needs and optimize user experience.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-world"></i></div>
            <h4>API Development</h4>
            <p>Building robust REST APIs to facilitate seamless communication between web applications and enable efficient data exchange.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-slideshow"></i></div>
            <h4>PHP Applications</h4>
            <p>Developing efficient PHP applications to meet client requirements and deliver seamless user experiences across web platforms.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-arch"></i></div>
            <h4>Speed Optimization</h4>
            <p>Implementing strategies to optimize website speed and enhance user experience, focusing on improving Core Web Vitals for optimal performance and user satisfaction.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Services - Chetan Vaghela",
  meta: [
    {
      name: "description",
      content: "Services provided by Chetan Vaghela",
    },
  ],
};
