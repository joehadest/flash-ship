import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que faz a página rolar para o topo quando o usuário navega para uma nova rota
 */
const ScrollToTopOnNavigate = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Quando a rota muda, rola para o topo com animação suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]); // Dependência no pathname significa que este efeito roda sempre que a rota muda

    return null; // Este componente não renderiza nada visível
};

export default ScrollToTopOnNavigate;
