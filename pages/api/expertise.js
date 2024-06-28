const expertise = [
  {
    id: 0,
    title: "Cloud Architecture",
    desc: "Specialized in designing and implementing cloud solutions using AWS, GCP, and Azure. Expertise in Kubernetes, Docker, and Terraform for managing cloud infrastructure. Proficient in deploying and managing scalable, reliable, and secure cloud environments.",
  },
  {
    id: 1,
    title: "DevOps Consulting",
    desc: "Extensive experience in CI/CD pipelines, configuration management, and automation tools. Skilled in using Jenkins, GitLab CI, CircleCI, and Harness CD. Proficient in managing code repositories and workflows using Git, GitHub, and Bitbucket.",
  },
  {
    id: 2,
    title: "Cyber Security Architecture",
    desc: "Expertise in designing and implementing security measures to protect applications and infrastructure. Proficient in using tools like Palo Alto Networks Twistlock, Okta Single Sign-On, and Vault for ensuring secure access and data protection.",
  },
  {
    id: 3,
    title: "Application Development",
    desc: "Experienced in developing robust applications using Python, JavaScript, and TypeScript. Skilled in using frameworks like React.js, Node.js, and Express.js for building scalable and maintainable web applications.",
  },
  {
    id: 4,
    title: "Open Source Contributions",
    desc: "Active open-source contributor with a focus on improving existing projects and sharing knowledge with the community. Contributing to projects related to cloud infrastructure, DevOps, and security.",
  },
  {
    id: 5,
    title: "Project Management and Collaboration",
    desc: "Proficient in using project management tools like Jira and Confluence. Experienced in Agile methodologies, including Scrum and Kanban, for managing and delivering projects efficiently. Strong collaboration skills with cross-functional teams to achieve project goals.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
