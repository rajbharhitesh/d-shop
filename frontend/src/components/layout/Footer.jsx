const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-1 pt-5">
      <p className="text-center mt-1 fw-bold">D-Shop &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
