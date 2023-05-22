import React from "react";
import "./Style/netflix.css";
import enjoyTV from "./assets/enjoy.Tv.png";
import mobile_0819 from "./assets/mobile-0819.jpg";
import device_pile from "./assets/device-pile-in.png";
import children from "./assets/children.png";
import Netflix_Logo from "./assets/Netflix_Logo_PMS.png";

const Netflix = () => {
  return (
    <>
      <div class='header'>
        <nav>
          <img src={Netflix_Logo} alt={Netflix_Logo} class='logo' width='100' />
          <div>
            <button class='language-btn'>
              <i class='fa-solid fa-globe-asia'></i>
              &nbsp; English
              <i class='fa-solid fa-chevron-down'></i>
            </button>
            <button>
              Sign In &nbsp;
              <i class='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        </nav>

        {/* <!-- Header Container --> */}
        <div class='header-container'>
          <h1>Unlimited Movie, TV shows and more.</h1>
          <h3>Watch anywhere, Cancel anytime.</h3>
          <p>
            Read to watch ? Enter your email to create or restart your
            membership.
          </p>
          <form class='email-signup'>
            <input type='email' placeholder='Email address' required />
            <button type='submit'>
              Get Started <i class='fa-solid fa-chevron-right'></i>
            </button>
          </form>
        </div>
      </div>

      <hr />

      <div class='feature'>
        <div class='row'>
          <div class='text-col'>
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div class='img-col'>
            <img src={enjoyTV} alt={enjoyTV} />
          </div>
        </div>
      </div>

      <hr />

      <div class='feature'>
        <div class='row'>
          <div class='img-col'>
            <img src={mobile_0819} alt={mobile_0819} />
          </div>
          <div class='text-col'>
            <h2>Download your shows to watch offline.</h2>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div class='feature'>
        <div class='row'>
          <div class='text-col'>
            <h2>Watch everywhere.</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div class='img-col'>
            <img src={device_pile} alt={device_pile} />
          </div>
        </div>
      </div>

      <hr />

      <div class='feature'>
        <div class='row'>
          <div class='img-col'>
            <img src={children} alt={children} />
          </div>
          <div class='text-col'>
            <h2>Create profiles for children.</h2>
            <p>
              Send children on adventures with their favorite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div class='faq'>
        <h2>Frequently Asked Questions</h2>
        <ul class='according'>
          <li>
            <input type='checkbox' name='according' id='first' />
            <label for='first'>What is Netflix?</label>
            <div class='content'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, atque ipsam? Iusto ipsa doloremque omnis velit
                perspiciatis sapiente expedita est fuga, obcaecati quam maxime
                adipisci cumque! Provident in eaque ea!
              </p>
            </div>
          </li>

          <li>
            <input type='checkbox' name='according' id='second' />
            <label for='second'>How much does Netflix cost?</label>
            <div class='content'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, atque ipsam? Iusto ipsa doloremque omnis velit
                perspiciatis sapiente expedita est fuga, obcaecati quam maxime
                adipisci cumque! Provident in eaque ea!
              </p>
            </div>
          </li>

          <li>
            <input type='checkbox' name='according' id='third' />
            <label for='third'>Where can I watch?</label>
            <div class='content'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, atque ipsam? Iusto ipsa doloremque omnis velit
                perspiciatis sapiente expedita est fuga, obcaecati quam maxime
                adipisci cumque! Provident in eaque ea!
              </p>
            </div>
          </li>

          <li>
            <input type='checkbox' name='according' id='forth' />
            <label for='forth'>Where can I watch?</label>
            <div class='content'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, atque ipsam? Iusto ipsa doloremque omnis velit
                perspiciatis sapiente expedita est fuga, obcaecati quam maxime
                adipisci cumque! Provident in eaque ea!
              </p>
            </div>
          </li>

          <li>
            <input type='checkbox' name='according' id='fifth' />
            <label for='fifth'>How do I cancel</label>
            <div class='content'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, atque ipsam? Iusto ipsa doloremque omnis velit
                perspiciatis sapiente expedita est fuga, obcaecati quam maxime
                adipisci cumque! Provident in eaque ea!
              </p>
            </div>
          </li>

          <li>
            <input type='checkbox' name='according' id='sixth' />
            <label for='sixth'>What can I watch on Netflix?</label>
            <div class='content'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, atque ipsam? Iusto ipsa doloremque omnis velit
                perspiciatis sapiente expedita est fuga, obcaecati quam maxime
                adipisci cumque! Provident in eaque ea!
              </p>
            </div>
          </li>

          <li>
            <input type='checkbox' name='according' id='seventh' />
            <label for='seventh'>Is Netflix good for kids?</label>
            <div class='content'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, atque ipsam? Iusto ipsa doloremque omnis velit
                perspiciatis sapiente expedita est fuga, obcaecati quam maxime
                adipisci cumque! Provident in eaque ea!
              </p>
            </div>
          </li>
        </ul>
        {/* <!-- contact Form --> */}
        <p>
          Read to watch ? Enter your email to create or restart your membership.
        </p>
        <form class='email-signup'>
          <input type='email' placeholder='Email address' required />
          <button type='submit'>
            Get Started <i class='fa-solid fa-chevron-right'></i>
          </button>
        </form>
      </div>

      <hr />

      <div class='footer'>
        <h2>
          Questions? And call to{" "}
          <a href='tel:+918788xxxxxx'>
            Click here <i class='fa-solid fa-chevron-right'></i>
          </a>
        </h2>
        <div class='footer-row'>
          <div class='footer-col'>
            <a href='/'>FAQ</a>
            <a href='/'>Gift Card Terms</a>
            <a href='/'>Help Centre</a>
            <a href='/'>Account</a>
          </div>
          <div class='footer-col'>
            <a href='/'>Media Centre</a>
            <a href='/'>Investor Relations</a>
            <a href='/'>Jobs</a>
            <a href='/'>Ways to Watch</a>
          </div>
          <div class='footer-col'>
            <a href='/'>Terms of Use</a>
            <a href='/'>Privacy</a>
            <a href='/'>Cookie Preferences</a>
            <a href='/'>Corporate Information</a>
          </div>
          <div class='footer-col'>
            <a href='/'>Contact Us</a>
            <a href='/'>Speed Test</a>
            <a href='/'>Legal Notices</a>
            <a href='/'>Only on Netflix</a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Netflix;
