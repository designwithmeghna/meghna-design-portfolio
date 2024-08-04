export default function HomeIntro() {
  const copyEmailId = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText("designwithmeghna@gmail.com");
  };

  return (
    <div className="flex flex-col justify-between m-2 w-full lg:w-5/12 text-center min-h-[45vh]">
      <h1 className="text-4xl lg:text-7xl">
        Hi 👋🏼! <br /> I am Meghna Aggarwal!
      </h1>
      <h2 className="text-xl lg:text-3xl p-2 border-gray-200 shadow-md">
        <span className="font-semibold text-4xl">UI/UX Designer,</span>{" "}
        currently based in{" "}
        <span className="font-semibold text-4xl">Canada 🇨🇦</span>
      </h2>
      <div className="p-4 text-md flex flex-col lg:flex-row justify-between border-t border-gray-200">
        <a href="tel:+17425885244">☎️ +1 (742) 588-5244</a>
        <a href="mailto:designwithmeghna@gmail.com">
          📧: designwithmeghna@gmail.com{" "}
          <button onClick={copyEmailId}>
            <img src="assets/copy.png" alt="copy icon" width="16px" />
          </button>
        </a>
      </div>
    </div>
  );
}
