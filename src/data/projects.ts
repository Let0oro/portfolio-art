export interface Project {
    id: string;
    title: string;
    year?: string;
    stack: string;
    description: string;
    image: string;
    codeLink?: string;
    liveLink?: string;
}

export const projectsData: Project[] = [
    {
        id: "minimal-writer",
        title: "Minimal Writer",
        stack: "React • TypeScript",
        description: "Un procesador de textos minimalista diseñado para escribir sin distracciones, enfocado en la productividad y la fluidez del autor.",
        image: "https://placeholder.co/400x600/2A1414/D1B47A?text=Minimal+Writer",
        codeLink: "https://github.com/Let0oro/minimal-writer",
    },
    {
        id: "space-pixels",
        title: "Space Pixels",
        stack: "JavaScript • Canvas",
        description: "Una simulación inmersiva que recrea sistemas estelares a nivel de partícula. Mediante cálculos directos de gravedad bidimensional, este motor visual fusiona el arte algorítmico y física de fluidos en tiempo real.",
        image: "https://placeholder.co/400x600/08070A/4C6A4F?text=Space+Pixels",
        codeLink: "https://github.com/Let0oro/space-pixels",
    },
    {
        id: "mind-breakers",
        title: "Mind Breakers",
        stack: "Next.js • TypeScript",
        description: "Plataforma gamificada orientada a sostener la constancia del autoaprendizaje. Aprovechando el ecosistema de Next.js, transforma el registro del progreso académico en un juego de rol donde los usuarios ganan XP y compiten en leaderboards.",
        image: "https://placeholder.co/400x600/B3393A/F3E6D4?text=Mind+Breakers",
        codeLink: "https://github.com/Let0oro/mind-breakers",
        liveLink: "https://mind-breakers.vercel.app"
    },
    {
        id: "book-mng",
        title: "Book-Mng",
        stack: "Tauri • Rust • React • Turso",
        description: "App de escritorio multiplataforma (Tauri + Rust + Vite) para el seguimiento de lecturas. Utiliza una BD local SQLite cifrada con sincronización en la nube vía Turso. Arquitectura optimizada 3NF sin problemas de consultas N+1 y diseño ultra-minimalista con edición inline.",
        image: "https://placeholder.co/400x600/08070A/D1B47A?text=Book-Mng",
        codeLink: "https://github.com/Let0oro", // Placeholder until published
    },
    {
        id: "infinite-study",
        title: "Infinite Study",
        stack: "Rust • React • OCR",
        description: "Plataforma Open Source orientada a estudiantes e investigadores para la gestión de archivos. Integra un potente motor OCR en Rust, un modelo de aprendizaje inspirado en la técnica Feynman, y un editor Markdown avanzado con soporte para esquemas interactivos.",
        image: "https://placeholder.co/400x600/2A1414/4C6A4F?text=Infinite+Study",
        codeLink: "https://github.com/Let0oro", // Placeholder until published
    }
];
