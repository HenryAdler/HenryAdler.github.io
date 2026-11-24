// ==========================================================================
// Case Study Modal Data (Single-HTML Modular Architecture)
// ==========================================================================
const CASE_STUDIES = {
    flyrank: {
        tag: "FlyRank AI Internship Capstone • Credential FR-D1-T668H-R789R",
        title: "Organic Search Decay Prediction & Refresh Playbook",
        linkText: "View GitHub Repository ↗",
        linkUrl: "https://github.com/HenryAdler/FlyRank",
        html: `
            <h4>01. Business & Engineering Problem</h4>
            <p>Content libraries experience silent organic traffic decay over time. Standard random train/test splits leak domain-level temporal signatures across URLs belonging to the same client, artificially inflating validation metrics (0.751 PR-AUC) and failing to generalize to unseen client portfolios.</p>

            <h4>02. Methodology & Pipeline Architecture</h4>
            <ul>
                <li><strong>Dataset Scale:</strong> 30,000 URL observations across 32 anonymized clients with a 54.2% positive decay base rate.</li>
                <li><strong>Leakage-Free Validation:</strong> Implemented a client-grouped validation split (<em>Grouped Honest Split</em>) so all URLs from a client remain strictly in train or test folds.</li>
                <li><strong>Explainability & Operations:</strong> Computed permutation feature importance and mapped model probabilities to an actionable editorial refresh queue.</li>
            </ul>

            <h4>03. Key Outcomes</h4>
            <ul>
                <li>Established a realistic out-of-client benchmark of <strong>0.575 PR-AUC</strong>.</li>
                <li>Isolated <code>impressions_90d</code> and <code>content_age_days</code> as the dominant predictive signals of decay onset.</li>
                <li>Delivered a prioritized refresh playbook categorizing pages by intervention urgency.</li>
            </ul>
        `
    },
    aerodesign: {
        tag: "Aerodynamics & Physics-Constrained AI",
        title: "Parametric RC Wing Aerodynamics & VSPAERO Automation",
        linkText: "Open AeroDesign PDF ↗",
        linkUrl: "Projeto%20de%20Aerodesing%20para%20Competicao.pdf",
        html: `
            <h4>01. Engineering Problem</h4>
            <p>Aerodynamic optimization for SAE AeroDesign scale wings requires iterative parametric geometry updates and angle-of-attack sweeps at low Reynolds numbers (10<sup>4</sup> to 10<sup>6</sup>), where unconstrained LLM code generation frequently invents non-physical boundary conditions.</p>

            <h4>02. What I Did</h4>
            <ul>
                <li>Engineered a structured, physics-constrained prompt architecture for the OpenVSP / PYVSP Python API.</li>
                <li>Modeled a trapezoidal wing using the high-lift <strong>Selig-1223RTL</strong> airfoil (Span = 2.4 m, Root Chord = 0.6 m, Tip Chord = 0.3 m, Aspect Ratio = 4.0, Area = 1.44 m<sup>2</sup>) with LE/TE mesh clustering.</li>
                <li>Cross-validated VSPAERO Vortex Lattice Method (VLM) polars against XFLR5 panel method batch runs across &alpha; = 0&deg; to 10&deg; (21 evaluation points).</li>
            </ul>

            <h4>03. What Came of It</h4>
            <ul>
                <li>Automated batch geometry generation and steady &Delta;C<sub>p</sub> visualization at subsonic flow (Mach ~ 0.001).</li>
                <li>Characterized laminar separation bubble behavior and stall onset between &alpha; = 6.5&deg; and 10&deg; while quantifying lift-vs-induced-drag trade-offs.</li>
            </ul>
        `
    },
    "pla-annealing": {
        tag: "Materials Science & Experimental Metrology",
        title: "Thermal Smoothing (Annealing) of FDM 3D-Printed PLA",
        linkText: "Open Full Lab Report (PDF) ↗",
        linkUrl: "Henry_Adler_Portfolio.pdf",
        html: `
            <h4>01. Engineering Problem</h4>
            <p>Fused Deposition Modeling (FDM) PLA components exhibit staircase surface roughness (<em>Ra</em>). Thermal post-processing above the glass transition temperature (<em>T<sub>g</sub></em> &approx; 55&deg;C&ndash;65&deg;C) can smooth surface ridges, but excessive heat triggers dimensional collapse and interlayer strength loss.</p>

            <h4>02. Experimental Setup</h4>
            <ul>
                <li><strong>Surface Metrology (ISO 4288):</strong> Evaluated 36 specimens across a 4&times;3 matrix (60&deg;C, 80&deg;C, 100&deg;C, 120&deg;C for 10, 30, and 60 min) using a Mitutoyo SJ-210 profilometer (L<sub>c</sub> = 2.5 mm, L<sub>t</sub> = 12.5 mm).</li>
                <li><strong>Tensile Testing (ISO 527-2):</strong> Tested 6 specimens on an EMIC DL-10000 universal testing machine (100 kN capacity) comparing untreated baseline vs. optimal thermal regime.</li>
            </ul>

            <h4>03. Quantitative Results</h4>
            <ul>
                <li><strong>Optimal Regime (80&deg;C / 30 min):</strong> Reduced mean surface roughness <em>Ra</em> by <strong>4.59%</strong> (from 31.67 &mu;m to 30.23 &mu;m) with only a <strong>4.1%</strong> reduction in Ultimate Tensile Strength (45.22 MPa to 43.36 MPa).</li>
                <li><strong>Thermal Failure Limit:</strong> Treatments at 120&deg;C induced severe viscoelastic warping and dimensional collapse.</li>
            </ul>
        `
    },
    "asme-vessel": {
        tag: "Mechanical Design & Pressure Codes",
        title: "ASME Sec. VIII Div. 1 Torispherical Pressure Vessel Sizing",
        linkText: "Open Pressure Vessel PDF ↗",
        linkUrl: "Contrucao%20de%20Vaso%20de%20Press%C3%A3o%20Toriesf%C3%A9rico.pdf",
        html: `
            <h4>01. Engineering Problem</h4>
            <p>Designing metallic pressure vessels with torispherical heads requires strict adherence to internal pressure wall-thickness formulas, weld joint efficiencies, and Maximum Allowable Working Pressure (MAWP / PMTA) safety margins.</p>

            <h4>02. What I Did</h4>
            <ul>
                <li>Performed analytical wall-thickness sizing for cylindrical shells and torispherical formed heads under ASME Boiler and Pressure Vessel Code (BPVC) Section VIII, Division 1.</li>
                <li>Verified material allowable stresses, corrosion allowances, and pressure relief valve set-point alignment.</li>
            </ul>

            <h4>03. What Came of It</h4>
            <ul>
                <li>Produced complete fabrication calculation sheets confirming structural integrity under design pressure and hydrostatic test conditions.</li>
            </ul>
        `
    }
};

