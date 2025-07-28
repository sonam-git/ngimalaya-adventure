import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Register fonts for better typography
// Font.register({
//   family: 'Inter',
//   src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
// });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    borderBottom: '2 solid #333333',
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    letterSpacing: 1,
  },
  contactInfo: {
    fontSize: 10,
    color: '#444444',
    lineHeight: 1.3,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    borderBottom: '1 solid #cccccc',
    paddingBottom: 4,
  },
  subsection: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 2,
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 1,
  },
  location: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 4,
  },
  date: {
    fontSize: 10,
    color: '#666666',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  bulletPoint: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 3,
    paddingLeft: 10,
    lineHeight: 1.4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  skillCategory: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginRight: 6,
    minWidth: 120,
  },
  skillList: {
    fontSize: 10,
    color: '#333333',
    flex: 1,
    lineHeight: 1.3,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#7c3aed',
    marginBottom: 2,
  },
  certification: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 2,
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
});

const ResumePDF: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>SONAM J SHERPA</Text>
        <Text style={styles.contactInfo}>
          +1 xxx-xxx-xxxx ⋄ Sonoma, CA{'\n'}
          sherpa.sjs@gmail.com ⋄ linkedin.com/in/sonam-j-sherpa ⋄ github.com/sonam-git
        </Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.subsection}>
          <Text style={styles.jobTitle}>Full Stack Web Developer (Bootcamp)</Text>
          <Text style={styles.company}>UC Berkeley Extension</Text>
          <Text style={styles.date}>Jan 2023 – Jul 2023</Text>
        </View>
        <View style={styles.subsection}>
          <Text style={styles.jobTitle}>AS in Computer Studies: Web Full-Stack Developer</Text>
          <Text style={styles.company}>Santa Rosa Junior College</Text>
          <Text style={styles.date}>2020 – 2022</Text>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        
        <View style={styles.subsection}>
          <Text style={styles.jobTitle}>Web Developer Intern</Text>
          <Text style={styles.company}>Burbank Housing</Text>
          <Text style={styles.location}>Santa Rosa, CA</Text>
          <Text style={styles.date}>Jan 2022 – Jul 2022</Text>
          <Text style={styles.bulletPoint}>
            • Revamped the Burbank Housing Company's website using WordPress CMS and PHP within the Scrum Agile methodology.
          </Text>
          <Text style={styles.bulletPoint}>
            • Improved overall website usability and performance by 30%, enhancing user engagement and satisfaction.
          </Text>
          <Text style={styles.bulletPoint}>
            • Managed the development process from wireframing and client collaboration to user testing and final presentation.
          </Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.jobTitle}>Web Developer</Text>
          <Text style={styles.company}>Himalayan Sherpa Club</Text>
          <Text style={styles.location}>Sonoma, CA</Text>
          <Text style={styles.date}>March 2025 – May 2025</Text>
          <Text style={styles.bulletPoint}>
            • Designed and developed a WordPress website and logo for a nonprofit, increasing community awareness by 50%.
          </Text>
          <Text style={styles.bulletPoint}>
            • Boosted user interaction by 20% and improved access to event information through a user-friendly interface.
          </Text>
        </View>
      </View>

      {/* Technical Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Projects</Text>
        
        <View style={styles.subsection}>
          <Text style={styles.projectTitle}>Roster-Hub (MERN Full-Stack App)</Text>
          <Text style={styles.bulletPoint}>
            • Built a MERN-stack app with GraphQL and JWT for player profile management, messaging, and social features.
          </Text>
          <Text style={styles.bulletPoint}>
            • Enabled full CRUD functionality and real-time team engagement with a responsive React frontend styled in Tailwind CSS.
          </Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.projectTitle}>Tech Interview Prep (MVC Architecture Full-Stack App)</Text>
          <Text style={styles.bulletPoint}>
            • Developed a knowledge-sharing app using JavaScript, Node.js, Express, Sequelize, Handlebars, allowing users to create, read, update, and delete content.
          </Text>
          <Text style={styles.bulletPoint}>
            • Enabled users to share knowledge on various topics and receive feedback within the platform.
          </Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.projectTitle}>React-Redux Store (E-Commerce App using MERN Stack)</Text>
          <Text style={styles.bulletPoint}>
            • Utilized React and Redux for state management, ensuring efficient handling of complex application states.
          </Text>
          <Text style={styles.bulletPoint}>
            • Implemented JWT authentication for secure user access and enhanced platform security.
          </Text>
          <Text style={styles.bulletPoint}>
            • Enabled users to seamlessly buy and sell products, incorporating a secure payment system for transactions.
          </Text>
        </View>
      </View>

      {/* Technical Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        
        <View style={styles.skillsContainer}>
          <Text style={styles.skillCategory}>Languages:</Text>
          <Text style={styles.skillList}>Python, PHP, JavaScript, HTML, CSS</Text>
        </View>
        
        <View style={styles.skillsContainer}>
          <Text style={styles.skillCategory}>Frameworks & Libraries:</Text>
          <Text style={styles.skillList}>React, Redux, Node.js, Express.js, Next.js, TypeScript, jQuery, Sequelize, Mongoose, Handlebars</Text>
        </View>
        
        <View style={styles.skillsContainer}>
          <Text style={styles.skillCategory}>Databases:</Text>
          <Text style={styles.skillList}>MySQL, MongoDB (NoSQL)</Text>
        </View>
        
        <View style={styles.skillsContainer}>
          <Text style={styles.skillCategory}>APIs:</Text>
          <Text style={styles.skillList}>RESTful APIs, GraphQL</Text>
        </View>
        
        <View style={styles.skillsContainer}>
          <Text style={styles.skillCategory}>Developer Tools:</Text>
          <Text style={styles.skillList}>GitHub, GitLab, Visual Studio Code, Figma, Postman, Heroku, AWS, Vercel</Text>
        </View>
      </View>

      {/* Certifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <Text style={styles.certification}>
          • Web and Mobile Front-End Development Certificate, Santa Rosa Junior College
        </Text>
        <Text style={styles.certification}>
          • Web Team Certificate of Recognition, Santa Rosa Junior College
        </Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
