import { createFileRoute } from "@tanstack/react-router";

/**
 * Homepage.
 *
 * Ported 4 Aug 2026 from the static design export. Two things worth knowing
 * before editing:
 *
 * 1. The page CSS lives in PAGE_CSS below, not in styles.css. styles.css is
 *    Tailwind + shadcn tokens and is still used by the 404 and error screens in
 *    __root.tsx, so it cannot be replaced wholesale. This block renders inside
 *    <body>, after the stylesheet <link> in <head>, so on equal specificity it
 *    wins. That ordering is load-bearing.
 *
 * 2. The (313) 555-0148 number inside the phone mockup is DELIBERATE and must
 *    stay. It belongs to "Redford Auto Care", the fictional demo shop. 555-01xx
 *    is the block reserved for fiction precisely so nobody gets cold-called by
 *    a stranger who saw it in an ad. The real number, (248) 730-0377, is in the
 *    header, the contact section and the footer.
 */

const TITLE = "Singh Dynamics | One-page websites for Detroit auto shops";
const DESCRIPTION =
  "I build your shop's one-page website before you pay for it. You look at it, then you decide. $400 to $700, Metro Detroit.";
const URL = "https://singhdynamics.com/";
const EMAIL = "sarab@singhdynamics.com";
const TEL = "+12487300377";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Your shop's website, finished before you pay for it." },
      { property: "og:description", content: "One-page sites and Google Business Profiles for repair shops around Detroit." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:site_name", content: "Singh Dynamics" },
      { property: "og:image", content: "https://singhdynamics.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Your shop's website, finished before you pay for it." },
      { name: "twitter:description", content: "One-page sites and Google Business Profiles for repair shops around Detroit." },
      // Overrides the cream in __root.tsx. This design is near-white.
      { name: "theme-color", content: "#fbfbfd" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Singh Dynamics",
          description:
            "One-page websites and Google Business Profile management for auto repair shops in Metro Detroit.",
          telephone: "+1-248-730-0377",
          email: EMAIL,
          url: URL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Novi",
            addressRegion: "MI",
            addressCountry: "US",
          },
          areaServed: "Metro Detroit, Michigan",
        }),
      },
    ],
  }),
});

