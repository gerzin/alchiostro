import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Used to make react router scroll to the top of the page when going from home to the menu by using the button.
 * @param props 
 * @returns 
 */
const ScrollerTop = (props: any) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

export default ScrollerTop;