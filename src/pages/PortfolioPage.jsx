// need to get assets for portfolio projects
function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Elevate: Enhanced Company Management Software',
      description: 'A software to help with company task management',
      imageUrl: '/images/elevate.png',
      projectUrl: 'https://elevate-task-manager-4dc7b75f392c.herokuapp.com/',
      repoUrl: 'https://github.com/jayabaldwin/elevate'
    },
    {
      id: 2,
      title: 'eBook Library',
      description: 'A library to search, find and read ebooks',
      imageUrl: '/images/ebooklibrary.png',
      projectUrl: 'https://harryp-github.github.io/eBook-Library/',
      repoUrl: 'https://github.com/HarryP-GitHub/eBook-Library'
    },
    {
      id: 3,
      title: 'Text Editor',
      description: 'A text editor, that allows you to take notes and save them for later',
      imageUrl: '/images/jate.png',
      projectUrl: 'https://text-editor-cve5.onrender.com/',
      repoUrl: 'https://github.com/HarryP-GitHub/Text-Editor'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A simple Weather Dashboard, to check the current weather and a 5 day forecast',
      imageUrl: '/images/weatherdashboard.png',
      projectUrl: 'https://harryp-github.github.io/Weather-Dashboard/',
      repoUrl: 'https://github.com/HarryP-GitHub/Weather-Dashboard'
    },
    {
      id: 5,
      title: 'Work Day Scheduler',
      description: 'Plan your day with an interactive Work Day Scheduler',
      imageUrl: '/images/workdayscheduler.png',
      projectUrl: 'https://harryp-github.github.io/Work-Day-Scheduler/',
      repoUrl: 'https://github.com/HarryP-GitHub/Work-Day-Scheduler'
    },
    {
      id: 6,
      title: 'JavaScript Fundamentals Timed Quiz',
      description: 'Test your JavaScript fundamentals with this timed quiz',
      imageUrl: '/images/javascriptquiz.png',
      projectUrl: 'https://harryp-github.github.io/JavaScript-Fundamentals-Timed-Quiz/',
      repoUrl: 'https://github.com/HarryP-GitHub/JavaScript-Fundamentals-Timed-Quiz'
    },
  ];
  return (
    <div>
      <h2>Portfolio</h2> 
      {projects.map(project => (
        <div key={projects.id}>
          <h3>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title} />
          <p>{project.description}</p>
          <a href={project.projectUrl}>View Project</a>
          <a href={project.repoUrl}>View Repository</a>
        </div>
      ))};
    </div>
  );
}

export default PortfolioPage;