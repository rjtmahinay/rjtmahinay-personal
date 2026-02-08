/**
 * Interface representing a professional work experience.
 */
export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  keyImpacts: {
    metric: string;
    description: string;
  }[];
  achievements: string[];
}

/**
 * List of professional work experiences.
 * Contains detailed information about roles, companies, key impacts, and achievements.
 *
 * @author Tristan Mahinay
 */
export const experiences: ExperienceItem[] = [
  {
    title: "Tech Lead & Solutions Architect",
    company: "IBM",
    period: "August 2021 – Present",
    description: "Leading hybrid cloud transformation and client management in the insurance industry. Architecting modular batch applications and Generative AI solutions.",
    keyImpacts: [
      {
        metric: "$170k+",
        description: "Annual Client Savings"
      },
      {
        metric: "95%",
        description: "Effort Reduction via GenAI"
      },
      {
        metric: "$8k/mo",
        description: "Saved on Infra Licenses"
      }
    ],
    achievements: [
      "Designed Modular architecture for batch applications saving the client $170,000+ annually with 600% cost savings.",
      "Proposed Generative AI Architectures for Insurance Legal/Member Marketing offering 95% effort reduction.",
      "Pioneered transformation of batch workloads to Containerized Architecture saving $8,000 monthly.",
      "Reduced processing time from 2 hours to 20-30 minutes using Spring Batch and Kafka.",
      "Designed Legal Management UI/services with <100ms API response and <3s page load."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Novare",
    period: "Oct 2020 – Aug 2021",
    description: "Modernized applications for a major Philippine bank, focusing on greenfield/brownfield development of financial products.",
    keyImpacts: [
      {
        metric: "< 100ms",
        description: "API Response Time"
      },
      {
        metric: "100%",
        description: "Universal App Coverage"
      }
    ],
    achievements: [
      "Built a universal transaction limit microservice for all financial products.",
      "Designed REST Architecture achieving < 100ms response time.",
      "Enhanced Payment Gateway to resolve timeout issues across financial channels."
    ]
  },
  {
    title: "Associate Applications Engineer",
    company: "Oracle",
    period: "July 2018 – Oct 2020",
    description: "Developed utility SaaS products for energy and water customers, handling core billing implementation.",
    keyImpacts: [
      {
        metric: "100X",
        description: "SQL Performance Boost"
      },
      {
        metric: "High",
        description: "Severity Bugs Fixed"
      }
    ],
    achievements: [
      "Optimized SQL statement run time from seconds to milliseconds.",
      "Fixed high-severity bugs ensuring customers met go-live dates.",
      "Created responsive accessible UI using JavaScript, jQuery, and Oracle Extensions.",
      "Developed an automated bug portal to simplify the patching process."
    ]
  }
];
