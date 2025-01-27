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
        className="text-white"
      >
        Back to Top
      </button>
    </div>
  );
}
