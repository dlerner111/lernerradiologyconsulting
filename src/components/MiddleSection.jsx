import React from "react";
import {
  CaseIssues,
  LitigationTopics,
  AiIssues,
  AttorneyResources,
  Services,
  RepresentativeMatters,
  EngagementSteps,
  AerospaceItems,
} from "../utils/data";

const baseCardItemClass =
  "rounded-[18px] border border-cardBorder bg-white px-[18px] py-4 text-[15px] text-cardText";

const MiddleSection = () => {
  return (
    <>
      <section className="border-b border-line bg-paperAlt py-12">
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] items-start gap-[42px] lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
              Consulting focus
            </div>
            <h2 className="mt-3 text-[clamp(30px,3.4vw,42px)] font-bold leading-[1.15]">
              Clear, credible radiology analysis for attorneys evaluating
              complex imaging issues
            </h2>
          </div>
          <div className="text-[18px] text-lightText">
            <p className="mb-4">
              In radiology malpractice litigation, outcomes often hinge on
              nuanced questions involving visibility, perceptual error,
              differential diagnosis, reporting language, communication urgency,
              follow-up recommendations, and whether an imaging record supports
              the allegations being made.
            </p>
            <p>
              My consulting practice is designed to help counsel understand the
              imaging evidence, the clinical context, and the radiologic
              standard of care with clarity, precision, and practical
              communication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))] rounded-[28px] border border-cardBorder bg-white p-[30px] shadow-[0_6px_20px_rgba(15,23,42,.05)]">
          <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
            Representative Case Issues Reviewed
          </div>
          <div className="mt-[22px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CaseIssues.map((item) => (
              <div className={baseCardItemClass} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))] rounded-[28px] border border-cardBorder bg-paperAlt p-[30px] shadow-[0_6px_20px_rgba(15,23,42,.05)]">
          <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
            Radiology Topics Frequently Involved in Litigation
          </div>
          <div className="mt-[22px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {LitigationTopics.map((item) => (
              <div className={baseCardItemClass} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))] rounded-[28px] border border-cardBorder bg-paperAlt p-[30px] shadow-[0_6px_20px_rgba(15,23,42,.05)]">
          <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
            Emerging Issues in Radiology AI Litigation
          </div>
          <p className="mt-[18px] text-[19px] text-headerText">
            Artificial intelligence is increasingly integrated into radiology
            workflow through detection tools, triage algorithms, and
            decision-support systems. These technologies are beginning to appear
            in malpractice litigation, raising new questions about standard of
            care, responsibility, and diagnostic reliability.
          </p>
          <div className="mt-[22px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {AiIssues.map((item) => (
              <div className={baseCardItemClass} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))] rounded-[28px] border border-cardBorder bg-white p-[30px] shadow-[0_6px_20px_rgba(15,23,42,.05)]">
          <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
            Attorney Resources
          </div>
          <p className="mt-[18px] text-[19px] text-headerText">
            Radiology malpractice matters often involve complex imaging
            interpretation, emerging AI-assisted workflow questions, and
            clinical decision issues. These resources help attorneys quickly
            understand key radiology concepts frequently involved in litigation.
          </p>
          <div className="mt-[22px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {AttorneyResources.map((item) => (
              <div className={baseCardItemClass} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" id="services">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
            Services
          </div>
          <h2 className="mt-3 text-[clamp(30px,3.4vw,42px)] font-bold leading-[1.15]">
            Expert witness and consulting services for radiology negligence
            matters
          </h2>
          <p className="mt-[18px] text-[19px] text-headerText">
            Designed for firms that value responsive communication, careful
            record analysis, and testimony-ready explanations of complex
            radiology issues.
          </p>
          <div className="mt-[22px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Services.map((service) => (
              <div
                className="rounded-3xl border border-cardBorder bg-white p-6 shadow-[0_6px_20px_rgba(15,23,42,.05)]"
                key={service.title}
              >
                <h3 className="text-[22px] font-bold leading-[1.15]">
                  {service.title}
                </h3>
                <p className="mt-[10px] text-bodyText">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-12">
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] items-start gap-[42px] lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
              Representative matters
            </div>
            <h2 className="mt-3 text-[clamp(30px,3.4vw,42px)] font-bold leading-[1.15]">
              Common radiology issues in expert review
            </h2>
            <div className="mt-[22px] grid gap-[14px] md:grid-cols-2">
              {RepresentativeMatters.map((item) => (
                <div className={baseCardItemClass} key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] bg-gradient-to-br from-dark to-dark2 p-[30px] text-white shadow-[0_22px_60px_rgba(15,23,42,.22)]">
            <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldLightText">
              Engagement process
            </div>
            {EngagementSteps.map((step, index) => (
              <div
                className="mt-[14px] flex items-start gap-[14px] rounded-[18px] border border-white/10 bg-white/5 p-[14px]"
                key={step}
              >
                <span className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-goldLightBg font-bold text-goldDarkText">
                  {index + 1}
                </span>
                <div>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] items-start gap-[42px] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[28px] border border-cardBorder bg-white p-[30px] shadow-[0_6px_20px_rgba(15,23,42,.05)]">
            <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
              Professional biography
            </div>
            <h2 className="mt-3 text-[clamp(30px,3.4vw,42px)] font-bold leading-[1.15]">
              David J. Lerner, MD
            </h2>
            <div className="mt-[10px] text-[17px] text-bodyText">
              Board Certified Diagnostic Radiologist - Body Imaging / Abdominal
              Imaging - Seattle, Washington
            </div>
            <div className="mt-4 space-y-4 text-[18px] text-lightText">
              <p>
                Dr. David J. Lerner is a board-certified diagnostic radiologist
                with approximately 10 years of active clinical practice and
                extensive experience interpreting high volumes of complex
                medical imaging. His subspecialty focus is Body Imaging /
                Abdominal Imaging, with daily practice across CT, MRI,
                ultrasound, and general radiography.
              </p>
              <p>
                Dr. Lerner previously served as Assistant Professor of Radiology
                at the University of Washington School of Medicine and as
                Assistant Professor of Radiology at the University of
                Missouri-Kansas City School of Medicine. In these roles he
                participated in clinical teaching, research, and physician
                education while maintaining a high-volume clinical imaging
                workload.
              </p>
              <p>
                He completed fellowship training in Abdominal / Body Imaging at
                the prestigious Mallinckrodt Institute of Radiology at
                Washington University in St. Louis. He completed residency at
                the University of Missouri-Kansas City School of Medicine,
                earned his medical degree from the University of Kansas School
                of Medicine, and received his undergraduate degree from Rutgers
                University.
              </p>
              <p>
                Dr. Lerner has received multiple awards for education and
                research and has been involved in aerospace-related medical and
                imaging projects, including collaborations connected to
                organizations such as NASA, SpaceX, and CNES. He is also a
                Fellow of the Aerospace Medical Association.
              </p>
              <p>
                A core strength of Dr. Lerner&apos;s consulting work is his
                ability to clearly explain complex radiologic findings and
                diagnostic decision-making to non-radiologists, attorneys,
                judges, and juries. His consulting practice focuses primarily on
                radiology malpractice matters, including Radiology AI Error &
                Misdiagnosis Review, requiring careful imaging analysis,
                chronology review, and clear explanation of radiologic standards
                of care.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-cardBorder bg-paperAlt p-[30px] shadow-[0_6px_20px_rgba(15,23,42,.05)]">
            <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
              Curriculum vitae
            </div>
            <h2 className="mt-3 text-[clamp(30px,3.4vw,42px)] font-bold leading-[1.15]">
              Credentials and background
            </h2>
            <p className="mt-[18px] text-[19px] text-headerText">
              Download a full curriculum vitae or a concise one-page expert
              profile for attorney review.
            </p>
            <div className="mt-7 flex flex-wrap gap-[14px]">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-buttonBorder bg-white px-5 text-[15px] font-bold text-ink shadow-[0_5px_18px_rgba(15,23,42,.06)] transition hover:-translate-y-px"
                href="/assets/lerner-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-buttonBorder bg-white px-5 text-[15px] font-bold text-ink shadow-[0_5px_18px_rgba(15,23,42,.06)] transition hover:-translate-y-px"
                href="/assets/expert-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                View Expert Profile
              </a>
            </div>
            <p className="mt-[14px] text-[19px] text-headerText">
              If a button does not open in your browser, right-click and choose
              "Open link in new tab" or "Save link as."
            </p>
            <div className="mt-6 rounded-[20px] border border-cardBorder bg-white p-5">
              <div className="font-bold text-ink">Credential highlights</div>
              <ul className="ml-[18px] mt-3 list-disc space-y-2 text-bulletText">
                <li>Board Certified Diagnostic Radiologist</li>
                <li>
                  Fellowship: Mallinckrodt Institute of Radiology, Washington
                  University in St. Louis
                </li>
                <li>
                  Former Assistant Professor: University of Washington School of
                  Medicine
                </li>
                <li>
                  Former Clinical Assistant Professor: University of
                  Missouri-Kansas City School of Medicine
                </li>
                <li>
                  Educator of the Year, University of Washington Radiology
                  Residency Program (2023, 2024)
                </li>
                <li>
                  Licensed in Washington, Kansas, Missouri, Arkansas, Wisconsin,
                  North Dakota, and Minnesota
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))] rounded-[28px] border border-cardBorder bg-paperAlt p-[30px] shadow-[0_6px_20px_rgba(15,23,42,.05)]">
          <div className="inline-block text-xs font-bold uppercase tracking-[.18em] text-goldDark">
            Aerospace and Space Medicine Imaging Research
          </div>
          <p className="mt-[18px] text-[19px] text-headerText">
            Dr. Lerner has participated in aerospace medical imaging research
            involving NASA, SpaceX, and other space medicine collaborators. His
            work includes imaging capability development for exploration-class
            missions and participation in research involving the first X-ray
            imaging experiments performed in space.
          </p>
          <div className="mt-[22px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {AerospaceItems.map((item) => (
              <div className={baseCardItemClass} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleSection;
