export type Projects = {
  title: string
  description: string
  scope: string
  link?: string
  reaction: string
}

export const projects: Projects[] = [
  {
    title: "Tometrics",
    description:
      "Tometrics is a garden planner with a focus on data collection and analysis. This is a small PoC I am using to learn new things and work on something related to a hobby I love",
    scope: "Garden planning",
    link: "https://tometrics.com",
    reaction:
      "I love working on projects with direct impact on my life (Tometrics, get it? because tomato + metrics...."
  },
  {
    title: "AUTODOC",
    description:
      "AUTODOC is a company that provides a platform to buy auto parts among other thing. Here I worked on splitting a monolithic app into different MFE's",
    scope: "Financial services",
    link: "https://autodoc.de",
    reaction: "one of my biggest projects to date"
  },
  {
    title: "CORUM L'Epargne subscription funnels",
    description:
      "CORUM is a company that provides financial services, for them I worked on different subscription funnels ensuring the best exprience to CORUM's investors",
    scope: "Financial services",
    link: "https://corumlepargne.fr",
    reaction: "proud to work on this, a lot of money raised from investors"
  },
  {
    title: "OPSIFY (managment software)",
    description:
      "Internal management software for a company for Forall Phones, a company that supports circular economy through the refurbishment of used phones",
    scope: "custom tailored solution",
    reaction: "it was a blast working on this one"
  },
  {
    title: "Retake simulator",
    description:
      "Retake simulator was a small project inside Forall Phones, a quick simulator that would give some reference values to the users by showing them how their money would be worth towards a new purchase",
    scope: "custom tailored solution",
    reaction:
      "always good to help people get the best value for their used phones"
  },
  {
    title: "Crypto currency game",
    description:
      "Just a fun very little project I worked on for myself, essentially a leaderboard for people who donated crypto to me. More money donated = higher score",
    scope: "fun side project for crypto",
    reaction: "just a fun little side project"
  }
]
