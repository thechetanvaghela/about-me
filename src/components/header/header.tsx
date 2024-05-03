import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
 
export const Header = component$(() => {

    const loc = useLocation();
    const pathname = loc.url.pathname   
  return (
    <header id="header" class={`${pathname != '/' ? 'header-top' : ''}`}>
    <div class="container">

      <h1><Link href="/">Chetan Vaghela</Link></h1>
      <h2>I'm a passionate <span>Wordpress Developer</span> from India</h2>

      <nav id="navbar" class="navbar">
        <ul>
          <li><Link class={`nav-link ${pathname == '/' ? 'active' : '' }`} href="/">Home</Link></li>
          <li><Link class={`nav-link ${pathname == '/about/' ? 'active' : '' }`} href={"/about"}>About</Link></li>
          <li><Link class={`nav-link ${pathname == '/resume/' ? 'active' : '' }`} href={"/resume"}>Resume</Link></li>
          <li><Link class={`nav-link ${pathname == '/services/' ? 'active' : '' }`} href={"/services"}>Services</Link></li>
          <li><Link class={`nav-link ${pathname == '/portfolio/' ? 'active' : '' }`} href={"/portfolio"}>Portfolio</Link></li>
          <li><Link class={`nav-link ${pathname == '/contact/' ? 'active' : '' }`} href={"/contact"}>Contact</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <div class="social-links">
        <a href="https://profiles.wordpress.org/thechetanvaghela/" target="_blank" class="wordpress"><i class="bi bi-wordpress"></i></a>
        <a href="https://wordpress.stackexchange.com/users/169856/chetan-vaghela" target="_blank" class="stack-overflow"><i class="bi bi-stack-overflow"></i></a>
        <a href="https://github.com/thechetanvaghela" target="_blank" class="github"><i class="bi bi-github"></i></a>
        <a href="https://www.facebook.com/chetan4121992" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/chetan._.vaghela/" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://mobile.twitter.com/chetan__vaghela" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
      </div>

    </div>
  </header>
  );
});