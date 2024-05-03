import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section id="contact" class="contact section-show">
      <div class="container">

<div class="section-title">
  <h2>Contact</h2>
  <p>Contact Me</p>
</div>

<div class="row mt-2">

  <div class="col-md-6 d-flex align-items-stretch">
    <div class="info-box">
      <i class="bx bx-envelope"></i>
      <h3>Email Me</h3>
      <p>ckvaghela92@gmail.com</p>
    </div>
  </div>

  <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
    <div class="info-box">
      <i class="bx bx-share-alt"></i>
      <h3>Social Profiles</h3>
      <div class="social-links">
        <a href="https://profiles.wordpress.org/thechetanvaghela/" target="_blank" class="wordpress"><i class="bi bi-wordpress"></i></a>
        <a href="https://wordpress.stackexchange.com/users/169856/chetan-vaghela" target="_blank" class="stack-overflow"><i class="bi bi-stack-overflow"></i></a>
        <a href="https://github.com/thechetanvaghela" target="_blank" class="github"><i class="bi bi-github"></i></a>
        <a href="https://www.facebook.com/chetan4121992" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/chetan._.vaghela/" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://mobile.twitter.com/chetan__vaghela" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
      </div>
    </div>
  </div>
</div>
</div>
</section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contact - Chetan Vaghela",
  meta: [
    {
      name: "description",
      content: "Reach to me - Chetan Vaghela",
    },
  ],
};
