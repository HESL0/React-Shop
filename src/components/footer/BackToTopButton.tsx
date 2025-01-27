export default function BackToTopButton() {
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={scrollToTop}
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
      >
        Back to Top
      </button>
    </div>
  );
}