// ==========================================================================
// Search & Category Filtering
// ==========================================================================
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const noResultsMsg = document.getElementById("no-results");

let activeCategory = "all";

function filterProjects() {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        const tags = (card.getAttribute("data-tags") || "").toLowerCase();
        const text = card.innerText.toLowerCase();

        const matchesCategory = activeCategory === "all" || categories.includes(activeCategory);
        const matchesSearch = !query || text.includes(query) || tags.includes(query);

        if (matchesCategory && matchesSearch) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleCount === 0) {
        noResultsMsg.classList.remove("hidden");
    } else {
        noResultsMsg.classList.add("hidden");
    }
}

searchInput.addEventListener("input", filterProjects);

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-filter");
        filterProjects();
    });
});

// ==========================================================================
// Case Study Modal Logic
// ==========================================================================
const modal = document.getElementById("case-modal");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalPrimaryLink = document.getElementById("modal-primary-link");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalDismissBtn = document.getElementById("modal-dismiss-btn");

function openCaseModal(caseKey) {
    const data = CASE_STUDIES[caseKey];
    if (!data) return;

    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.html;
    modalPrimaryLink.textContent = data.linkText;
    modalPrimaryLink.href = data.linkUrl;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeCaseModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

document.querySelectorAll(".open-case-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        openCaseModal(btn.getAttribute("data-case"));
    });
});

closeModalBtn.addEventListener("click", closeCaseModal);
modalDismissBtn.addEventListener("click", closeCaseModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeCaseModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeCaseModal();
    }
});

// ==========================================================================
// One-Click Email Copy
// ==========================================================================
const copyEmailBtn = document.getElementById("copy-email-btn");
if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText("adlerhenry.mn@gmail.com");
            copyEmailBtn.textContent = "Copied!";
            setTimeout(() => {
                copyEmailBtn.textContent = "Copy";
            }, 2000);
        } catch {
            copyEmailBtn.textContent = "adlerhenry.mn@gmail.com";
        }
    });
}
