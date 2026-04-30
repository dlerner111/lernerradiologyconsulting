import React from "react";

const Footer = () => {
  return (
    <>
      <section
        className="bg-gradient-to-br from-dark to-dark2 py-12 text-white"
        id="contact"
      >
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldLightText">
            Contact
          </div>
          <h2 className="mt-3 text-[clamp(30px,3.4vw,42px)] font-bold leading-[1.15]">
            Request a confidential case consultation
          </h2>
          <div className="mt-7">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-gold px-5 text-[15px] font-bold text-footerButtonText shadow-[0_10px_28px_rgba(186,148,82,.22)] transition hover:-translate-y-px"
              href="mailto:dlerner111@gmail.com"
            >
              dlerner111@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
