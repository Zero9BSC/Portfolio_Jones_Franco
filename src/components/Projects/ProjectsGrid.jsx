import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaLaptopCode, FaDatabase, FaMobileAlt, FaChartBar, FaHourglassHalf } from "react-icons/fa";

const SLANT_SIZE = 80;
const GREEN_COLOR = "#01be96";
const PRIMARY_DARK = "#0b0b0b";

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: ${PRIMARY_DARK};
  overflow: hidden;
  @media (max-width: 768px) { height: 500px; }
`;

const MobileWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  &::-webkit-scrollbar { display: none; }
  @media (min-width: 769px) { display: none; }
`;

const DesktopWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  @media (min-width: 769px) { display: flex; }
`;

// Contenedor de imagen para evitar que sobresalga
const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Esto bloquea que la imagen salga de la tarjeta */
  z-index: 1;
`;

const ProjectSlide = styled.div`
  position: relative;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
  /* Evita parpadeos en navegadores basados en Webkit */
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;

  @media (max-width: 768px) {
    width: 100%;
    scroll-snap-align: start;
  }

  @media (min-width: 769px) {
    flex: ${props => (props.$active ? '4' : '1')};
    margin-left: ${props => (props.$first ? '0' : `-${SLANT_SIZE}px`)};
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: ${props => (props.$active ? '10' : '1')};
    clip-path: ${props => {
      if (props.$first) return `polygon(0% 0%, 100% 0%, calc(100% - ${SLANT_SIZE}px) 100%, 0% 100%)`;
      if (props.$last) return `polygon(${SLANT_SIZE}px 0%, 100% 0%, 100% 100%, 0% 100%)`;
      return `polygon(${SLANT_SIZE}px 0%, 100% 0%, calc(100% - ${SLANT_SIZE}px) 100%, 0% 100%)`;
    }};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none; /* UX: El mouse ignora la imagen, evita errores de hover */
  transition: transform 1s ease, filter 0.5s ease;
  filter: ${props => (props.$active ? 'brightness(0.5)' : 'grayscale(1) brightness(0.3)')};
  transform: translateZ(0); /* Forzar aceleración por hardware */
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  padding-bottom: 4.5rem;
  color: white;
  background: linear-gradient(to top, ${PRIMARY_DARK} 0%, ${PRIMARY_DARK} 65%, transparent 100%);
  z-index: 20;
  pointer-events: auto;
  
  @media (min-width: 769px) {
    padding-left: ${props => (props.$first ? '4rem' : `calc(4rem + ${SLANT_SIZE}px)`)};
    padding-right: 4rem; 
    opacity: ${props => (props.$active && !props.$isAnimating ? '1' : '0')};
    transform: ${props => (props.$active && !props.$isAnimating ? 'translateY(0)' : 'translateY(1.5rem)')};
    transition: ${props => (props.$active && !props.$isAnimating ? 'all 600ms ease 50ms' : 'none')};
  }

  h3 { 
    font-size: 1.5rem; 
    font-weight: bold; 
    text-transform: uppercase; 
    margin: 0.8rem 0;
    @media (min-width: 769px) { font-size: 2.2rem; }
  }

  p { 
    font-size: 0.95rem; 
    color: #e0e0e0; 
    line-height: 1.6;
    display: block;
    @media (min-width: 769px) { 
      font-size: 1.1rem; 
      max-width: 85%; 
    }
  }
`;

const IconWrapper = styled.div`
  background: ${GREEN_COLOR};
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 1.5rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  border-bottom: 2px solid ${GREEN_COLOR};
  padding-bottom: 4px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 30; /* Asegura que esté por encima de todo */

  &:hover { 
    color: ${GREEN_COLOR}; 
    border-color: white;
    transform: translateX(5px);
  }
`;

