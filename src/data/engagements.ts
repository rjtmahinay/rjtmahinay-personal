/**
 * Interface representing a professional engagement or community role.
 */
export interface Engagement {
  title: string;
  role: string;
  period: string;
  description: string;
  link: string;
  image?: string;
}

/**
 * List of community engagements, leadership roles, and speaking appearances.
 *
 * @author Tristan Mahinay
 */
export const engagements: Engagement[] = [
  {
    title: "Java User Group Philippines",
    role: "Community Leader",
    period: "2023 - Present",
    description: "Leading the largest Java community in the Philippines. Organizing meetups, workshops, and conferences to foster knowledge sharing enabling Java developers in the country.",
    link: "https://www.meetup.com/java-user-group-ph/"
  },
  {
    title: "Apache Kafka Manila",
    role: "Community Organizer",
    period: "2024 - Present",
    description: "Co-organizing meetups for Apache Kafka enthusiasts in Manila. Facilitating discussions on event-driven architecture and streaming technologies.",
    link: "https://www.meetup.com/manila-kafka/"
  },
  {
    title: "Confluent Community Catalyst",
    role: "Awardee",
    period: "2025",
    description: "Recognized as a Confluent Community Catalyst for significant contributions to the Apache Kafka and Confluent community.",
    link: "https://developer.confluent.io/catalysts/"
  },
  {
    title: "PH100 2025",
    role: "Honoree",
    period: "2025",
    description: "Recognized as one of the top 100 professionals in the Philippines by Stellar PH.",
    link: "https://stellarph.io/programs/ph100/2025"
  },
  {
    title: "Technical Speaker",
    role: "Conference Speaker",
    period: "Various",
    description: "Delivering technical talks at international and local conferences on topics including Java, Cloud-Native, AI, and Software Architecture.",
    link: "https://sessionize.com/rjtmahinay"
  }
];
