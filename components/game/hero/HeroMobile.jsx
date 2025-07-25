// components/HeroMobile.js
import { HeroCtaButton } from './HeroDesktop';

export default function HeroMobile() {
  return (
    <section className="hero-mob">
      {/* navy torn card + content */}
      <div className="hero-mob__card">
        <h1 className="hero__title hero-mob__title">
          Welcome to the <span className="fw-bold">BALLERS</span>
          <br />
          real&nbsp;estate&nbsp;challenge
        </h1>

        <div className="hero__divider my-3">
          <span className="hero__divider-line" />
          <span className="hero__divider-diamond" />
          <span className="hero__divider-line" />
        </div>

        <p className="hero__copy mb-3">
          See how close you are to owning a home in Lagos and get a simple plan
          to level up like a true BALLER.
        </p>

        <div className="hero__meta fw-bold small d-flex align-items-center">
          <span className="text-uppercase">11&nbsp;Questions</span>
          <div className="hero__dots ms-2">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/game/house-coins.png"
          alt="House Coins"
          className="hero-mob__coins"
          aria-hidden="true"
        />
      </div>

      {/* Start Challenge button */}
      <div className="hero-mob__btn-wrapper">
        {/* CTA */}
        <HeroCtaButton />
      </div>
    </section>
  );
}