const DotsIndicator = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 20;
`;

const Dot = styled.div`
  width: ${props => (props.$active ? '30px' : '10px')};
  height: 10px;
  background: ${props => (props.$active ? GREEN_COLOR : 'rgba(255,255,255,0.2)')};
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const ProjectsGrid = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // <--- NUEVO ESTADO
  const scrollRef = useRef(null);

  const projects = [
    { id: 1, key: "0", img: "https://imgur.com/Ul6eOrI.png", demo: "http://francoj.pythonanywhere.com/", Icon: FaCode },
    { id: 2, key: "1", img: "https://imgur.com/GsgHJsz.png", demo: "https://estudiokaisen.netlify.app/", Icon: FaRocket },
    { id: 3, key: "2", img: "https://imgur.com/ceiJGpn.png", demo: "https://github.com/Zero9BSC/FirstPrintWizard.git", Icon: FaLaptopCode },
    { id: 4, key: "3", img: "https://imgur.com/ZL6QL3R.png", demo: "https://dolcericco.netlify.app/", Icon: FaDatabase },
    { id: 5, key: "4", img: "https://imgur.com/hjPdVOC.png", demo: "https://healthyhearts.netlify.app/", Icon: FaMobileAlt },
    { id: 6, key: "5", img: "https://imgur.com/sxvSvfR.png", demo: "https://afipreportviewer.netlify.app/", Icon: FaChartBar },
    { id: 7, key: "coming", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070", demo: "", Icon: FaHourglassHalf },
  ];

  // LÓGICA DE AUTO-PLAY
  useEffect(() => {
    if (isPaused) return; // Pausa si el mouse está arriba
    const timer = setInterval(() => {
      setActiveCard(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 400); 
    return () => clearTimeout(timeout);
  }, [activeCard]);

  // SINCRONIZACIÓN SCROLL MÓVIL
  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: width * activeCard, behavior: 'smooth' });
    }
  }, [activeCard]);

  return (
    <Section 
      id="project"
      onMouseEnter={() => setIsPaused(true)} // Activa pausa
      onMouseLeave={() => setIsPaused(false)} // Quita pausa
    >
      {/* MÓVIL */}
      <MobileWrapper ref={scrollRef}>
        {projects.map((p, i) => (
          <ProjectSlide key={`mob-${p.id}-${i}`} $active={true}>
            <ImageContainer>
              <Image src={p.img} $active={true} />
            </ImageContainer>
            <Content $active={true}>
              <IconWrapper><p.Icon color="white" size={20} /></IconWrapper>
              <h3>{p.key === "coming" ? "Próximamente" : t(`projects.slider.${p.key}.desc`).split(' ')[0]}</h3>
              <p>{p.key === "coming" ? "Nuevas soluciones digitales." : t(`projects.slider.${p.key}.desc`)}</p>
              {p.demo && <ActionLink href={p.demo} target="_blank">{t("project.link.view")}</ActionLink>}
            </Content>
          </ProjectSlide>
        ))}
      </MobileWrapper>

      {/* DESKTOP */}
      <DesktopWrapper>
        {projects.map((p, i) => (
          <ProjectSlide 
            key={p.id}
            $active={activeCard === i}
            $first={i === 0}
            $last={i === projects.length - 1}
            onMouseEnter={() => activeCard !== i && setActiveCard(i)}
          >
            <ImageContainer>
              <Image src={p.img} $active={activeCard === i} />
            </ImageContainer>
            <Content 
              $active={activeCard === i} 
              $isAnimating={isAnimating} 
              $first={i === 0}
            >
              <IconWrapper><p.Icon color="white" size={24} /></IconWrapper>
              <h3>{p.key === "coming" ? "Próximamente" : t(`projects.slider.${p.key}.desc`).split(' ')[0]}</h3>
              <p>{p.key === "coming" ? "Trabajando en algo nuevo." : t(`projects.slider.${p.key}.desc`)}</p>
              {p.demo && (
                <ActionLink href={p.demo} target="_blank" onClick={(e) => e.stopPropagation()}>
                   {p.demo.includes("github") ? <FaGithub /> : <FaExternalLinkAlt />}
                   {t("project.link.view")}
                </ActionLink>
              )}
            </Content>
          </ProjectSlide>
        ))}
      </DesktopWrapper>

      <DotsIndicator>
        {projects.map((_, i) => (
          <Dot key={i} $active={activeCard === i} onClick={() => setActiveCard(i)} />
        ))}
      </DotsIndicator>
    </Section>
  );
};

export default ProjectsGrid;