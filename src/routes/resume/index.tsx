import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section id="resume" class="resume section-show">
        <div class="container">

          <div class="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Education</h3>
              <div class="resume-item pb-0">
                <h4>BACHELOR OF COMPUTER APPLICATION</h4>
                <h5>2010 - 2013</h5>
                <p><em>Geetanjali College, Rajkot, Gujarat</em></p>
              </div>
              <div class="resume-item pb-0">
                <h4>MASTER OF SCIENCE INFORMATION TECHNOLOGY</h4>
                <h5>2013 - 2015</h5>
                <p><em>Department of Computer Science, Saurashtra University</em></p>
              </div>

              <h3 class="resume-title">Achievement</h3>
              <div class="resume-item">
                <h4>STAR PERFORMER</h4>
                <h5>2019 - January</h5>
                <p><em>August Infotech Pvt. Ltd</em></p>
              </div>
              <h3 class="resume-title">WordPress Development Stack Exchange</h3>
              <div class="resume-item">
                <a href="https://wordpress.stackexchange.com/users/169856/chetan-vaghela" target="_blank"><img src="https://stackexchange.com/users/flair/16120321.png?theme=dark" width="208" height="58" class="wpct-wpse-image" alt="profile for Chetan Vaghela at WordPress Development Stack Exchange, Q&amp;A for WordPress developers and administrators" title="profile for Chetan Vaghela at WordPress Development Stack Exchange, Q&amp;A for WordPress developers and administrators" /></a>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>TECH LEAD</h4>
                <h5>2022 to Present</h5>
                <p><em>Aureate Lab Surat</em></p>
                <div>
                  <ul>
                    <li>Led and developed WordPress projects, providing strategic guidance and expertise throughout the development process.</li>
                    <li>Created CMS projects using Advanced Custom Fileds.</li>
                    <li>Contributed to a Frontity project integrated with REST API WordPress, enhancing website functionality and user experience through efficient development practices.</li>
                    <li>Developed projects utilizing React, Next.js, and Qwik.js, showcasing proficiency in cutting-edge web development frameworks.</li>
                  </ul>
                </div>
              </div>
              <div class="resume-item">
                <h4>ASSISTANT TEAM LEAD WEBSITE</h4>
                <h5>2021 to 2022</h5>
                <p><em>CodeWorks Consulting, Surat</em></p>
                <div>
                  <ul>
                    <li>Managed WordPress development Team and handled projects.</li>
                    <li>Completed more than 5 projects in minimum time of periods.</li>
                  </ul>
                </div>
              </div>
              <div class="resume-item">
                <h4>SR. PHP (WORDPRESS DEVELOPER)</h4>
                <h5>2019 - 2021</h5>
                <p><em>Dynamic Dreamz, Surat</em></p>
                <div>
                  <ul>
                    <li>Worked on CRM project which developed in WordPress with an external API database. Implement process of  Insert/update from CRM to API for company,Contacts and task data.</li>
                    <li>PHP IMAP module implementation which updates mail data in real time from crm to  gmail account. And syncing inbox and sent items mail from gmail to the CRM database. - Company, contacts, mail data data syncing process using script by cron jobs</li>
                  </ul>
                </div>
              </div>
              <div class="resume-item">
                <h4>JR. WORDPRESS DEVELOPER</h4>
                <h5>2016- 2019</h5>
                <p><em>August Infotech, Surat</em></p>
                <div>
                  <ul>
                    <li>Worked on various CMS projects</li>
                    <li>Worked on project which is integrated with wordpress and solr for old/new cars information.  Worked for cars filters data using solr query</li>
                    <li>Implemented compare cars module, AMP for blog posts and Google Ads</li>
                  </ul>
                </div>
              </div>
              <div class="resume-item">
                <h4>Jr. WordPress Developer</h4>
                <h5>2015 - 2016</h5>
                <p><em>SETWINGS, Surat</em></p>
                <div>
                  <ul>
                    <li>Worked on a WordPress project with multisite functionality, implementing automation to create subdomains based on field information and selected themes.</li>
                  </ul>
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
  title: "Resume - Chetan Vaghela",
  meta: [
    {
      name: "description",
      content: "Resume of Chetan Vaghela",
    },
  ],
};
