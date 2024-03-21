import React, { useEffect, useState,lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import ThemeSwitch from "../components/theme-switch";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
// import RadialGradient from "../components/RadialGradient";
// import { Link } from 'react-router-dom';
const LazySiteBarRight = lazy(() => import("../components/SideBarRight"));
const LazySiteBarLeft = lazy(() => import("../components/SiteBarLeft"));
const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));

// Assuming you have a type for your project data
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  // Add other project fields as necessary
}

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async (id: string) => {
      const fetchedProject: Project = {
        id: id,
        title: `Project ${id}`,
        description: 'This is a detailed description of the project.',
        image: 'https://via.placeholder.com/150'
      };

      setProject(fetchedProject);
    };

    if (projectId) {
      fetchProject(projectId);
    }
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <h1>{project.title}</h1>
    //   <img src={project.image} alt={project.title} />
    //   <p>{project.description}</p>
    // </div>
    <>
    <Layout projectPage={true}>
    <ThemeSwitch />
      <header style={{zIndex: "2"}}>
        <ScrollProgress
          position={"left"}
          color={"orange"}
          height={10}
          smoothness={true}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <LazySiteBarLeft />
          <LazyRadialGradient scale="scale-y-125" opacity="opacity-30" position="fixed" />
          <LazySiteBarRight />
        </Suspense>
      </header>
      <main className="relative">
        <h1>{project.title}</h1>
        {/* <img src={project.image} alt={project.title} />
        <p>{project.description}</p> */}
      </main>
      <Footer />
    </Layout>
  </>
  );
};

export default ProjectDetail;
