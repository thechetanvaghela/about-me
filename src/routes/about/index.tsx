import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section id="about" class="about section-show">
        <div class="about-me container">

          <div class="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="/img/me.png" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>WordPress Developer</h3>
              <p class="fst-italic">
                WordPress/PHP core developer. Themes/plugins modification as per requirement. Development of WordPress Themes and Plugins from scratch.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>4 Dec 1992</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9574151248</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Surat, India</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>E-Mail:</strong> <span>ckvaghela92@gmail.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>

              <h3>Professional Summary</h3>
              <div class="row">
                <div class="more-about-self-wrap">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i>Having more than Eight years of experience as a PHP Developer Proficient in Core PHP and WordPress  Theme customization and Plugins development modification.</li>
                    <li><i class="bi bi-chevron-right"></i>Having more than one and half years of experience in Frontity, ReactJs, Next Js and Qwik Js.</li>
                    <li><i class="bi bi-chevron-right"></i>Solid knowledge in PHP with JavaScript, Ajax, Jquery, CSS, and HTML.</li>
                    <li><i class="bi bi-chevron-right"></i>Strong knowledge in MySQL with PHP-based Applications.</li>
                    <li><i class="bi bi-chevron-right"></i>WordPress plugins and Themes development, customization implementation.</li>
                    <li><i class="bi bi-chevron-right"></i>WooCommerce Customization.</li>
                    <li><i class="bi bi-chevron-right"></i>WordPress Rest API Development.</li>
                    <li><i class="bi bi-chevron-right"></i>Knowledge of Git.</li>
                    <li><i class="bi bi-chevron-right"></i>Custom Payment Gateway Integration(Stripe, ccavenue, Paypal).</li>
                    <li><i class="bi bi-chevron-right"></i>Worked on Sensei LMS customization </li>
                    <li><i class="bi bi-chevron-right"></i>Good communication, collaboration &amp; Team building skills</li>
                    <li><i class="bi bi-chevron-right"></i>Flexible enough to adapt new environment.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="skills container">

          <div class="section-title">
            <h2>Skills</h2>
          </div>

          <div class="row skills-content">

            <div class="col-lg-6">

              <div class="progress">
                <span class="skill">PHP <i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">WordPress/CMS <i class="val">95%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">WooCommerce <i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">WP REST API <i class="val">95%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>

            </div>
            <div class="col-lg-6">

              <div class="progress">
                <span class="skill">JavaScript <i class="val">85%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">ReactJs <i class="val">70%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">NextJs <i class="val">80%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">QwikJs <i class="val">80%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>

            </div>



          </div>

        </div>

        <div class="interests container">

          <div class="section-title">
            <h2>Interests</h2>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-4">
              <div class="icon-box">
                <i class="ri-brush-fill" style="color: #ffbb2c;"></i>
                <h3>Sketch</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="ri-bar-chart-box-line" style="color: #5578ff;"></i>
                <h3>Drawing</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="ri-movie-2-fill" style="color: #e80368;"></i>
                <h3>Movies</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div class="icon-box">
                <i class="ri-database-2-line" style="color: #e361ff;"></i>
                <h3>Cricket</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-music-fill" style="color: #47aeff;"></i>
                <h3>Music</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-road-map-line" style="color: #ffa76e;"></i>
                <h3>Travel</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-drop-line" style="color: #11dbcf;"></i>
                <h3>Swimming</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-book-3-fill" style="color: #4233ff;"></i>
                <h3>Reading</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-anchor-line" style="color: #b2904f;"></i>
                <h3>Video Games</h3>
              </div>
            </div>


          </div>

        </div>

      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "About - Chetan Vaghela",
  meta: [
    {
      name: "description",
      content: "Profession detail of Chetan Vaghela",
    },
  ],
};
