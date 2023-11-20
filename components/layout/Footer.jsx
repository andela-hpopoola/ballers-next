import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BallersLogo from '../utils/BallersLogo';
import { SOCIAL_MEDIA } from '@/utils/constants';

const Footer = () => (
  <footer className="footer">
    <div className="row">
      <div className="col-lg-9 col-sm-12 footer-content bg-dark-blue ps-lg-6">
        <div className="row m-0">
          <div className="col-lg-3 col-sm-6">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/vendors">All Vendors</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/about-us">About BALL</Link>
              </li>
              <li>
                <Link href="/about-us">Meet the Team</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h5 className="pb-2 pb-lg-0">Contact Us</h5>
            <ul className="list-inline">
              {Object.entries(SOCIAL_MEDIA).map(([media, url], index) => (
                <li
                  className="list-inline-item me-2 social-media-links"
                  key={index}
                >
                  <a href={url || '/'}>
                    <Image
                      width="32"
                      height="32"
                      src={`/img/icons/${media}.png`}
                      alt={media}
                    />
                  </a>{' '}
                </li>
              ))}
              <li>&nbsp;</li>
              <li>
                <Link
                  href="mailto:info@ballers.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@ballers.ng
                </Link>
              </li>
              <li>
                <Link href="tel:+2348076545543"> +2348076545543</Link>
              </li>
              <li>
                <Link href="tel:+2348094432231"> +2348094432231</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-12 bg-light-blue footer-content ps-lg-5">
        <BallersLogo className="ballers-logo-footer" width="86" height="55" />
        <p className="my-4 px-7 px-lg-0 pe-lg-6 footer-bottom-text">
          We make owning a home simpler and achievable.
        </p>
        <Link href="https://highrachy.com" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <h5 className="highrachy-text mb-5">
              <span>An initiative of</span>
              <Image
                src="/img/highrachy-logo.png"
                alt="highrachy logo"
                className="highrachy-logo-footer"
                width="86"
                height="25"
              />
            </h5>
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
