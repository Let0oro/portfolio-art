export interface ResumePage {
    title: string;
    dropCap?: string | null;
    html: string;
}

export const resumePages: Record<'es' | 'en', ResumePage[]> = {
    es: [
        {
            title: "Prólogo",
            dropCap: "D",
            html: `<p>esarrollador y apasionado de la informática con máster en programación por Rock The Code y experiencia en tecnologías como React, Next.js, Angular, Express, MongoDB y PostgreSQL.</p>
            <p>He trabajado en proyectos destacados, como un sistema de tracking en tiempo real. Actualmente, estudiando Desarrollo de Aplicaciones Multiplataforma (DAM) en Retamar para profundizar en mis conocimientos de programación.</p>`,
        },
        {
            title: "Experiencia Laboral",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Freelance Full Stack Developer</h4>
                    <span class="date">2024 &mdash; 2025</span>
                    <ul>
                        <li>Diseño y desarrollo de soluciones enfocadas en mejorar la experiencia del usuario final en tecnologías como SolidJS y Angular 18.</li>
                        <li>Enfoque en aplicaciones web TV (Tizen, LG), implementación y mejora de funcionalidad según petición.</li>
                    </ul>
                </div>
            </div>`,
        },
        {
            title: "Experiencia Laboral II",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Packar | React Native Developer</h4>
                    <span class="date">2022 &mdash; 2023</span>
                    <ul>
                        <li>Desarrollo de aplicaciones con enfoque en funcionalidad en primer y segundo plano, diseño de pantallas y conexión con bases de datos.</li>
                        <li>Implementación de un sistema de tracking en tiempo real, incluyendo permisos de ubicación en segundo plano.</li>
                    </ul>
                </div>
            </div>`,
        },
        {
            title: "Formación",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Desarrollo de Aplicaciones Multiplataforma</h4>
                    <span class="date">2025 &mdash; Actualidad</span>
                    <p>Retamar - Ciclos formativos FP. Nota media: 9.4</p>
                </div>
                <div class="entry">
                    <h4>Máster Full-Stack Developer</h4>
                    <span class="date">2023 &mdash; 2024</span>
                    <p>ThePower</p>
                    <ul>
                        <li>Desarrollo avanzado de Frontend: React, Next.js, Angular, TS.</li>
                        <li>Backend: Express, MongoDB, PostgreSQL, Mongoose, Supabase.</li>
                    </ul>
                </div>
            </div>`,
        },
        {
            title: "Conocimientos",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Stack Tecnológico</h4>
                    <p>HTML/CSS, JS/TS, React, React Native, MongoDB, PSQL, Node.js, Express, NextJS, Angular, Jest, Vitest, Python, Java, Spring Boot.</p>
                </div>
                <br />
                <div class="entry">
                    <h4>Idiomas</h4>
                    <ul>
                        <li>Inglés: B2</li>
                        <li>Francés: A2</li>
                        <li>Alemán: A2</li>
                    </ul>
                </div>
            </div>`,
        },
        {
            title: "Voluntariado",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Coordinador Cáritas</h4>
                    <span class="date">2023 &mdash; Actualidad</span>
                    <p>San Saturnino &mdash; Alcorcón</p>
                </div>
                <div class="entry">
                    <h4>Acompañamiento hospitalario</h4>
                    <span class="date">2022 &mdash; Actualidad</span>
                    <p>Las Praderas (Pozuelo) / Hospital Alcorcón</p>
                </div>
                <br />
                <div class="entry">
                    <h4>Otros intereses</h4>
                    <p>Interés cultural por el teatro, ópera e historia. Lector y escritor de poesía y cuentos.</p>
                </div>
            </div>`,
        },
    ],
    en: [
        {
            title: "Prologue",
            dropCap: "D",
            html: `<p>eveloper and computer science enthusiast with a Master's degree in programming from Rock The Code and experience in technologies such as React, Next.js, Angular, Express, MongoDB, and PostgreSQL.</p>
            <p>I have worked on notable projects, such as a real-time tracking system. Currently, I am studying Multi-platform Application Development (DAM) at Retamar to deepen my programming knowledge.</p>`,
        },
        {
            title: "Work Experience",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Freelance Full Stack Developer</h4>
                    <span class="date">2024 &mdash; 2025</span>
                    <ul>
                        <li>Design and development of solutions focused on improving end-user experience using technologies like SolidJS and Angular 18.</li>
                        <li>Focus on web TV applications (Tizen, LG), implementation and improvement of functionality per request.</li>
                    </ul>
                </div>
            </div>`,
        },
        {
            title: "Work Experience II",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Packar | React Native Developer</h4>
                    <span class="date">2022 &mdash; 2023</span>
                    <ul>
                        <li>Application development focusing on foreground and background functionality, screen design, and database connection.</li>
                        <li>Implementation of a real-time tracking system, including background location permissions.</li>
                    </ul>
                </div>
            </div>`,
        },
        {
            title: "Education",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Multi-platform App Development</h4>
                    <span class="date">2025 &mdash; Present</span>
                    <p>Retamar - Vocational Training. Average Grade: 9.4</p>
                </div>
                <div class="entry">
                    <h4>Master Full-Stack Developer</h4>
                    <span class="date">2023 &mdash; 2024</span>
                    <p>ThePower</p>
                    <ul>
                        <li>Advanced Frontend Development: React, Next.js, Angular, TS.</li>
                        <li>Backend: Express, MongoDB, PostgreSQL, Mongoose, Supabase.</li>
                    </ul>
                </div>
            </div>`,
        },
        {
            title: "Skills",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Tech Stack</h4>
                    <p>HTML/CSS, JS/TS, React, React Native, MongoDB, PSQL, Node.js, Express, NextJS, Angular, Jest, Vitest, Python, Java, Spring Boot.</p>
                </div>
                <br />
                <div class="entry">
                    <h4>Languages</h4>
                    <ul>
                        <li>English: B2</li>
                        <li>French: A2</li>
                        <li>German: A2</li>
                    </ul>
                </div>
            </div>`,
        },
        {
            title: "Volunteering & Int.",
            html: `<div class="book-entries">
                <div class="entry">
                    <h4>Cáritas Coordinator</h4>
                    <span class="date">2023 &mdash; Present</span>
                    <p>San Saturnino &mdash; Alcorcón</p>
                </div>
                <div class="entry">
                    <h4>Hospital Accompaniment</h4>
                    <span class="date">2022 &mdash; Present</span>
                    <p>Las Praderas (Pozuelo) / Hospital Alcorcón</p>
                </div>
                <br />
                <div class="entry">
                    <h4>Other Interests</h4>
                    <p>Cultural interest in theater, opera, and history. Reader and writer of poetry and short stories.</p>
                </div>
            </div>`,
        },
    ]
};