const PAGE_CSS = `
  /* ---- undo the Work Order theme -------------------------------------------
     styles.css still ships, because __root.tsx's 404 and error screens are
     built on its Tailwind tokens and would lose all styling without it. But its
     @layer base sets h1..h3 to Oswald, 700, uppercase, which is the old design.
     This page is sentence case in the body face, and its own heading rules only
     declare size, weight and tracking, so there is nothing here to override the
     inherited family or the uppercasing. They have to be undone by name.
     Declared early on purpose: the design's own h1/h2 rules come later in this
     block and win for the properties they actually set. ------------------- */
  h1, h2, h3 {
    font-family: inherit;
    text-transform: none;
    letter-spacing: normal;
    line-height: 1.15;
    font-weight: 600;
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
  body {
    margin: 0;
    background: #fbfbfd;
    color: #1d1d1f;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', system-ui, sans-serif;
    overflow-x: hidden;
  }
  a { color: #0a63d6; text-decoration: none; }
  a:hover { color: #08509f; }

  /* ---- design tokens: mobile first, overridden at breakpoints ---- */
  :root {
    --accent: #0a63d6;
    --padX: 24px;
    --secY: 96px;
    --heroTop: 52px;
    --heroGap: 48px;
    --h1: 40px;
    --h2: 28px;
    --lead: 17px;
    --stepsGap: 44px;
    --gridGap: 34px;
    --screenW: 260px;
    --screenH: 563px;
    --screenRadius: 34px;
    --phoneScale: 0.6667;
    --framePad: 11px;
    --frameRadius: 45px;
  }
  @media (min-width: 768px) {
    :root {
      --padX: 48px; --secY: 116px; --heroTop: 64px;
      --h1: 52px; --h2: 32px; --lead: 19px;
      --screenW: 290px; --screenH: 628px; --screenRadius: 38px;
      --phoneScale: 0.7436;
    }
  }
  @media (min-width: 1024px) {
    :root {
      --secY: 136px; --heroTop: 72px; --heroGap: 80px;
      --h1: 56px; --h2: 34px;
      --stepsGap: 56px; --gridGap: 52px 64px;
      --screenW: 320px; --screenH: 693px; --screenRadius: 42px;
      --phoneScale: 0.8205;
      --framePad: 13px; --frameRadius: 55px;
    }
  }

  .wrap { max-width: 1440px; margin: 0 auto; padding-left: var(--padX); padding-right: var(--padX); }
  .narrow { max-width: 940px; margin: 0 auto; padding-left: var(--padX); padding-right: var(--padX); }
  .sec { padding-top: var(--secY); }

  header {
    max-width: 1440px; margin: 0 auto;
    padding: 22px var(--padX);
    display: flex; align-items: center; justify-content: space-between;
  }
  .brand { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; }
  .headerTel { font-size: 14px; color: #6e6e73; }
  .headerTel:hover { color: #1d1d1f; }

  /* ---- hero ---- */
  .hero {
    padding-top: var(--heroTop);
    display: flex; flex-direction: column; align-items: center;
    gap: var(--heroGap);
  }
  .heroText {
    flex: 1 1 auto; max-width: 100%;
    text-align: center;
    display: flex; flex-direction: column; align-items: center;
  }
  h1 {
    margin: 0; font-size: var(--h1); line-height: 1.04;
    letter-spacing: -0.03em; font-weight: 600; text-wrap: pretty;
  }
  .lead {
    margin: 22px 0 0; max-width: 420px;
    font-size: var(--lead); line-height: 1.5; color: #6e6e73; text-wrap: pretty;
  }
  .cta {
    display: inline-block; margin-top: 32px;
    background: var(--accent); color: #fff;
    font-size: 17px; font-weight: 600;
    padding: 16px 32px; border-radius: 999px;
  }
  .cta:hover { opacity: 0.86; color: #fff; }
  .ctaNote { margin-top: 14px; font-size: 14px; color: #6e6e73; }

  @media (min-width: 768px) { .heroText { max-width: 600px; } }
  @media (min-width: 1024px) {
    .hero { flex-direction: row; align-items: center; }
    .heroText { max-width: 640px; text-align: left; align-items: flex-start; }
  }

  /* ---- phone mockup ---- */
  .phoneWrap { flex: 0 0 auto; display: flex; justify-content: center; }
  .frame { padding: var(--framePad); background: #1d1d1f; border-radius: var(--frameRadius); }
  .screen {
    width: var(--screenW); height: var(--screenH);
    border-radius: var(--screenRadius); overflow: hidden; background: #fff;
  }
  .screenInner {
    width: 390px; transform: scale(var(--phoneScale));
    transform-origin: top left; background: #fff; color: #1d1d1f;
  }
  .statusBar { height: 42px; display: flex; align-items: center; justify-content: space-between; padding: 0 26px; font-size: 14px; font-weight: 600; }
  .battery { display: block; width: 23px; height: 11px; border: 1.5px solid #1d1d1f; border-radius: 3px; opacity: 0.8; }
  .demoNav { display: flex; align-items: center; justify-content: space-between; padding: 6px 20px 14px; }
  .demoBrand { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; }
  .demoCall { font-size: 13px; font-weight: 600; color: #fff; background: #b3400f; padding: 8px 16px; border-radius: 999px; }
  .ph {
    background: repeating-linear-gradient(135deg, #ececef 0 7px, #f5f5f7 7px 14px);
    display: flex; align-items: flex-end; padding: 12px 14px;
  }
  .phLabel { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; letter-spacing: 0.12em; color: #8a8a8f; }
  .demoBody { padding: 26px 20px 0; }
  .demoH1 { font-size: 30px; line-height: 1.1; letter-spacing: -0.02em; font-weight: 700; text-wrap: pretty; }
  .demoP { margin: 14px 0 0; font-size: 15px; line-height: 1.45; color: #6e6e73; }
  .openNow { margin-top: 20px; display: flex; align-items: center; gap: 9px; font-size: 14px; font-weight: 600; color: #1a7a43; }
  .openDot { display: block; width: 8px; height: 8px; border-radius: 50%; background: #1a7a43; }
  .demoCta { margin-top: 18px; background: #1d1d1f; color: #fff; border-radius: 12px; padding: 17px; text-align: center; font-size: 19px; font-weight: 700; }
  .demoServices { margin-top: 26px; display: grid; grid-template-columns: 1fr 1fr; gap: 11px 16px; font-size: 14.5px; }
  .demoReviews { margin-top: 24px; font-size: 14px; color: #6e6e73; }
  .demoHours { margin-top: 26px; padding-top: 22px; border-top: 1px solid #ececee; }
  .demoHoursLabel { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: #8a8a8f; }
  .demoHoursGrid { margin-top: 12px; display: grid; grid-template-columns: auto 1fr; gap: 9px 26px; font-size: 14.5px; }
  .demoHoursGrid .d { color: #6e6e73; }

  /* ---- sections ---- */
  .eyebrow { text-align: center; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; color: #6e6e73; }
  h2 { margin: 0; font-size: var(--h2); line-height: 1.15; letter-spacing: -0.024em; font-weight: 600; }
  .center { text-align: center; }

  .steps {
    margin-top: 44px; display: flex; flex-direction: column;
    gap: var(--stepsGap); max-width: 680px; margin-left: auto; margin-right: auto;
    text-align: center;
  }
  .step { flex: 1 1 0; }
  .stepH { font-size: 24px; font-weight: 600; letter-spacing: -0.02em; }
  .stepP { margin: 10px auto 0; max-width: 300px; font-size: 16px; line-height: 1.55; color: #6e6e73; }
  @media (min-width: 1024px) {
    .steps { flex-direction: row; max-width: 100%; text-align: left; }
    .stepP { margin-left: 0; }
  }

  .grid {
    margin-top: 44px; max-width: 680px; margin-left: auto; margin-right: auto;
    display: grid; grid-template-columns: 1fr; gap: var(--gridGap);
  }
  @media (min-width: 1024px) { .grid { grid-template-columns: 1fr 1fr; max-width: 1200px; } }
  .gh { font-size: 17px; font-weight: 600; }
  .gp { margin: 8px 0 0; max-width: 420px; font-size: 16px; line-height: 1.55; color: #6e6e73; }

  .priceBlock { margin-top: 44px; }
  .priceBig { font-size: 44px; font-weight: 600; letter-spacing: -0.03em; }
  .priceQuote { font-size: 38px; font-weight: 600; letter-spacing: -0.02em; }
  .priceSuffix { font-size: 19px; font-weight: 500; letter-spacing: 0; color: #6e6e73; }
  .priceLabel { margin-top: 8px; font-size: 17px; font-weight: 600; }
  .priceNote { margin: 8px auto 0; max-width: 340px; font-size: 16px; line-height: 1.55; color: #6e6e73; }
  .priceFoot { margin: 44px auto 0; max-width: 320px; font-size: 15px; line-height: 1.55; color: #6e6e73; }

  .faq { margin-top: 44px; display: flex; flex-direction: column; gap: 34px; }
  .fq { font-size: 17px; font-weight: 600; }
  .fa { margin: 8px 0 0; max-width: 62ch; font-size: 16px; line-height: 1.55; color: #6e6e73; }

  .contactTel { font-size: 30px; font-weight: 600; letter-spacing: -0.02em; color: #1d1d1f; }
  .contactTel:hover { color: var(--accent); }
  .contactMail { font-size: 16px; color: #6e6e73; }
  .contactMail:hover { color: #1d1d1f; }
  .mailRow { margin-top: 10px; display: flex; flex-direction: column; gap: 6px; align-items: center; }

  footer {
    max-width: 1440px; margin: 0 auto;
    padding: 64px var(--padX) 56px;
    text-align: center; font-size: 13px; color: #86868b;
  }
`;

