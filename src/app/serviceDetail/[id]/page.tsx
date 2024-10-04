'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { services } from '../../../components/serviceSection/ServiceData'; // Import your services data

type Project = {
  projectId: number;
  projectTitle: string;
  projectDescription: string;
  projectImage: string;
  projectTechnology:string;
  responsibility:string[];
};

const ServiceDetail = () => {
  const params = useParams();
  const id = params?.id; 

  const [service, setService] = useState<{ title: string; projects: Project[] } | null>(null);

  useEffect(() => {
    if (id) {
      const foundService = services.find(service => service.id.toString() === id);
      setService(foundService || null);
    }
  }, [id]);

  if (!service) return <div>Loading...</div>;

  return (
    <div className="p-8 lg:px-42">
      <Link href="/" className="underline text-blue-800">Go Back</Link>
      <h1 className="text-center  font-semibold text-2xl font-serif mb-8">
        {service.title}
      </h1>
      {/* Grid layout for 3 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.projects.map((project) => (
          <div
            key={project.projectId}
            className="w-full border-t-2 border-sky-600 rounded shadow-2xl flex flex-col"
          >
            <img src={project.projectImage} alt={project.projectTitle} className="w-full h-44 object-cover rounded-t" />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-xl font-semibold">{project.projectTitle}</h2>
              <p className="description-text flex-grow-1 p-2 font-serif">
                {project.projectDescription}
              </p>
              <p className="description-text flex-grow-1 p-2 font-serif">
                {project.responsibility}
              </p>
              <p className="description-text flex-grow-1 p-2 font-serif">
                {project.projectTechnology}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
