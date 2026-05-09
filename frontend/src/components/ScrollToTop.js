// Source - https://stackoverflow.com/q/74966796
// Posted by Antonio112009, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-04, License - CC BY-SA 4.0

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    return null;
}
