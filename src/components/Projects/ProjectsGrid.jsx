import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaLaptopCode, FaDatabase, FaMobileAlt, FaChartBar, FaBuilding, FaBriefcase } from "react-icons/fa";

const SLANT_SIZE = 220;
const GREEN_COLOR = "#01be96";
const PRIMARY_DARK = "#0b0b0b";
const FEATURED_COUNT = 8;

// All projects: first FEATURED_COUNT = carousel, rest appear in "All projects" grid
const ALL_PROJECTS_DATA = [
  { id: 1, key: "0", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800", demo: "", Icon: FaRocket },
  { id: 2, key: "1", img: "https://i.imgur.com/V810M8I.png", demo: "https://burantattoo.com/", Icon: FaBuilding },
  { id: 3, key: "2", img: "https://i.imgur.com/4rMpjjj.png", demo: "https://vos-y-solo-vos.pages.dev/", Icon: FaDatabase },
  { id: 4, key: "3", img: "https://i.imgur.com/gOtUd1t.png", demo: "https://www.itsi.com.ar/", Icon: FaBriefcase },
  { id: 5, key: "4", img: "https://i.imgur.com/yTFIlGC.png", demo: "", Icon: FaChartBar },
  { id: 6, key: "5", img: "https://i.imgur.com/ES34Qfj.png", demo: "https://consultorakaisen.com.ar/", Icon: FaBuilding },
  { id: 7, key: "6", img: "https://i.imgur.com/Ul6eOrI.png", demo: "http://francoj.pythonanywhere.com/", Icon: FaCode },
  { id: 8, key: "7", img: "https://i.imgur.com/ceiJGpn.png", demo: "https://github.com/Zero9BSC/FirstPrintWizard", Icon: FaLaptopCode },
  { id: 9, key: "8", img: "https://i.imgur.com/GsgHJsz.png", demo: "https://estudiokaisen.netlify.app/", Icon: FaRocket },
  { id: 10, key: "9", img: "https://i.imgur.com/vhB5SYf.png", demo: "https://dolcericco.netlify.app/", Icon: FaDatabase },
  { id: 11, key: "10", img: "https://i.imgur.com/hjPdVOC.png", demo: "https://healthyhearts.netlify.app/", Icon: FaMobileAlt },
  { id: 12, key: "11", img: "https://i.imgur.com/Kj2wxE4.png", demo: "https://afipreportviewer.netlify.app/", Icon: FaChartBar },
];

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: ${PRIMARY_DARK};
  overflow: hidden;
  @media (max-width: 768px) { height: 500px; }
`;

const SectionTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  font-size: 1.5rem;
  text-transform: capitalize;
  .green { color: ${GREEN_COLOR}; }
  @media (max-width: 768px) { top: 1rem; font-size: 1.2rem; }
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

/* --- All Projects Grid --- */
const AllSection = styled.section`
  width: 100%;
  padding: 3rem clamp(1rem, 5vw, 4rem);
  background-color: ${PRIMARY_DARK};
`;

const AllTitle = styled.h2`
  width: clamp(80%, 85vw, 1440px);
  margin: 0 auto 2rem;
  font-size: 1.8rem;
  text-transform: capitalize;
  .green { color: ${GREEN_COLOR}; }
  @media (max-width: 768px) { font-size: 1.4rem; margin-bottom: 1.5rem; }
`;

const Grid = styled.div`
  width: clamp(80%, 85vw, 1440px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.article`
  background: #191923;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  transition: border-color 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
  &:hover { border-color: ${GREEN_COLOR}; transform: translateY(-4px); }
`;

const CardImage = styled.div`
  aspect-ratio: 16/10;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  ${Card}:hover & img { transform: scale(1.05); }
`;

const CardContent = styled.div`
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
  p { font-size: 0.9rem; color: #b0b0b0; line-height: 1.5; flex: 1; }
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
  color: ${GREEN_COLOR};
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const ProjectsGrid = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTouchInteracting, setIsTouchInteracting] = useState(false);
  const scrollRef = useRef(null);

  const featuredProjects = ALL_PROJECTS_DATA.slice(0, FEATURED_COUNT);
  const allProjects = ALL_PROJECTS_DATA;

  // LÓGICA DE AUTO-PLAY (solo para los destacados)
  useEffect(() => {
    if (isPaused || isTouchInteracting) return;
    const timer = setInterval(() => {
      setActiveCard(prev => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isTouchInteracting, featuredProjects.length]);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 400); 
    return () => clearTimeout(timeout);
  }, [activeCard]);

  // DETECTAR SCROLL MANUAL EN MÓVIL
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
        const newActiveCard = Math.round(scrollLeft / width);
        if (newActiveCard !== activeCard) {
          setActiveCard(newActiveCard);
          setIsTouchInteracting(true);
        }
      }
    };
    const wrapper = scrollRef.current;
    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll);
      return () => wrapper.removeEventListener('scroll', handleScroll);
    }
  }, [activeCard]);

  // SINCRONIZACIÓN SCROLL MÓVIL (solo cuando no hay interacción táctil)
  useEffect(() => {
    if (scrollRef.current && !isTouchInteracting) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: width * activeCard, behavior: 'smooth' });
    }
  }, [activeCard, isTouchInteracting]);

  const renderProjectIcon = (p) => {
    const Icon = p.Icon;
    return <Icon color="white" size={20} />;
  };

  const renderProjectIconDesktop = (p) => {
    const Icon = p.Icon;
    return <Icon color="white" size={24} />;
  };

  const handleTouchStart = () => {
    setIsTouchInteracting(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouchInteracting(false), 3000);
  };

  return (
    <>
      <Section 
        id="project"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <SectionTitle>{t("projects.featuredTitle")}</SectionTitle>
        {/* MÓVIL — solo destacados */}
        <MobileWrapper 
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {featuredProjects.map((p, i) => (
            <ProjectSlide key={`mob-${p.id}-${i}`} $active={true}>
              <ImageContainer>
                <Image src={p.img} $active={true} alt="" loading={i === 0 ? "eager" : "lazy"} />
              </ImageContainer>
              <Content $active={true}>
                <IconWrapper>{renderProjectIcon(p)}</IconWrapper>
                <h3>{t(`projects.slider.${p.key}.title`)}</h3>
                <p>{t(`projects.slider.${p.key}.desc`)}</p>
                {t(`projects.slider.${p.key}.result`, { defaultValue: "" }) && <p style={{ fontSize: "0.85rem", marginTop: "0.35rem", opacity: 0.9 }}>{t(`projects.slider.${p.key}.result`)}</p>}
                {p.demo && <ActionLink href={p.demo} target="_blank" rel="noopener noreferrer">{t("project.link.view")}</ActionLink>}
              </Content>
            </ProjectSlide>
          ))}
        </MobileWrapper>

        {/* DESKTOP — solo destacados */}
        <DesktopWrapper>
          {featuredProjects.map((p, i) => (
            <ProjectSlide 
              key={p.id}
              $active={activeCard === i}
              $first={i === 0}
              $last={i === featuredProjects.length - 1}
              onMouseEnter={() => activeCard !== i && setActiveCard(i)}
            >
              <ImageContainer>
                <Image src={p.img} $active={activeCard === i} alt="" loading={i === 0 ? "eager" : "lazy"} />
              </ImageContainer>
              <Content 
                $active={activeCard === i} 
                $isAnimating={isAnimating} 
                $first={i === 0}
              >
                <IconWrapper>{renderProjectIconDesktop(p)}</IconWrapper>
                <h3>{t(`projects.slider.${p.key}.title`)}</h3>
                <p>{t(`projects.slider.${p.key}.desc`)}</p>
                {t(`projects.slider.${p.key}.result`, { defaultValue: "" }) && <p style={{ fontSize: "0.95rem", marginTop: "0.4rem", opacity: 0.9 }}>{t(`projects.slider.${p.key}.result`)}</p>}
                {p.demo && (
                  <ActionLink href={p.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    {p.demo.includes("github") ? <FaGithub /> : <FaExternalLinkAlt />}
                    {t("project.link.view")}
                  </ActionLink>
                )}
              </Content>
            </ProjectSlide>
          ))}
        </DesktopWrapper>

        <DotsIndicator>
          {featuredProjects.map((_, i) => (
            <Dot key={i} $active={activeCard === i} onClick={() => setActiveCard(i)} />
          ))}
        </DotsIndicator>
      </Section>

      <AllSection id="all-projects">
        <AllTitle>{t("projects.allTitle")}</AllTitle>
        <Grid>
          {allProjects.map((p) => (
            <Card key={p.id}>
              <CardImage>
                <img src={p.img} alt="" loading="lazy" />
              </CardImage>
              <CardContent>
                <h3>{t(`projects.slider.${p.key}.title`)}</h3>
                <p>{t(`projects.slider.${p.key}.desc`)}</p>
                {t(`projects.slider.${p.key}.result`, { defaultValue: "" }) && <p style={{ fontSize: "0.85rem", marginTop: "0.25rem", color: "#01be96" }}>{t(`projects.slider.${p.key}.result`)}</p>}
                {p.demo && (
                  <CardLink href={p.demo} target="_blank" rel="noopener noreferrer">
                    {p.demo.includes("github") ? <FaGithub /> : <FaExternalLinkAlt />}
                    {t("project.link.view")}
                  </CardLink>
                )}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </AllSection>
    </>
  );
};

export default ProjectsGrid;