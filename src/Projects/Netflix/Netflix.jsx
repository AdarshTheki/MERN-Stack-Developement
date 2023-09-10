import React from "react";
import "./netflix.css";
import enjoyTV from "../assets/enjoy.Tv.png";
import mobile_0819 from "../assets/mobile-0819.jpg";
import device_pile from "../assets/device-pile-in.png";
import children from "../assets/children.png";
import Netflix_Logo from "../assets/Netflix_Logo_PMS.png";

const Netflix = () => {
  return (
    <>
      <div className='header'>
        <nav>
          <img src={Netflix_Logo} alt={Netflix_Logo} className='logo' width='100' />
          <div>
            <button className='language-btn'>
              <i className='fa-solid fa-globe-asia'></i>
              &nbsp; English
              <i className='fa-solid fa-chevron-down'></i>
            </button>
            <button>
              Sign In &nbsp;
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        </nav>

        {/* <!-- Header Container --> */}
        <div className='header-container'>
          <h1>Unlimited Movie, TV shows and more.</h1>
          <h3>Watch anywhere, Cancel anytime.</h3>
          <p>
            Read to watch ? Enter your email to create or restart your
            membership.
          </p>
          <form className='email-signup'>
            <input type='email' placeholder='Email address' required />
            <button type='submit'>
              Get Started <i className='fa-solid fa-chevron-right'></i>
            </button>
          </form>
        </div>
      </div>

      <hr />

      <div className='feature'>
        <div className='row'>
          <div className='text-col'>
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className='img-col'>
            <img src={enjoyTV} alt={enjoyTV} />
          </div>
        </div>
      </div>

      <hr />

      <div className='feature'>
        <div className='row'>
          <div className='img-col'>
            <img src={mobile_0819} alt={mobile_0819} />
          </div>
          <div className='text-col'>
            <h2>Download your shows to watch offline.</h2>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className='feature'>
        <div className='row'>
          <div className='text-col'>
            <h2>Watch everywhere.</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className='img-col'>
            <img src={device_pile} alt={device_pile} />
          </div>
        </div>
      </div>

      <hr />

      <div className='feature'>
        <div className='row'>
          <div className='img-col'>
            <img src={children} alt={children} />
          </div>
          <div className='text-col'>
            <h2>Create profiles for children.</h2>
            <p>
              Send children on adventures with their favorite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className='faq'>
        <h2>Frequently Asked Questions</h2>
        <ul className='according'>
          <li>
            <input type='checkbox' name='according' id='first' />
            <label htmlFor='first'>What is Netflix?</label>
            <div className='content'>
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
            <label htmlFor='second'>How much does Netflix cost?</label>
            <div className='content'>
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
            <label htmlFor='third'>Where can I watch?</label>
            <div className='content'>
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
            <label htmlFor='forth'>Where can I watch?</label>
            <div className='content'>
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
            <label htmlFor='fifth'>How do I cancel</label>
            <div className='content'>
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
            <label htmlFor='sixth'>What can I watch on Netflix?</label>
            <div className='content'>
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
            <label htmlFor='seventh'>Is Netflix good for kids?</label>
            <div className='content'>
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
        <form className='email-signup'>
          <input type='email' placeholder='Email address' required />
          <button type='submit'>
            Get Started <i className='fa-solid fa-chevron-right'></i>
          </button>
        </form>
      </div>

      <hr />

      <div className='footer'>
        <h2>
          Questions? And call to{" "}
          <a href='tel:+918788xxxxxx'>
            Click here <i className='fa-solid fa-chevron-right'></i>
          </a>
        </h2>
        <div className='footer-row'>
          <div className='footer-col'>
            <a href='/'>FAQ</a>
            <a href='/'>Gift Card Terms</a>
            <a href='/'>Help Centre</a>
            <a href='/'>Account</a>
          </div>
          <div className='footer-col'>
            <a href='/'>Media Centre</a>
            <a href='/'>Investor Relations</a>
            <a href='/'>Jobs</a>
            <a href='/'>Ways to Watch</a>
          </div>
          <div className='footer-col'>
            <a href='/'>Terms of Use</a>
            <a href='/'>Privacy</a>
            <a href='/'>Cookie Preferences</a>
            <a href='/'>Corporate Information</a>
          </div>
          <div className='footer-col'>
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
