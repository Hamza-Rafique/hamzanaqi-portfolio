// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Sulman Ahmed Awan",
    image: "images/sulman.jpeg",
    designation: "DevOps Engineer, AWS, Kubernetes, Terraform",
    view: "Hamza is an amazing DevOps consultant with extensive knowledge of cloud infrastructure and automation. I have worked under his leadership, and I found him helping and managing things as easy as possible. I recommend Hamza for any DevOps lead position in your organization.",
    linkednURL: "https://www.linkedin.com/in/sulman-ahmed-awan-871962b8/",
  },
  {
    id: 1,
    name: "Zain Bashart",
    image: "images/zain.jpeg",
    designation: "Cloud Architect, GCP, Azure, CI/CD",
    view: "I have had the pleasure of working with Hamza Naqi, and I can confidently say that he is one of the most skilled and knowledgeable DevOps consultants I have met. Holding expertise in various cloud platforms like AWS, GCP, and Azure, Hamza's ability to quickly understand complex requirements and implement effective solutions is truly impressive, and his attention to detail is exceptional. In addition to his technical skills, he is an excellent communicator and collaborator. I highly recommend Hamza to anyone seeking a talented, seasoned, and reliable DevOps consultant for their projects. His passion for work, combined with his impressive skill set, makes him an asset to any team.",
    linkednURL: "https://www.linkedin.com/in/zainaliflutterdeveloper/",
  },
  {
    id: 2,
    name: "Farrukh Subhani",
    image: "images/farrukh.jpeg",
    designation: "Infrastructure Engineer, Jenkins, Docker, Ansible",
    view: "I have worked with Hamza, and he is excellent in every way. He has a deep understanding of infrastructure automation and cloud services. I strongly recommend him for any DevOps consulting role.",
    linkednURL: "https://www.linkedin.com/in/farrukh-subhani-16852858/",
  },
  {
    id: 3,
    name: "Muhammad Subhan",
    image: "images/subhan.jpeg",
    designation: "Sr DevOps Engineer, Azure, Terraform, Helm",
    view: "I have spent 4 years working with Hamza, and I found him determined, enthusiastic, and keen to learn more. He is a quick learner and a good team player, highly recommended professional. My best wishes are for his future endeavors.",
    linkednURL: "https://www.linkedin.com/in/muhammad-subhan-bb540066/",
  },
  {
    id: 4,
    name: "Muhammad Ahsan",
    image: "images/ahsan.jpeg",
    designation: "Full-Stack Developer, AWS, Docker, CI/CD",
    view: "I highly recommend Hamza as a skilled and experienced DevOps consultant with expertise in various technologies. Hamza is proficient in cloud architecture and has extensive experience working with AWS, Docker, and CI/CD pipelines. His ability to integrate these technologies into his work makes him an asset to any team. Overall, I highly recommend Hamza for any DevOps consulting role.",
    linkednURL: "https://www.linkedin.com/in/ahsan131/",
  },
  {
    id: 5,
    name: "Basit Amin",
    image: "images/basit.jpeg",
    designation: "DevOps Engineer, Kubernetes, Terraform, CI/CD",
    view: "I am excited to recommend Hamza for any DevOps team lead positions. Hamza and I worked together on a project where he was the team lead, and I was impressed with his ability to lead and guide the team to success. Hamza has exceptional technical skills and knowledge of the latest DevOps technologies. He is always eager to learn and stay up-to-date with the latest trends in the field. Furthermore, Hamza is an excellent communicator and team player. He is always willing to lend a helping hand and is committed to fostering a collaborative and supportive work environment. Overall, I highly recommend Hamza for any DevOps team lead positions.",
    linkednURL: "https://www.linkedin.com/in/basitaminsidhu/",
  },
  {
    id: 6,
    name: "Saad Hassan",
    image: "images/saad.jpeg",
    designation: "DevOps Engineer, AWS, GCP, Terraform",
    view: "I had the pleasure of working with Hamza Rafique for three months on the DevOps team, and I was continually impressed by his technical skills and leadership abilities. Hamza has a deep understanding of cloud platforms and was instrumental in developing complex CI/CD pipelines that were not only efficient but also highly reliable. As a team lead, Hamza was able to effectively communicate project goals and priorities, and provided guidance and mentorship to junior team members. I highly recommend Hamza for any DevOps development or team leadership role. His technical expertise, leadership skills, and positive attitude make him a valuable asset to any organization.",
    linkednURL: "https://www.linkedin.com/in/saad-hassan-947277178/",
  },
  {
    id: 7,
    name: "Tanzeel Ahmed",
    image: "images/tanzeel.jpeg",
    designation: "DevOps Engineer, JavaScript, TypeScript, Node.js",
    view: "I highly recommend Hamza. He is a passionate and dedicated DevOps consultant.",
    linkednURL: "https://www.linkedin.com/in/saad-hassan-947277178/",
  },
  {
    id: 8,
    name: "Ameer Hamza",
    image: "images/hamza.jpeg",
    designation: "Senior Software Engineer, Full Stack Developer, DevOps",
    view: "Hamza is purely a workaholic. His devotion to his duty is the key to his success. He always supports other team members and is a good team player and a class software engineer.",
    linkednURL: "https://www.linkedin.com/in/hamza-arshad-joshan/",
  },
  {
    id: 9,
    name: "Mohammed Usman",
    image: "images/usman.jpeg",
    designation: "Front-end Software Engineer, DevOps Enthusiast",
    view: "Hamza has a great personality. The time we spent together is the asset of my life.",
    linkednURL: "https://www.linkedin.com/in/muhammad-usman-627888162/",
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
