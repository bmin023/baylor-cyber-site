import { siteConfig } from "@/config/site"

export default function AboutUs() {
  return (
    <section className="flex flex-col gap-2 p-4">
      <h1 className="text-5xl font-extrabold">About Us</h1>
      <p>
        <b>{siteConfig.name}</b> is both a social club and a competition team at Baylor
        University. Our goal is to bring up a new generation of cybersecurity
        experts by creating a fun and collaborative environment for learning.
        We do this by hosting workshops, guest speakers, social events, and competitions.
      </p>
      <h2 className="text-4xl font-extrabold">Workshops</h2>
      <p>
        We will host workshops on anything pertaining to cyber! If you have something you
        would like to learn, feel free to reach out to one of us and suggest it.
      </p>
      <h2 className="text-4xl font-extrabold">Guest Speakers & Infosessions</h2>
      <p>
        Our current members, past alumni, and Baylor&apos;s ECS career center all have
        connections in the industry who would love to pass knowledge to the Baylor&apos;s
        brightest! This is also a great opportunity if you are looking to get into the
        industry.
      </p>
      <h2 className="text-4xl font-extrabold">Competitions</h2>
      <h3 className="text-2xl font-extrabold">SWCCDC</h3>
      <blockquote className="border-l-2 pl-3" cite="https://southwestccdc.com/whatisccdc/">
        CCDC is a competition for college students that exercises both technical
        and business skills. CCDC focuses on the operational aspects of managing
        and protecting an existing simulated corporate network infrastructure.
        Your team will be securing, managing, and maintaining a small business network –
        responding to business tasks called injects while a live Red Team that is
        attempting to break into your systems, and maintaining a core group of
        “critical services” for the simulated business.
        - <a href="https://southwestccdc.com/whatisccdc/" className="underline">SWCCDC Website</a>
      </blockquote>
      <p>
        Every year, we put together a crack team of cybersecurity students to compete
        in the Southwest Collegiate Cyber Defense Competition. If you want to join us,
        express your interest! We practice weekly preparing for CCDC.
      </p>
      <h3 className="text-2xl font-extrabold">NCL</h3>
      <p>
        <a className="mr-1 underline" href="https://nationalcyberleague.org/">
          National Cyber League
        </a>
        is a CTF style competition where you will compete against
        your teammates and the world in completing different challenges across many
        different areas of cybersecurity. Every semester you will compete in an individual
        game and a team game and can get a medal if you’re in the top 500.
      </p>
      <p>
        There is an individual game and a team game. Compete for fun and glory!
        This competition is great if you love problem-solving and don&apos;t want to
        commit <em>too</em> much time to a competition.
      </p>
      <h3 className="text-2xl font-extrabold">Hivestorm</h3>
      <p>
        You and three friends are given four hours to log into an unknown computer,
        find out what happened, lock it down, and discover hidden secrets. If you
        come from a background of Cyber Patriot, this will be right up your alley.
        If not, join a Hivestorm team!
      </p>
      <p>
        This is another low commitment competition that starts early in the year. A great
        way to find out what we&apos;re about.
      </p>
    </section>
  )
}
