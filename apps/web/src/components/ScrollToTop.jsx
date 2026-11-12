import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// useLayoutEffect evita ver un instante la página nueva a media altura; en el
// servidor (pre-renderizado) no existe, así que allí se usa useEffect.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useIsomorphicLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
