import CreateLinkForm from "@/components/CreateLinkForm";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-8 md:py-12">
      <div className="relative z-10 max-w-md w-full">
        {/* Hero Section */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-4xl md:text-5xl romantic-text text-valentine-primary mb-3 md:mb-4 leading-tight">
            Valentine Proposal 💕
          </h1>
          <p className="text-sm md:text-base text-valentine-text-light font-medium px-4 mb-2">
            Create a magical proposal moment
          </p>
          <p className="text-xs md:text-sm text-valentine-text-light/70 max-w-sm mx-auto px-4">
            Make this Valentine's Day unforgettable with a playful, interactive
            proposal that they'll cherish forever
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-premium rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
          <CreateLinkForm />
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-xs text-valentine-text-light/70 px-4">
            Share the generated link with your special someone ✨
          </p>
        </div>
      </div>
    </main>
  );
}
