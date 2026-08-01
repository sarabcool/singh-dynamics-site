import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Singh Dynamics | Websites for Michigan small businesses";
const DESCRIPTION =
  "I build your website first, for free, then show you the finished thing. Michigan small business websites, $400 to $700 one time. You own the domain.";
const URL = "https://singhdynamics.com/";
const EMAIL = "sarab@singhdynamics.com";
const MAILTO = `mailto:${EMAIL}?subject=Build one for my shop`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:site_name", content: "Singh Dynamics" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Singh Dynamics",
          description: DESCRIPTION,
          areaServed: "Michigan",
          email: EMAIL,
          url: URL,
        }),
      },
    ],
  }),
});

const steps = [
  {
    n: "1",
    title: "I build it",
    body: "I look up your shop, your services, your hours, your reviews, and I build the whole site. You do not talk to me, pay me, or agree to anything first.",
  },
  {
    n: "2",
    title: "You look at it",
    body: "I send you a link. It is your real business on a real site, not a mockup. Twenty minutes on your phone in the truck is enough to know.",
  },
  {
    n: "3",
    title: "You decide",
    body: "If it is not for you, say no and we are done. Nothing owed. If it is, we fix what I got wrong and put it live on your own domain in about a week.",
  },
];

const included = [
  {
    title: "It opens on bad service",
    body: "One page, no bloat. It loads before somebody gives up and taps the next shop.",
  },
  {
    title: "Google knows where you are",
    body: "Google Business Profile set up properly, so you show on Maps when someone nearby searches what you do.",
  },
  {
    title: "Your number is one tap",
    body: "Always on the screen. He taps it, your phone rings. That is the whole point of the site.",
  },
  {
    title: "Nothing for you to run",
    body: "No logins, no updates, no plugin that breaks in March. Prices change, text me, I change them.",
  },
];

const charges = [
  {
    item: "Build",
    qty: "1",
    price: "$400 to $700",
    note: "One time. Written, built and live on your domain.",
  },
  {
    item: "Upkeep",
    qty: "mo",
    price: "$50 to $75",
    note: "Optional. Hosting, Google Business Profile, updates, monitoring.",
  },
];

const terms = [
  "Cancel the monthly whenever you want. There is no contract.",
  "The domain is yours, in your name, on your card. If you leave, it goes with you.",
  "About a week from the day you say yes.",
  "Changes are a text message. Not a ticket, not a portal.",
];

