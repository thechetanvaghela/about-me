import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section id="portfolio" class="portfolio section-show">
        <div class="container">

          <div class="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          {/* <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-plugin">Plugins</li>
                <li data-filter=".filter-web">Website</li>
              </ul>
            </div>
          </div> */}

          <div class="row portfolio-container">

            
          <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/categories-status.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Categories Status</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/categories-status/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/cf7-visited-pages-url-tracking.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>CF7 Visited Pages URL Tracking</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/cf7-visited-pages-url-tracking/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/comment-form-validation-and-customization.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Comment form validation and Customization</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/comment-form-validation-and-customization/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/rate-the-site-experience.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Rate the Site experience</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/rate-the-site-experience/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/auto-update-image-attributes-from-filename.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Auto Update Image Attributes From Filename</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/auto-update-image-attributes-from-filename/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/manageremove-version-number-from-css-js.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Manage/Remove version number from CSS & JS</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/manageremove-version-number-from-css-js/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/bulk-post-status-update.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Bulk Post Status Update</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/bulk-post-status-update/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/disable-wordpress-updates.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Disable Updates by CV</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/disable-updates-by-cv/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/woo-cart-popup.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Woo Cart Popup</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/woo-cart-popup/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/common-tools-for-site.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Woo Cart Popup</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/common-tools-for-site/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/WP-login-register-flow.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>WP Login Register Flow</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/wp-login-register-flow/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-plugin">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/WP-Users-Login-History.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>WP Users Login History</h4>
                  <p>Plugin</p>
                  <div class="portfolio-links">
                    <a href="https://wordpress.org/plugins/wp-users-login-history/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/wheels-ca.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Wheels.ca</h4>
                  <p>Website</p>
                  <div class="portfolio-links">
                    <a href="https://www.wheels.ca/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/my-smile-makeover.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>My Smile Makeover</h4>
                  <p>Website</p>
                  <div class="portfolio-links">
                    <a href="https://mysmilemakeover.co.uk/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img src="/img/portfolio/carfind.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>CarFind</h4>
                  <p>Website</p>
                  <div class="portfolio-links">
                    <a href="https://autocatch.com/carfind/" target="_blank" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
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
  title: "Portfolio - Chetan Vaghela",
  meta: [
    {
      name: "description",
      content: "Explore my portfolio of developed projects. Dive into my work to see the projects I've brought to life.",
    },
  ],
};
