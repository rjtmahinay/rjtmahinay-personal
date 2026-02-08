/**
 * Interface representing a category of skills.
 */
export interface SkillCategory {
  title: string;
  skills: string[];
}

/**
 * List of technical skills categorized by domain.
 *
 * @author Tristan Mahinay
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Technologies",
    skills: [
      "Java", "JavaScript", "TypeScript", "Shell", "Python", "Go", "Kotlin", "Groovy", "SQL"
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Spring Boot", "Spring Batch", "Spring Kafka", "Quarkus", "ReactJS", "Jakarta EE", "Hilla"
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS", "Red Hat OpenShift", "GCP", "Kubernetes", "Helm", "Docker", "Jenkins", "GitHub Actions"
    ]
  },
  {
    title: "Databases",
    skills: [
      "Oracle", "Microsoft SQL", "MySQL", "MongoDB", "PostgreSQL", "Redis"
    ]
  },
  {
    title: "AI & Data",
    skills: [
      "IBM watsonx.ai", "Spring AI", "InstructLab", "Kafka", "Elasticsearch"
    ]
  },
  {
    title: "Tools & Testing",
    skills: [
      "Git", "Maven", "Gradle", "JUnit", "Mockito", "Postman", "JMeter", "Datadog"
    ]
  },
  {
    title: "Systems Design",
    skills: [
      "Microservices", "Event-driven", "Batch Processing", "Reactive Programming", "Distributed Systems"
    ]
  }
];
