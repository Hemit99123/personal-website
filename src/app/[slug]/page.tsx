"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { projectData } from "@/data/projects";
import { ProjectData } from "@/types/project";

interface PageParams {
    params: Promise<{ slug: string }>;
}

const Page: React.FC<PageParams> = ({ params }) => {
    const [project, setProject] = useState<ProjectData | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProject = async () => {
            const slug = (await params).slug;
            const foundProject = projectData.find((p) => p.slug === slug);
            if (!foundProject) {
                router.push("/"); // Redirect to home if project not found
            } else {
                setProject(foundProject);
            }
        };

        fetchProject();
    }, [params, router]);

    if (!project) return <p>Loading...</p>;

    const goToNextProject = () => {
        router.push(project.nextProject)
    }

    const goToCheckOut = () => {
        router.push(project.link)
    }

    return (
        <>
            {/* Main Content */}
            <div className="px-6 sm:px-12 md:px-32 lg:px-52 mt-10">
                <p
                    className="cursor-pointer hover:underline hover:text-pink-500"
                    onClick={() => router.push("/")}
                >
                    Take me home
                </p>

                <h1 className="font-header text-4xl sm:text-5xl md:text-7xl mt-5 font-black">
                    {project.title}
                </h1>

                <div className="flex flex-col items-center md:flex-row md:justify-between mt-16 gap-8">
                    <p className="text-lg sm:text-xl text-gray-700 font-medium max-w-full md:max-w-xl text-center md:text-left">
                        {project.description}
                    </p>
                    <button className="border w-full md:w-1/3 lg:w-1/5 h-12 rounded-lg border-gray-500 font-semibold hover:bg-black hover:text-white duration-300" onClick={goToCheckOut}>
                        Check it out!
                    </button>
                </div>

                <div className="mt-10 flex justify-center">
                    <img
                        src={project.mainImage}
                        alt={`${project.title} Mockup`}
                        className="w-full h-[70vh] object-cover rounded-lg shadow-lg md:max-w-3xl"
                    />
                </div>
            </div>

            {/* Impact Section */}
            <div className="bg-black text-white px-6 sm:px-12 md:px-32 lg:px-52 mt-28 py-16">
                <h1 className="font-black font-header text-xl sm:text-2xl md:text-4xl">
                    My Impact?
                </h1>

                <div className="mt-16 space-y-6 text-xl font-medium">
                    {project.impact.map((point: string, index: number) => (
                        <p key={index}>{`#${index + 1}: ${point}`}</p>
                    ))}
                </div>

                <div className="mt-10 mb-24">
                    {/* Main Image */}
                    <div className="flex justify-center mb-6">
                        <img
                            src={project.caseStudyImages[0]}
                            alt="Main Case Study"
                            className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-2 gap-2">
                        {project.caseStudyImages.slice(1).map((image: string, index: number) => (
                            <img
                                key={index}
                                className="w-full h-auto rounded-md object-cover"
                                src={image}
                                alt={`Case Study Thumbnail ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="divider">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        className="shape-fill"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        className="shape-fill"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>

            <div className="px-6 sm:px-12 md:px-32 lg:px-52">
                <h1 className="font-black font-header text-2xl sm:text-3xl md:text-5xl mb-5">
                    Stats?
                </h1>

                <div className="flex justify-between">
                    <div>
                        <h1 className="font-bold text-sky-800 text-6xl mb-px">
                            {project.stats[0].stat}
                        </h1>
                        <p>{project.stats[0].desc}</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-sky-800 text-6xl mb-px">
                            {project.stats[2].stat}
                        </h1>
                        <p>{project.stats[2].desc}</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-sky-800 text-6xl mb-px">
                            {project.stats[1].stat}
                        </h1>
                        <p>{project.stats[1].desc}</p>
                    </div>
                </div>

                <hr className="h-px my-8 bg-black border-0" />
                <p className="text-right cursor-pointer hover:underline hover:text-blue-500 mb-10" onClick={goToNextProject}>
                    View next project ➔
                </p>
            </div>
        </>
    );
};

export default Page;
