import React from "react";
import { HeaderItems } from "../utils/data";

const Header = () => {
  return (
    <>
      <header
        className="border-b border-line"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(186,148,82,.18), transparent 34%), radial-gradient(circle at bottom right, rgba(15,23,42,.06), transparent 32%), #fff",
        }}
      >
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] items-start gap-[42px] py-[72px] lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="inline-block rounded-full border border-goldTabBorder bg-goldTabBg px-3 py-[7px] text-xs font-bold uppercase tracking-[.18em] text-goldDark">
              Radiology Malpractice Consulting
            </div>
            <div className="mt-[22px] text-[13px] font-bold uppercase tracking-[.18em] text-nameText">
              David J. Lerner, MD
            </div>
            <div className="mt-[6px] text-lg text-muted">
              Board Certified Diagnostic Radiologist - Body Imaging / Abdominal
              Imaging
            </div>
            <h1 className="mt-4 text-[clamp(40px,5vw,62px)] font-bold leading-[1.15]">
              Independent radiology consulting for medical malpractice and
              AI-related imaging disputes
            </h1>
            <p className="mt-[22px] max-w-[820px] text-[19px] text-headerText">
              Independent, clinically grounded analysis for attorneys handling
              radiology malpractice matters, body imaging disputes, and emerging
              cases involving AI-assisted radiology error and misdiagnosis.
            </p>
            <div className="mt-7 flex flex-wrap gap-[14px]">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-dark px-5 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(15,23,42,.18)] transition hover:-translate-y-px"
                href="#contact"
              >
                Request Confidential Consultation
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-buttonBorder bg-white px-5 text-[15px] font-bold text-ink shadow-[0_5px_18px_rgba(15,23,42,.06)] transition hover:-translate-y-px"
                href="#services"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-[30px] grid gap-[14px] md:grid-cols-2">
              {HeaderItems.map((item) => (
                <div
                  className="rounded-[18px] border border-cardBorder bg-white/90 px-4 py-[14px] text-[15px] text-muted shadow-[0_4px_16px_rgba(15,23,42,.05)]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-cardBorder bg-white p-[18px] shadow-[0_20px_70px_rgba(15,23,42,.12)]">
            <img
              src="/images/headshot.jpg"
              alt="David J. Lerner, MD headshot"
              className="h-auto w-full rounded-[20px]"
            />
            <div className="mt-[14px] text-center text-[15px] text-bodyText">
              <div className="mb-1 text-lg font-bold text-ink">
                David J. Lerner, MD
              </div>
              <div>Board Certified Diagnostic Radiologist</div>
              <div>Body Imaging / Abdominal Imaging</div>
              <div className="mt-2">Former Assistant Professor</div>
              <div>University of Washington School of Medicine</div>
              <div>University of Missouri-Kansas City School of Medicine</div>
              <div>Seattle, Washington</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
