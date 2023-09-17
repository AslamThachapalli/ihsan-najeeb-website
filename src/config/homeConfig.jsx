import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";

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
      description:
        "Build AutoML models and make them available to non-technical " +
        "users from a graphical interface.",
      date: "Oct 2022 – March 2023",
      icon: <DiCodeigniter />,
      tags: ["ml", "automl", "python", "docker", "redshift", "superset"],
    },
    {
      id: "work-3",
      title: "Project Intern",
      company: "Rajiv Gandhi Centre for Biotechnology",
      description:
        "Leading a team of analysts and data scientists to execute different projects, " +
        "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
      date: "May 2022 – Oct 2023",
      icon: <FaMobileAlt />,
      tags: [
        "ml",
        "airflow",
        "python",
        "docker",
        "snowflake",
        "postgres",
        "azure",
      ],
    },
    {
      id: "work-2",
      title: "Supervisor",
      company: "Royal Marine Exports",
      description:
        "Tech leader of a BI, Data Science and DBA team. " +
        "Build forecast models, data warehouse and Power BI dashboards.",
      date: "Jan 2021 – Jan 2022",
      icon: <GiCommercialAirplane />,
      tags: ["ml", "mssql", "python", "docker", "pbi", "azure"],
    },
    {
      id: "work-1",
      title: "Human Resource Executive",
      company: "Infiniz IT Solutions",
      description:
        "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
      date: "Sept 2020 – Jan 2021",
      icon: <BsClipboardData />,
      tags: ["python", "mssql", "pbi", "excel"],
    },
    {
      id: "work-0",
      title: "Project Intern",
      company: "Kerala Veterinary and Animal Sciences University",
      description:
        "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
      date: "Dec 2019- May 2020",
      icon: <BsClipboardData />,
      tags: ["python", "mssql", "pbi", "excel"],
    },
  ],
};

export default homeConfig;
