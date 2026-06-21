export const researchItems = [
  {
    slug: "hydrogen-combustion-stratification-multi-jet-combustors",
    title: "Near-Field vs Far-Field Stratification Dynamics in Multi-Jet Hydrogen Combustors",
    affiliation: "IIT Roorkee",
    status: "Research Report 2025",
    award: "1st Place, Konkurransen Unge Forskere 2026",
    abstract:
      "This study quantifies mixing non-uniformity in annular multi-jet hydrogen combustors using Ansys Fluent CFD, introducing H₂O mass fraction as a novel proxy for combustion stratification across near-field and far-field domains.",
    methods: ["Ansys Fluent", "Annular combustor geometry", "H₂O mass fraction proxy", "Python post-processing"],
    pdfPath: "/papers/finalKUF.pdf",
    externalLink: null,
    html: `
      <h2>Aviation emissions and the hydrogen combustion challenge</h2>
      <p>Aviation accounts for a growing share of anthropogenic greenhouse gas emissions, and the sector faces mounting pressure to decarbonise without sacrificing the energy density that makes long-haul flight viable. Hydrogen has emerged as a leading candidate fuel: it burns without CO₂, offers a high gravimetric heating value, and can be produced from renewable electricity. Yet the transition from kerosene to hydrogen is not a simple drop-in replacement. Hydrogen's wide flammability limits and high diffusivity produce fundamentally different combustion physics — most critically, a tendency toward mixing-limited rather than kinetically limited combustion in practical combustor geometries.</p>
      <p>In a conventional kerosene annular combustor, fuel is injected as a liquid spray that vaporises and mixes with air over a characteristic length scale. Hydrogen, by contrast, enters as a gas with diffusivity roughly six times that of methane. In multi-jet configurations — where discrete fuel injectors are distributed around an annular flame tube — this high diffusivity can produce steep spatial gradients in equivalence ratio before the flame front stabilises. The result is <em>stratification</em>: spatially non-uniform combustion intensity that varies with injector spacing, momentum flux ratio, and downstream distance. For aviation applications, stratification matters because it governs NOₓ formation pathways, combustor stability margins, and the spatial distribution of hot spots that drive thermal loading on turbine components.</p>

      <h2>Stratification quantification methodology</h2>
      <p>Quantifying stratification requires a field variable that tracks the spatial non-uniformity of the combustion process without conflating it with purely thermal effects. We introduced <strong>H₂O mass fraction</strong> as a stratification proxy in Ansys Fluent simulations of an annular multi-jet hydrogen combustor. Water is a direct product of hydrogen oxidation (2H₂ + O₂ → 2H₂O), and its mass fraction field reflects the cumulative history of mixing and reaction along streamlines. Regions of locally elevated H₂O indicate zones where reactants have had sufficient residence time and mixing quality to proceed to near-complete conversion; depressed H₂O zones signal incomplete mixing or locally lean/rich pockets.</p>
      <p>The combustor geometry was modelled as an annular flame tube with circumferentially distributed fuel jets and a central pilot zone. Boundary conditions were set to represent cruise-relevant pressure and inlet temperature, with hydrogen injected at multiple azimuthal positions to capture jet–jet interaction. The Reynolds-Averaged Navier–Stokes (RANS) framework with a finite-rate/eddy-dissipation combustion model was used, with mesh refinement concentrated at jet shear layers and the recirculation zone aft of the dome swirler. Steady-state solutions were obtained for multiple injector configurations, and field data were exported for automated post-processing using a Python pipeline that computed spatial statistics of the H₂O distribution.</p>
      <p>Two spatial domains were defined to separate near-field and far-field behaviour. The <strong>near-field domain</strong> extends from the injector plane to approximately one combustor diameter downstream, capturing jet penetration, initial entrainment, and the formation of recirculation zones. The <strong>far-field domain</strong> spans from one diameter to the combustor exit, where bulk mixing homogenises the flow and the H₂O field approaches a more uniform distribution. Stratification was quantified in each domain using the coefficient of variation (standard deviation divided by mean) of H₂O mass fraction on azimuthally distributed sampling planes.</p>

      <h2>Near-field vs far-field dynamics</h2>
      <p>Near-field simulations reveal the strongest stratification signatures. Individual hydrogen jets maintain coherent structure for several jet diameters downstream, producing azimuthal variation in H₂O mass fraction that correlates directly with injector spacing. Jets with higher momentum penetrate deeper before dispersing, creating elongated high-H₂O streaks along their axes, while lower-momentum jets produce broader but shallower reaction zones. Jet–jet interaction in the annular arrangement generates saddle points in the H₂O field where recirculating flow from adjacent jets mixes product gases before fresh reactants arrive — these interaction zones are the primary locus of near-field non-uniformity.</p>
      <p>Transition to the far field is marked by a rapid decay in the coefficient of variation. Turbulent diffusion and the annular recirculation pattern redistribute H₂O across azimuthal positions, and by the combustor exit plane the field is substantially more homogeneous. However, the far-field distribution is not uniform: residual azimuthal modes persist at reduced amplitude, indicating that near-field injector layout imprints a fingerprint on exit-plane composition that cannot be fully erased by downstream mixing alone. This has direct implications for turbine inlet temperature profiles and for emissions indexing, where exit-plane uniformity is often assumed in reduced-order models.</p>

      <h2>Key findings</h2>
      <p>Three principal findings emerge from this study. First, H₂O mass fraction is an effective and physically grounded proxy for combustion stratification in hydrogen systems — it captures both the spatial extent of reaction and the degree of local mixing completion without requiring explicit flame-front tracking. Second, near-field stratification is dominated by injector momentum and spacing, with the highest non-uniformity occurring within one combustor diameter of the fuel injection plane; far-field decay follows a consistent scaling with turbulent Peclet number across the configurations tested. Third, even at the combustor exit, residual azimuthal non-uniformity of 8–12% (coefficient of variation) persists in the most aggressively stratified configurations, suggesting that combustor design criteria developed for kerosene — which typically target exit-plane uniformity below 5% — may need revision for hydrogen multi-jet architectures.</p>
      <p>These results inform ongoing work on hydrogen aviation combustor design at IIT Roorkee and provide a quantitative framework for comparing injector configurations before committing to expensive experimental campaigns. Future work will extend the analysis to transient ignition sequences and couple the combustor exit profiles to downstream turbine and exhaust simulations.</p>
    `
  },
  {
    slug: "hydrogen-exhaust-thermodynamics-contrail-formation",
    title: "CFD Analysis of Near-Field Exhaust Thermodynamics in Hydrogen-Fuelled Jet Engines and Contrail Formation",
    affiliation: "IIT Roorkee",
    status: "Research Report 2025",
    award: "1st Place, AIAA Region VII Student Conference, Dec 2025",
    abstract:
      "A computational investigation of near-field exhaust thermodynamics in hydrogen-fuelled jet engines, comparing 10 inlet configurations with kerosene baselines and assessing contrail formation potential via Tetens-formula saturation ratio analysis.",
    methods: ["SALOME geometry", "OpenFOAM rhoSimpleFoam", "Tetens saturation ratio", "10 inlet configurations"],
    pdfPath: "/papers/hydrogen-exhaust-contrail-openfoam.pdf",
    externalLink: null,
    html: `
      <h2>Motivation</h2>
      <p>While hydrogen combustion eliminates CO₂ emissions, hydrogen-fuelled engines produce substantially more water vapour per unit of heat released than kerosene counterparts. This raises the question of whether hydrogen aviation could increase contrail formation — with associated radiative forcing — even as carbon emissions fall. Near-field exhaust thermodynamics, where mixing with ambient air and rapid cooling occur, govern whether the exhaust plume crosses the saturation threshold for ice crystal nucleation.</p>

      <h2>Methodology</h2>
      <p>A simplified cylindrical nozzle-and-exhaust domain was designed in SALOME, with locally refined hexahedral meshing concentrated at the shear layer between the hot exhaust core and ambient co-flow. Simulations were run using the rhoSimpleFoam solver in OpenFOAM under steady, compressible conditions. Ten inlet configurations were tested, spanning kerosene and hydrogen exhaust compositions at representative thrust-relevant mass flow rates and temperatures.</p>
      <p>Post-processing introduced a saturation ratio field computed via the Tetens formula for water vapour pressure as a function of local temperature. A saturation ratio exceeding unity indicates thermodynamic conditions favourable to contrail formation, subject to nucleation kinetics and ambient humidity.</p>

      <h2>Results</h2>
      <p>Hydrogen exhaust configurations consistently produced saturation ratios above unity within the near-field mixing zone, driven by the higher H₂O mole fraction in the exhaust stream and the rapid cooling associated with entrainment of cold ambient air. Kerosene cases, by contrast, remained near or below the saturation threshold under equivalent ambient conditions, consistent with their lower water production and different thermodynamic trajectories in the mixing layer.</p>
      <p>The spatial extent of supersaturated regions varied with inlet momentum and ambient relative humidity assumptions, but the qualitative conclusion held across all ten configurations: hydrogen exhausts carry a structurally higher contrail formation potential that must be accounted for in lifecycle climate assessments of hydrogen aviation.</p>

      <h2>Implications</h2>
      <p>These findings do not imply that hydrogen aviation is net-negative for climate — contrail radiative forcing depends on flight altitude, time of day, and background cirrus — but they establish that contrail physics must be part of the design conversation from the outset. Ongoing work couples these near-field profiles to plume dispersion models at cruise altitude.</p>
    `
  },
  {
    slug: "looping-pendulum-friction-dynamics",
    title: "Simulated Analysis of the Friction-Governed Dynamics of the Looping Pendulum",
    affiliation: "European Journal of Physics — Vol. 47, No. 1 (2026)",
    status: "Published 2026",
    abstract:
      "A peer-reviewed investigation of nonlinear looping pendulum dynamics by Avighna Daruka, Gyaneshwaran Gomathinayagam, and Aneesh Agarwal — combining coupled ODE derivation, Web-VPython real-time simulation, and experimental validation via 240 fps motion tracking achieving 98.5% predictive accuracy.",
    methods: ["Coupled nonlinear ODEs", "Web-VPython simulation", "240 fps motion tracking", "Experimental validation"],
    pdfPath: "/papers/looping-pendulum-ejp-2026.pdf",
    externalLink: "https://iopscience.iop.org/article/10.1088/1361-6404/ae257a",
    html: `
      <h2>Overview</h2>
      <p>The looping pendulum — a rigid pendulum driven through a full vertical loop — exhibits rich nonlinear behaviour governed by friction, angular momentum, and the transition between oscillatory and rotational regimes. Despite its apparent simplicity, the system produces hysteresis, period-doubling, and energy-dependent mode switching that make it an instructive testbed for computational mechanics.</p>

      <h2>Methods</h2>
      <p>We derived coupled nonlinear ordinary differential equations incorporating bearing friction, air drag, and variable driving torque. A real-time Web-VPython simulation platform was built to integrate these equations and render the pendulum state interactively, allowing parameter sweeps across friction coefficients and drive amplitudes.</p>
      <p>Experimental validation used 240 fps motion tracking to extract angular position and velocity time series. The simulation was calibrated against these trajectories, achieving 98.5% predictive accuracy across the tested parameter range — defined as the fraction of variance in angular position explained by the model.</p>

      <h2>Key results</h2>
      <p>The model successfully captured the critical driving amplitude at which the pendulum transitions from partial oscillation to complete looping, including the friction-dependent hysteresis loop where the transition threshold differs for increasing versus decreasing drive. The Web-VPython platform enabled real-time visualisation of phase-space trajectories, making the connection between friction dissipation and stability margins accessible to students.</p>

      <h2>Publication</h2>
      <p>
        <em>Simulated analysis of the friction governed dynamics of the looping pendulum</em><br />
        Avighna Daruka, Gyaneshwaran Gomathinayagam, and Aneesh Agarwal<br />
        Published 9 January 2026 · © 2026 European Physical Society<br />
        <em>European Journal of Physics</em>, Volume 47, Number 1<br />
        Citation: Eur. J. Phys. 47 015012 · DOI <a href="https://doi.org/10.1088/1361-6404/ae257a">10.1088/1361-6404/ae257a</a>
      </p>
    `
  },
  {
    slug: "airfoil-angle-of-attack-lift",
    title: "Influence of Angle of Attack on Airfoil Lift: A Computational Study",
    affiliation: "The Doon School — Young Scientists Journal",
    status: "Published 2025",
    abstract:
      "A computational study of lift and drag behaviour across NACA airfoil configurations, identifying critical stall angles through high-resolution angle-of-attack sweeps at 1° and 0.1° intervals.",
    methods: ["NACA airfoil CFD", "Stall-angle identification", "1° and 0.1° interval sweeps"],
    pdfPath: "/papers/airfoil-lift-ysj-2025.pdf",
    externalLink: null,
    html: `
      <h2>Overview</h2>
      <p>Understanding the relationship between angle of attack and aerodynamic loading is foundational to wing design, rotor aerodynamics, and stability analysis. This study used computational fluid dynamics to map lift and drag coefficients across a range of NACA airfoil profiles, with particular attention to the onset of stall.</p>

      <h2>Methods</h2>
      <p>Simulations were conducted on standard NACA 4-digit airfoil geometries at Reynolds numbers representative of small unmanned aerial vehicles. Angle of attack was swept from −5° to 20° at 1° intervals, with refined 0.1° spacing in the stall region where lift coefficient gradients change most rapidly. Incompressible RANS with a Spalart–Allmaras turbulence model was used throughout.</p>

      <h2>Results</h2>
      <p>Lift coefficient increased approximately linearly with angle of attack in the pre-stall regime, consistent with thin-airfoil theory. Stall onset was identified as the angle at which the lift-curve slope departed from linearity by more than 5%, occurring between 12° and 16° depending on camber and thickness. Post-stall behaviour showed characteristic lift reduction and drag rise, with hysteresis effects noted in unsteady runs.</p>

      <h2>Publication</h2>
      <p>Findings are published in the <em>Young Scientists Journal</em> (2025).</p>
    `
  }
];

export function getResearchBySlug(slug) {
  return researchItems.find((item) => item.slug === slug) ?? null;
}

export function getAllResearchSlugs() {
  return researchItems.map((item) => item.slug);
}
