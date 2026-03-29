export interface GalleryItem {
    type: 'image' | 'video';
    url: string;
}

export interface Project {
    id: string;
    title: string;
    year?: string;
    stack: string;
    description: {
        es: string;
        en: string;
    };
    image: string;
    codeLink?: string;
    liveLink?: string;
    gallery?: GalleryItem[];
}

const sampleVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

export const projectsData: Project[] = [
    {
        id: "minimal-writer",
        title: "Minimal Writer",
        stack: "React • TypeScript",
        description: {
            es: "Un procesador de textos minimalista diseñado para escribir sin distracciones, enfocado en la productividad y la fluidez del autor.",
            en: "A minimalist word processor designed for distraction-free writing, focusing on the author's productivity and flow."
        },
        image: "https://placeholder.co/400x600/2A1414/D1B47A?text=Minimal+Writer",
        gallery: [
            { type: 'image', url: "https://placeholder.co/1280x720/2A1414/D1B47A?text=Minimal+Writer+Screen+1" },
            { type: 'video', url: sampleVideo },
            { type: 'image', url: "https://placeholder.co/1280x720/3A2424/E1C48A?text=Minimal+Writer+Screen+2" },
            { type: 'image', url: "https://placeholder.co/1280x720/4A3434/F1D49A?text=Minimal+Writer+Screen+3" },
            { type: 'image', url: "https://placeholder.co/1280x720/1A0404/C1A46A?text=Minimal+Writer+Screen+4" }
        ]
    },
    {
        id: "space-pixels",
        title: "Space Pixels",
        stack: "React • TypeScript",
        description: {
            es: "Space invaders con estilo pixel art. Los jugadores pueden crear y personalizar sus naves, consultar puntuaciones y explorar múltiples funcionalidades a través de una interfaz interactiva.",
            en: "Pixel art style space invaders. Players can create and customize their ships, view scores and explore multiple features through an interactive interface."
        },
        image: "https://placeholder.co/400x600/08070A/4C6A4F?text=Space+Pixels",
        codeLink: "https://github.com/Let0oro/space-pixels",
        liveLink: "https://space-pixels.vercel.app",
        gallery: [
            { type: 'image', url: "https://placeholder.co/1280x720/08070A/4C6A4F?text=Space+Pixels+1" },
            { type: 'video', url: sampleVideo },
            { type: 'image', url: "https://placeholder.co/1280x720/18171A/5C7A5F?text=Space+Pixels+2" },
            { type: 'image', url: "https://placeholder.co/1280x720/28272A/6C8A6F?text=Space+Pixels+3" },
            { type: 'image', url: "https://placeholder.co/1280x720/000000/3C5A3F?text=Space+Pixels+4" }
        ]
    },
    {
        id: "mind-breakers",
        title: "Mind Breakers",
        stack: "Next.js • TypeScript",
        description: {
            es: "Plataforma gamificada orientada a sostener la constancia del autoaprendizaje. Aprovechando el ecosistema de Next.js, transforma el registro del progreso académico en un juego de rol donde los usuarios ganan XP y compiten en leaderboards.",
            en: "Gamified platform aimed at sustaining consistency in self-learning. Leveraging the Next.js ecosystem, it transforms the tracking of academic progress into a role-playing game where users earn XP and compete on leaderboards."
        },
        image: "https://placeholder.co/400x600/B3393A/F3E6D4?text=Mind+Breakers",
        codeLink: "https://github.com/Let0oro/mind-breakers",
        liveLink: "https://mind-breakers.vercel.app",
        gallery: [
            { type: 'image', url: "https://placeholder.co/1280x720/B3393A/F3E6D4?text=Mind+Breakers+1" },
            { type: 'image', url: "https://placeholder.co/1280x720/A3292A/E3D6C4?text=Mind+Breakers+2" },
            { type: 'image', url: "https://placeholder.co/1280x720/93191A/C3B6A4?text=Mind+Breakers+3" },
            { type: 'image', url: "https://placeholder.co/1280x720/C3494A/FFF6E4?text=Mind+Breakers+4" },
            { type: 'image', url: "https://placeholder.co/1280x720/83090A/B3A694?text=Mind+Breakers+5" }
        ]
    },
    {
        id: "book-mng",
        title: "Book-Mng",
        stack: "Tauri • Rust • React • Turso",
        description: {
            es: "App de escritorio multiplataforma (Tauri + Rust + Vite) para el seguimiento de lecturas. Utiliza una BD local SQLite cifrada con sincronización en la nube vía Turso. Arquitectura optimizada 3NF sin problemas de consultas N+1 y diseño ultra-minimalista con edición inline.",
            en: "Cross-platform desktop app (Tauri + Rust + Vite) for reading tracking. Uses an encrypted local SQLite DB with cloud sync via Turso. Optimized 3NF architecture with no N+1 query issues and an ultra-minimalist design with inline editing."
        },
        image: "https://placeholder.co/400x600/08070A/D1B47A?text=Book-Mng",
        gallery: [
            { type: 'image', url: "https://placeholder.co/1280x720/08070A/D1B47A?text=Book-Mng+Main" },
            { type: 'video', url: sampleVideo },
            { type: 'image', url: "https://placeholder.co/1280x720/18171A/E1C48A?text=Book-Mng+Stats" },
            { type: 'image', url: "https://placeholder.co/1280x720/28272A/F1D49A?text=Book-Mng+Logs" },
            { type: 'image', url: "https://placeholder.co/1280x720/000000/C1A46A?text=Book-Mng+Settings" }
        ]
    },
    {
        id: "infinite-study",
        title: "Infinite Study",
        stack: "Rust • React • OCR",
        description: {
            es: "Plataforma Open Source orientada a estudiantes e investigadores para la gestión de archivos. Integra un potente motor OCR en Rust, un modelo de aprendizaje inspirado en la técnica Feynman, y un editor Markdown avanzado con soporte para esquemas interactivos.",
            en: "Open Source platform aimed at students and researchers for file management. Integrates a powerful OCR engine in Rust, a learning model inspired by the Feynman technique, and an advanced Markdown editor with interactive outline support."
        },
        image: "https://placeholder.co/400x600/2A1414/4C6A4F?text=Infinite+Study",
        gallery: [
            { type: 'image', url: "https://placeholder.co/1280x720/2A1414/4C6A4F?text=Infinite+Study+Dashboard" },
            { type: 'video', url: sampleVideo },
            { type: 'image', url: "https://placeholder.co/1280x720/3A2424/5C7A5F?text=Infinite+Study+Editor" },
            { type: 'image', url: "https://placeholder.co/1280x720/4A3434/6C8A6F?text=Infinite+Study+OCR" },
            { type: 'image', url: "https://placeholder.co/1280x720/1A0404/3C5A3F?text=Infinite+Study+Graph" }
        ]
    }
];
