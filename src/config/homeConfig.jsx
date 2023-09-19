import React from "react";

import { MdOutlineScience, MdOutlineSupervisorAccount } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { GiHumanPyramid } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";

const homeConfig = {
  greeting: (
    <h1 className="heading">
      Hi! I'm <strong className="main-name">IHSAN NAJEEB P.N</strong>
    </h1>
  ),
  titles: ["Biotechnologist", "Lab Researcher", "Research Scientist"],
  about: {
    start:
      "Experienced Biotechnologist with a post-graduate degree in Biotechnology and " +
      "three years of diverse industry and institutional exposure. Specialized in " +
      "molecular biology techniques, cell culture, and advanced diagnostic methodologies. " +
      "Proficient in bioinformatics analysis and delivering innovative solutions. " +
      "Effective communicator with collaborative prowess, seeking a role in a progressive " +
      "diagnostic biotech company in the UAE to contribute to growth and success.",

    exit: "",
  },
  workTimeline: [
    {
      id: "work-4",
      title: "Lab Researcher",
      company: "Tangentup Labs Pvt. Ltd",
      description: [
        "Conducts complex laboratory analyses in specialized fields: AI and Biomedical Engineering.",
        "Executes challenging data reduction, analysis, and acquisition tasks.",
        "Contributes to experiment planning and protocol development.",
        "Implements infection control, environmental safety measures.",
        "Sets up, calibrates, and maintains advanced lab equipment.",
      ],
      date: "Oct 2022 – March 2023",
      icon: <MdOutlineScience />,
    },
    {
      id: "work-3",
      title: "Project Intern",
      company: "Rajiv Gandhi Centre for Biotechnology",
      description: [
        "Identifying inhibitors against pathogenic microbes using new molecule libraries.",
        "Conducted 'Differential Phenotyping of HPB' study alongside main research.",
        "Performing biochemical, molecular, and haematology analyses.",
        "Ensuring work areas meet sanitation standards.",
        "Adhering to SOPs and reporting scientific data.",
      ],
      date: "May 2022 – Oct 2023",
      icon: <VscProject />,
    },
    {
      id: "work-2",
      title: "Supervisor",
      company: "Royal Marine Exports",
      description: [
        "Coordinates and supervises production staff per Company, HACCP, and FDA guidelines.",
        "Plans daily labor needs with Processing Facility Manager.",
        "Enforces Employee Hygiene Procedures and upholds Quality standards.",
        "Prepares and monitors facility stability data.",
        "Coordinates cargo tank loading operations.",
      ],
      date: "Jan 2021 – Jan 2022",
      icon: <MdOutlineSupervisorAccount />,
    },
    {
      id: "work-1",
      title: "Human Resource Executive",
      company: "Infiniz IT Solutions",
      description: [
        "Develop and implement HR policies aligned with organizational goals and industry best practices.",
        "Lead full-cycle recruitment: sourcing, screening, interviewing, and onboarding.",
        "Manage employee relations, promoting a positive work environment through conflict resolution.",
        "Conduct performance management: goal setting, evaluations, and development plans.",
        "Plan and execute engagement initiatives: teambuilding, recognition programs.",
        "Administer compensation and benefits, including salary benchmarking.",
        "Oversee training, identifying skill gaps and implementing solutions.",
        "Ensure compliance with labor laws, staying updated and recommending actions.",
      ],
      date: "Sept 2020 – Jan 2021",
      icon: <GiHumanPyramid />,
    },
    {
      id: "work-0",
      title: "Project Intern",
      company: "Kerala Veterinary and Animal Sciences University",
      description: [
        "Proficiently isolated animal cells for high-quality samples.",
        "Conducted PCR for detecting interleukin 1β gene expression.",
        "Executed ELISA assays for protein quantification and change detection.",
        "Used agarose gel electrophoresis for DNA/RNA fragment visualization.",
        "Applied Western blotting for protein analysis in cow samples.",
        "Analyzed RNA-Seq data to identify related genes/pathways.",
        "Executed SDS-PAGE gels for interleukin 1β protein study.",
        "Extracted RNA for accurate gene expression analysis.",
        "Quantified interleukin 1β mRNA via real-time PCR.",
        "Used histopathology to assess interleukin 1β-related tissue changes.",
        "Employed immunohistochemistry for protein localization.",
        "Conducted immunofluorescence staining for distribution visualization.",
        "Extracted and quantified proteins, including interleukin 1β, accurately.",
      ],
      date: "Dec 2019- May 2020",
      icon: <BsClipboardData />,
    },
  ],
};

export default homeConfig;