function Index() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
        <header>
          <span className="brand">SINGH DYNAMICS</span>
          <a className="headerTel" href="tel:+12487300377">(248) 730&#8209;0377</a>
        </header>

        <section className="wrap hero">
          <div className="heroText">
            <h1>Your shop's website, finished before you pay for it.</h1>
            <p className="lead">One page. Your phone number at the top of it. I build it first — you look, then you decide.</p>
            <a className="cta" href="#contact">Have me build yours</a>
            <span className="ctaNote">Nothing owed if you pass on it.</span>
          </div>

          <div className="phoneWrap">
            <div className="frame">
              <div className="screen">
                <div className="screenInner">
                  <div className="statusBar">
                    <span>9:41</span>
                    <span className="battery"></span>
                  </div>
                  <div className="demoNav">
                    <span className="demoBrand">REDFORD AUTO CARE</span>
                    <span className="demoCall">Call</span>
                  </div>
                  <div className="ph" style={{ height: "168px" }}>
                    <span className="phLabel">SHOP FRONT PHOTO</span>
                  </div>
                  <div className="demoBody">
                    <div className="demoH1">Brakes, tires, and check&#8209;engine work in Redford.</div>
                    <p className="demoP">Family owned since 1994. Most repairs same day.</p>
                    <div className="openNow">
                      <span className="openDot"></span>
                      <span>Open now — until 6:00 today</span>
                    </div>
                    <div className="demoCta">Call (313) 555&#8209;0148</div>
                    <div className="demoServices">
                      <span>Brakes</span><span>Tires &amp; alignment</span>
                      <span>Check engine</span><span>Oil &amp; filter</span>
                      <span>A/C service</span><span>State inspection</span>
                    </div>
                    <div className="demoReviews">★★★★★ 4.8 · 212 Google reviews</div>
                    <div className="demoHours">
                      <div className="demoHoursLabel">HOURS</div>
                      <div className="demoHoursGrid">
                        <span className="d">Mon–Fri</span><span>8:00 – 6:00</span>
                        <span className="d">Saturday</span><span>8:00 – 2:00</span>
                        <span className="d">Sunday</span><span>Closed</span>
                      </div>
                    </div>
                    <div className="ph" style={{ marginTop: "24px", height: "150px" }}>
                      <span className="phLabel">MAP — 12140 TELEGRAPH RD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap sec">
          <div className="eyebrow">HOW IT WORKS</div>
          <div className="steps">
            <div className="step">
              <div className="stepH">I build it.</div>
              <p className="stepP">Send me your shop name and hours. Four business days later there's a real site with your name on it.</p>
            </div>
            <div className="step">
              <div className="stepH">You look at it.</div>
              <p className="stepP">On your phone, in the bay, whenever you get a minute. Tell me what's wrong with it and I'll fix it.</p>
            </div>
            <div className="step">
              <div className="stepH">You decide.</div>
              <p className="stepP">Keep it and pay the build fee. Or walk away. No invoice, no follow&#8209;up calls.</p>
            </div>
          </div>
        </section>

        <section className="wrap sec">
          <h2 className="center">What you get</h2>
          <div className="grid">
            <div>
              <div className="gh">One page, no menus</div>
              <p className="gp">Hours, services, phone, directions. Everything a customer needs before they call.</p>
            </div>
            <div>
              <div className="gh">Tap to call, top and bottom</div>
              <p className="gp">The point of the page is your phone ringing. Nothing else competes with it.</p>
            </div>
            <div>
              <div className="gh">Google profile handled</div>
              <p className="gp">Claimed, hours correct, photos current, reviews answered. That's where most of your calls start.</p>
            </div>
            <div>
              <div className="gh">Fast on a bad signal</div>
              <p className="gp">Under a second on a phone in a parking lot. No sliders, no popups, no cookie banner.</p>
            </div>
          </div>
        </section>

        <section className="narrow sec center">
          <h2>Pricing</h2>
          <div className="priceBlock">
            <div className="priceBig">$400 to $700</div>
            <div className="priceLabel">To build it. One time.</div>
            <p className="priceNote">Where you land depends on how many services and photos go on the page. I'll tell you the exact number before I start, and you only pay it if you keep the site. Domain is in your name and the files are yours.</p>
          </div>
          <div className="priceBlock">
            <div className="priceBig">$75<span className="priceSuffix">/mo</span></div>
            <div className="priceLabel">Optional. Cancel any month.</div>
            <p className="priceNote">Hosting, edits when your hours change, and I keep your Google profile current.</p>
          </div>
          <p className="priceFoot">No contract. No setup fee. No discovery call.</p>
        </section>

        <section className="narrow sec">
          <h2 className="center">Questions</h2>
          <div className="faq">
            <div>
              <div className="fq">What's the catch?</div>
              <p className="fa">There isn't one. I'd rather build the site than argue about building it. If four days of my work doesn't win the job, talking wasn't going to either.</p>
            </div>
            <div>
              <div className="fq">How long does it take?</div>
              <p className="fa">Four business days from when you send me your hours and services.</p>
            </div>
            <div>
              <div className="fq">What does it cost?</div>
              <p className="fa">$400 to $700 to build, depending on how much goes on the page, and $75 a month after that if you want me keeping it current. You get the exact number before I build anything.</p>
            </div>
            <div>
              <div className="fq">I already have a website.</div>
              <p className="fa">Then you'll have two and you can pick. Most shops I meet have one from 2011 that doesn't work on a phone.</p>
            </div>
            <div>
              <div className="fq">Who actually does the work?</div>
              <p className="fa">Me. Sarab Singh, one person, out of Novi. Nobody hands you to an account manager.</p>
            </div>
          </div>
        </section>

        <section className="narrow sec center" id="contact" style={{ paddingBottom: "40px" }}>
          <h2>Text me your shop name.</h2>
          <p className="lead" style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "340px", fontSize: "16px" }}>That's all I need to start. I answer between 7am and 8pm.</p>
          <div style={{ marginTop: "32px" }}>
            <a className="contactTel" href="tel:+12487300377">(248) 730&#8209;0377</a>
          </div>
          <div className="mailRow">
            <a className="contactMail" href="mailto:sarab@singhdynamics.com">sarab@singhdynamics.com</a>
            <a className="contactMail" href="mailto:satya@singhdynamics.com">satya@singhdynamics.com</a>
          </div>
        </section>

        <footer>Singh Dynamics · Novi, Michigan</footer>
    </>
  );
}
