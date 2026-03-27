import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/sections/_experience.scss';

export default function ChronicleBook() {
    const [pageIndex, setPageIndex] = useState(0); // Index of the left page (desktop) or current page (mobile)
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const flipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 800;
            setIsMobile(mobile);
            if (!mobile) {
                setPageIndex(prev => (prev % 2 !== 0 ? prev - 1 : prev));
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const pages = [
        {
            title: "Prólogo",
            content: (
                <>
                    <p className="drop-cap">D</p>
                    <p>esarrollador y apasionado de la informática con máster en programación por Rock The Code y experiencia en tecnologías como React, Next.js, Angular, Express, MongoDB y PostgreSQL.</p>
                    <p>He trabajado en proyectos destacados, como un sistema de tracking en tiempo real. Actualmente, estudiando Desarrollo de Aplicaciones Multiplataforma (DAM) en Retamar para profundizar en mis conocimientos de programación.</p>
                </>
            )
        },
        {
            title: "Experiencia Laboral",
            content: (
                <div className="book-entries">
                    <div className="entry">
                        <h4>Freelance Full Stack Developer</h4>
                        <span className="date">2024 &mdash; 2025</span>
                        <ul>
                            <li>Diseño y desarrollo de soluciones enfocadas en mejorar la experiencia del usuario final en tecnologías como SolidJS y Angular 18.</li>
                            <li>Enfoque en aplicaciones web TV (Tizen, LG), implementación y mejora de funcionalidad según petición.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Experiencia Laboral II",
            content: (
                <div className="book-entries">
                    <div className="entry">
                        <h4>Packar | React Native Developer</h4>
                        <span className="date">2022 &mdash; 2023</span>
                        <ul>
                            <li>Desarrollo de aplicaciones con enfoque en funcionalidad en primer y segundo plano, diseño de pantallas y conexión con bases de datos.</li>
                            <li>Implementación de un sistema de tracking en tiempo real, incluyendo permisos de ubicación en segundo plano.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Formación",
            content: (
                <div className="book-entries">
                    <div className="entry">
                        <h4>Desarrollo de Aplicaciones Multiplataforma</h4>
                        <span className="date">2025 &mdash; Actualidad</span>
                        <p>Retamar - Ciclos formativos FP. Nota media: 9.4</p>
                    </div>
                    <div className="entry">
                        <h4>Máster Full-Stack Developer</h4>
                        <span className="date">2023 &mdash; 2024</span>
                        <p>ThePower</p>
                        <ul>
                            <li>Desarrollo avanzado de Frontend: React, Next.js, Angular, TS.</li>
                            <li>Backend: Express, MongoDB, PostgreSQL, Mongoose, Supabase.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Conocimientos",
            content: (
                <div className="book-entries">
                    <div className="entry">
                        <h4>Stack Tecnológico</h4>
                        <p>HTML/CSS, JS/TS, React, React Native, MongoDB, PSQL, Node.js, Express, NextJS, Angular, Jest, Vitest, Python, Java, Spring Boot.</p>
                    </div>
                    <br />
                    <div className="entry">
                        <h4>Idiomas</h4>
                        <ul>
                            <li>Inglés: B2</li>
                            <li>Francés: A2</li>
                            <li>Alemán: A2</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Voluntariado e Int.",
            content: (
                <div className="book-entries">
                    <div className="entry">
                        <h4>Coordinador Cáritas</h4>
                        <span className="date">2023 &mdash; Actualidad</span>
                        <p>San Saturnino &mdash; Alcorcón</p>
                    </div>
                    <div className="entry">
                        <h4>Acompañamiento hospitalario</h4>
                        <span className="date">2022 &mdash; Actualidad</span>
                        <p>Las Praderas (Pozuelo) / Hospital Alcorcón</p>
                    </div>
                    <br />
                    <div className="entry">
                        <h4>Otros intereses</h4>
                        <p>Interés cultural por el teatro, ópera e historia. Lector y escritor de poesía y cuentos.</p>
                    </div>
                </div>
            )
        }
    ];

    const totalPages = pages.length;

    const nextPage = () => {
        if (isFlipping) return;

        if (isMobile) {
            if (pageIndex < totalPages - 1) {
                setIsFlipping(true);
                gsap.to('.mobile-only', {
                    opacity: 0,
                    x: -20,
                    duration: 0.2,
                    onComplete: () => {
                        setPageIndex(prev => prev + 1);
                        gsap.fromTo('.mobile-only',
                            { opacity: 0, x: 20 },
                            { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', onComplete: () => setIsFlipping(false) }
                        );
                    }
                });
            }
            return;
        }

        if (pageIndex < totalPages - 2) {
            setIsFlipping(true);
            setFlipDirection('next');
            setTimeout(() => {
                gsap.fromTo(flipRef.current,
                    { rotateY: 0 },
                    {
                        rotateY: -180,
                        duration: 1.2,
                        ease: "power2.inOut",
                        onComplete: () => {
                            setPageIndex(prev => prev + 2);
                            setIsFlipping(false);
                            setFlipDirection(null);
                        }
                    }
                );
            }, 20);
        }
    };

    const prevPage = () => {
        if (isFlipping) return;

        if (isMobile) {
            if (pageIndex > 0) {
                setIsFlipping(true);
                gsap.to('.mobile-only', {
                    opacity: 0,
                    x: 20,
                    duration: 0.2,
                    onComplete: () => {
                        setPageIndex(prev => prev - 1);
                        gsap.fromTo('.mobile-only',
                            { opacity: 0, x: -20 },
                            { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', onComplete: () => setIsFlipping(false) }
                        );
                    }
                });
            }
            return;
        }

        if (pageIndex > 0) {
            setIsFlipping(true);
            setFlipDirection('prev');
            setTimeout(() => {
                gsap.fromTo(flipRef.current,
                    { rotateY: 0 },
                    {
                        rotateY: 180,
                        duration: 1.2,
                        ease: "power2.inOut",
                        onComplete: () => {
                            setPageIndex(prev => prev - 2);
                            setIsFlipping(false);
                            setFlipDirection(null);
                        }
                    }
                );
            }, 20);
        }
    };

    const renderPageContent = (index: number, extraClass = "") => {
        const page = index >= 0 && index < pages.length ? pages[index] : null;
        return (
            <div className={`book-page ${extraClass}`} style={{ boxShadow: 'none' }}>
                {page && (
                    <>
                        <h3 className="page-title">{page.title}</h3>
                        <div className="page-content">{page.content}</div>
                        <div className="page-number">{index + 1}</div>
                    </>
                )}
            </div>
        );
    };

    // Calculate desktop indices
    let statLeftIdx = pageIndex;
    let statRightIdx = pageIndex + 1;
    let flipFrontIdx = -1;
    let flipBackIdx = -1;

    if (isFlipping && !isMobile) {
        if (flipDirection === 'next') {
            statRightIdx = pageIndex + 3;
            flipFrontIdx = pageIndex + 1;
            flipBackIdx = pageIndex + 2;
        } else {
            statLeftIdx = pageIndex - 2;
            flipFrontIdx = pageIndex;
            flipBackIdx = pageIndex - 1;
        }
    }

    // Calculate disabled states for buttons
    const isNextDisabled = isMobile ? pageIndex >= totalPages - 1 : pageIndex >= totalPages - 2;
    const isPrevDisabled = pageIndex === 0;

    return (
        <div className="chronicle-book-container">
            <div className="book-spine">
                {/* Desktop View Elements */}
                <div className="desktop-only" style={{ display: 'contents' }}>
                    {/* Stationary Left Page */}
                    <div className="book-page left-page stationary">
                        {statLeftIdx >= 0 && statLeftIdx < pages.length && renderPageContent(statLeftIdx)}
                    </div>

                    <div className="book-binding"></div>

                    {/* Stationary Right Page */}
                    <div className="book-page right-page stationary">
                        {statRightIdx >= 0 && statRightIdx < pages.length && renderPageContent(statRightIdx)}
                    </div>

                    {/* The 3D Flipping Page */}
                    {isFlipping && flipDirection && !isMobile && (
                        <div className={`flipping-page flip-${flipDirection}`} ref={flipRef}>
                            <div className="page-front">
                                {renderPageContent(flipFrontIdx, flipDirection === 'next' ? 'right-page' : 'left-page')}
                            </div>
                            <div className="page-back">
                                {renderPageContent(flipBackIdx, flipDirection === 'next' ? 'left-page' : 'right-page')}
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Single Page View */}
                <div className="mobile-only book-page right-page" style={{ flex: 'none', width: '100%', padding: 0 }}>
                    {pageIndex >= 0 && pageIndex < pages.length && (
                        <div className="mobile-page-section" style={{ padding: '3rem 2rem', height: '100%' }}>
                            <h3 className="page-title">{pages[pageIndex].title}</h3>
                            <div className="page-content">{pages[pageIndex].content}</div>
                            <div className="page-number">{pageIndex + 1}</div>
                        </div>
                    )}
                </div>

                {/* Corner Pagination Controls */}
                <div className="book-controls corner-prev">
                    <button onClick={prevPage} disabled={isPrevDisabled || isFlipping} aria-label="Página anterior">
                        Anterior
                    </button>
                </div>
                <div className="book-controls corner-next">
                    <button onClick={nextPage} disabled={isNextDisabled || isFlipping} aria-label="Página siguiente">
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
}
