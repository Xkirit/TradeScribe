import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer grid grid-cols-2 gap-10 z-50 justify-items-center bg-green-950 w-full text-base-content p-10 ">
        
        <nav>
          <h6 className="footer-title text-lg sm:text-md font-bold mb-4">Services</h6>
          <a className="link link-hover block mb-2" href="#branding">Branding</a>
          <a className="link link-hover block mb-2" href="#design">Design</a>
          <a className="link link-hover block mb-2" href="#marketing">Marketing</a>
          <a className="link link-hover block mb-2" href='#advertising'>Advertisement</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Company</h6>
          <a className="link link-hover block mb-2" href='/About us'>About us</a>
          <a className="link link-hover block mb-2" href='/Contact'>Contact</a>
          <a className="link link-hover block mb-2" href='/Jobs'>Jobs</a>
          <a className="link link-hover block mb-2" href='/Press-kit'>Press kit</a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
          <a className="link link-hover block mb-2" href='/termsofuse'>Terms of use</a>
          <a className="link link-hover block mb-2" href='/Privacy'>Privacy policy</a>
          <a className="link link-hover block mb-2" href='/termsofuse'>Cookie policy</a>
        </nav>

        {/* Newsletter */}
        <div>
          <h6 className="footer-title text-lg font-bold mb-4">Newsletter</h6>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full sm:w-auto flex-grow mb-2 sm:mb-0 sm:mr-2"
              />
              <button className="btn btn-primary w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </fieldset>
        </div>
      </footer>
      </div>
   
  );
}

export default Footer;
