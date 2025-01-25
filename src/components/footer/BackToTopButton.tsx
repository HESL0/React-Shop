export default function BackToTopButton() {
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 60,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-center">

      <button
        onClick={scrollToTop}
        className="text-white hover:text-blue-700 "
      >
        Back to Top
      </button>
    </div>
  );
}
