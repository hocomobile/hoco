function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    }, [pathname]);

    return null;
}