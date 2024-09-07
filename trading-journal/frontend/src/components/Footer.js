import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-950 text-base-content p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Services */}
        <nav>
          <h6 className="footer-title text-lg sm:text-md font-bold mb-4">Services</h6>
          <a className="link link-hover block mb-2">Branding</a>
          <a className="link link-hover block mb-2">Design</a>
          <a className="link link-hover block mb-2">Marketing</a>
          <a className="link link-hover block mb-2">Advertisement</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Company</h6>
          <a className="link link-hover block mb-2">About us</a>
          <a className="link link-hover block mb-2">Contact</a>
          <a className="link link-hover block mb-2">Jobs</a>
          <a className="link link-hover block mb-2">Press kit</a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
          <a className="link link-hover block mb-2">Terms of use</a>
          <a className="link link-hover block mb-2">Privacy policy</a>
          <a className="link link-hover block mb-2">Cookie policy</a>
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
      </div>
    </footer>
  );
}

export default Footer;
