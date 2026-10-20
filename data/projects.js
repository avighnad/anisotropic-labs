export const focusAreas = [
  {
    id: "01",
    title: "Hydrogen Combustion & Stratification",
    description:
      "CFD analysis of mixing nonuniformity in multijet hydrogen combustors, using H₂O mass fraction as a stratification proxy in annular geometries."
  },
  {
    id: "02",
    title: "Aerospace Exhaust & Contrails",
    description:
      "Near field exhaust simulations across hydrogen and kerosene configurations, with saturation ratio analysis for contrail formation potential."
  },
  {
    id: "03",
    title: "Nonlinear Dynamical Systems",
    description:
      "Computational study of friction governed pendulum dynamics, validated against 240 fps motion tracking with 98.5% predictive accuracy."
  }
];

export const projects = [
  {
    id: "anisotropic-app",
    featured: true,
    title: "The Anisotropic App",
    eyebrow: "LiDAR Based AR Fluid Simulation",
    tagline: "Making invisible airflow legible in physical space.",
    problem:
      "Fluid behaviour is difficult to build intuition for because velocity fields, pressure gradients, and transport mechanisms are invisible. Classroom demonstrations and textbook diagrams abstract away the spatial structure that makes flow problems genuinely anisotropic.",
    approach:
      "The lab is developing a LiDAR based AR tool that captures room scale geometry via ARKit mesh reconstruction, then overlays a lightweight real time CFD approximation mapped onto the captured surface. The stack is Swift on iOS, using LiDAR depth data to define boundary conditions and a simplified solver loop tuned for interactive frame rates rather than full Navier Stokes fidelity.",
    stage: "Concept / prototype",
    useCase:
      "Built for students and early researchers who need mechanistic intuition for fluid behaviour, including vent placement, boundary layer effects, and directional transport, without standing up a full simulation pipeline.",
    tech: ["Swift", "ARKit", "LiDAR", "Real time CFD approximation"]
  },
  {
    id: "hamara-prayas",
    featured: false,
    title: "Hamara Prayas iOS App",
    eyebrow: "Healthcare Platform",
    tagline: "Real time blood donation requests and verified bank locators.",
    problem:
      "Hamara Prayas addresses chronic blood shortages for Thalassaemia and Leukaemia patients in Bihar, born from direct experience with gaps in availability during critical treatment periods.",
    approach:
      "The lab developed an iOS application in Swift featuring real time blood requests, verified blood bank locators, and live community alerts. The platform has supported 24 blood donation camps collecting 6,956 units and reaching 300+ patients.",
    stage: "In production",
    useCase: "Connecting donors, patients, and blood banks across underserved regions in India.",
    tech: ["Swift", "iOS", "Real time alerts"],
    link: "http://hamaraprayas.in/"
  },
  {
    id: "cfd-pipeline",
    featured: false,
    title: "Automated CFD Post Processing Pipeline",
    eyebrow: "IIT Roorkee Internship Tooling",
    tagline: "Python automation for combustion and exhaust simulation outputs.",
    problem:
      "Large CFD campaigns in hydrogen combustion and exhaust thermodynamics generate hundreds of field snapshots that require consistent extraction, normalisation, and comparison across inlet configurations.",
    approach:
      "Built during the IIT Roorkee research internship, this pipeline automates post processing of Ansys Fluent and OpenFOAM outputs in ParaView, including H₂O mass fraction stratification metrics and Tetens formula saturation ratio fields across 10 inlet configurations.",
    stage: "Research tooling",
    useCase: "Accelerating reproducible analysis for multicase combustion and exhaust studies.",
    tech: ["Python", "ParaView", "NumPy", "Ansys Fluent", "OpenFOAM"]
  }
];
