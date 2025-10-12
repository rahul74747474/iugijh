const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-display font-bold mb-3">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
        <a href="/" className="btn-pill bg-accent text-white shadow-soft">Return Home</a>
      </div>
    </div>
  );
};

export default NotFound;