const faqs = [
  {
    q: "Why would you build it before I pay?",
    a: "Because talking about a website is boring and nobody can picture it. Showing you a finished one takes the argument out of it. If it is bad, you have lost nothing.",
  },
  {
    q: "Who am I dealing with?",
    a: "Sarab. I am 16, I live in Michigan, and I run this myself. You get me on the phone, not an account manager.",
  },
  {
    q: "Have you done this for other shops?",
    a: "I am new. I do not have a wall of logos and I am not going to fake one. That is exactly why I build yours first and let the work answer the question.",
  },
  {
    q: "I already have a website.",
    a: "Then I will tell you straight if yours is fine. Sometimes it is. If it is from 2011 and you cannot edit it, that is a different answer.",
  },
  {
    q: "Why is this cheaper than the other quotes?",
    a: "No office, no sales team, no meetings that get billed. The sites are simple on purpose because simple is what works on a phone in a parking lot.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper-2 py-0 sm:py-10">
      <header className="sticky top-0 z-50 border-b-2 border-carbon bg-paper">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-2">
          <span className="field-label font-bold text-carbon">
            Singh Dynamics / Work Order
          </span>
          <a
            href="#charges"
            className="field-label text-carbon underline underline-offset-4"
          >
            Charges
          </a>
        </div>
      </header>

      {/* The whole page is one stacked paper work order. */}
      <div className="mx-auto max-w-3xl border-carbon bg-paper sm:border-2">
        <main>
          {/* Form masthead */}
          <section className="border-b-2 border-carbon px-4 pt-6 pb-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
              <div>
                <p className="field-label">Prepared by</p>
                <p className="font-display text-2xl uppercase leading-none">
                  Singh Dynamics
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-xs">
                <div>
                  <dt className="field-label">Area</dt>
                  <dd>Michigan</dd>
                </div>
                <div>
                  <dt className="field-label">Form</dt>
                  <dd>SD-01</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Hero */}
          <section className="px-4 py-8 sm:px-8 sm:py-12">
            <p className="field-label">Reported problem</p>
            <h1 className="mt-3 text-4xl sm:text-6xl">
              Somebody looked up your shop last night and found nothing.
            </h1>
            <p className="mt-5 max-w-[56ch] text-carbon-soft">
              A friend told him you do good work. He typed your name in at 9pm,
              got a Facebook page from four years ago, and called the place down
              the road instead. That happened this week. You will never hear
              about it.
            </p>

            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="stamp-box px-5 py-3 text-center leading-none">
                <span className="block text-2xl font-bold sm:text-3xl">
                  No charge
                </span>
                <span className="mt-1 block font-mono text-[0.6rem] tracking-[0.2em]">
                  until you say yes
                </span>
              </div>
              <p className="max-w-[34ch] font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-carbon-soft">
                I write the site, build it, and send it to you finished. Then
                you decide.
              </p>
            </div>
          </section>

          {/* The offer band */}
          <section
            aria-labelledby="offer"
            className="border-y-2 border-carbon bg-stamp px-4 py-8 text-stamp-foreground sm:px-8 sm:py-10"
          >
            <p className="field-label text-stamp-foreground opacity-80">
              The offer, in full
            </p>
            <h2 id="offer" className="mt-3 text-3xl sm:text-5xl">
              I build it first. You look at it. Then you decide.
            </h2>
            <p className="mt-4 max-w-[52ch]">
              Not a mockup and not a proposal. The finished website for your
              actual business, sent to you before you have paid a cent or agreed
              to anything.
            </p>
            <a
              href={MAILTO}
              className="mt-6 inline-block border-2 border-current px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em]"
            >
              Have me build yours
            </a>
          </section>

          {/* How it goes */}
          <section aria-labelledby="how" className="px-4 py-8 sm:px-8 sm:py-12">
            <h2 id="how" className="text-2xl sm:text-3xl">
              How it goes
            </h2>
            <ol className="mt-5">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="cell flex gap-4 px-0 last:border-b last:border-carbon"
                >
                  <span className="font-mono text-base font-bold text-stamp">
                    {s.n}.
                  </span>
                  <div>
                    <h3 className="text-xl">{s.title}</h3>
                    <p className="mt-1 max-w-[56ch] text-carbon-soft">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Checklist */}
          <section
            aria-labelledby="included"
            className="border-t-2 border-carbon bg-paper-2 px-4 py-8 sm:px-8 sm:py-12"
          >
            <p className="field-label">Work to be performed</p>
            <h2 id="included" className="mt-2 text-2xl sm:text-3xl">
              What you actually get
            </h2>
            <ul className="mt-5">
              {included.map((f) => (
                <li key={f.title} className="cell flex gap-4 px-0">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-4 w-4 shrink-0 border-2 border-carbon bg-paper"
                  />
                  <div>
                    <h3 className="text-lg">{f.title}</h3>
                    <p className="mt-1 max-w-[56ch] text-carbon-soft">
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Charges table */}
          <section
            id="charges"
            aria-labelledby="charges-h"
            className="border-t-2 border-carbon px-4 py-8 sm:px-8 sm:py-12"
          >
            <p className="field-label">Estimate of charges</p>
            <h2 id="charges-h" className="mt-2 text-2xl sm:text-3xl">
              What it costs
            </h2>

            <dl className="mt-5 border-b border-carbon">
              {charges.map((c) => (
                <div key={c.item} className="cell px-0">
                  <div className="leader font-mono text-xs uppercase tracking-[0.14em]">
                    <dt>
                      {c.item}
                      <span className="text-carbon-soft"> / {c.qty}</span>
                    </dt>
                    <span className="leader-fill" aria-hidden="true" />
                    <dd className="font-display text-xl tracking-normal text-stamp sm:text-2xl">
                      {c.price}
                    </dd>
                  </div>
                  <p className="mt-1 text-base text-carbon-soft">{c.note}</p>
                </div>
              ))}
            </dl>

            <p className="field-label mt-8">Terms</p>
            <ul className="mt-2 space-y-1 font-mono text-xs leading-relaxed text-carbon-soft">
              {terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          {/* Questions */}
          <section
            aria-labelledby="answers"
            className="border-t-2 border-carbon bg-paper-2 px-4 py-8 sm:px-8 sm:py-12"
          >
            <p className="field-label">Notes and questions</p>
            <h2 id="answers" className="mt-2 text-2xl sm:text-3xl">
              Straight answers
            </h2>
            <dl className="mt-5 border-b border-carbon">
              {faqs.map((f) => (
                <div key={f.q} className="cell px-0">
                  <dt className="max-w-[44ch] font-sans text-lg font-semibold">
                    {f.q}
                  </dt>
                  <dd className="mt-1 max-w-[56ch] text-carbon-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Sign off */}
          <section
            aria-labelledby="contact"
            className="border-t-2 border-carbon px-4 py-8 sm:px-8 sm:py-12"
          >
            <p className="field-label">Authorize the work</p>
            <h2 id="contact" className="mt-2 text-3xl sm:text-4xl">
              Want to see what yours would look like?
            </h2>
            <p className="mt-4 max-w-[50ch] text-carbon-soft">
              Send me the name of your shop. That is all I need to start. I will
              build it and send it over.
            </p>
            <a
              href={MAILTO}
              className="mt-6 block break-words border-b-2 border-stamp pb-2 font-mono text-lg font-bold text-stamp sm:text-2xl"
            >
              {EMAIL}
            </a>
            <p className="field-label mt-2">Signature line / email</p>
          </section>
        </main>

        <footer className="border-t-2 border-carbon px-4 py-6 sm:px-8">
          <div className="field-label flex flex-wrap justify-between gap-3">
            <p className="max-w-[44ch]">
              Singh Dynamics / Michigan / Sarab, 16, builds and runs every site
              himself
            </p>
            <p>&copy; 2026</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
