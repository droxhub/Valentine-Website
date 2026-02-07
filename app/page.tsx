import CreateLinkForm from "@/components/CreateLinkForm";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-6 animate-float">
          <h1 className="text-5xl md:text-6xl romantic-text text-white text-shadow-glow mb-3">
            Valentine Proposal 💕
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-2">
            Create a magical proposal moment
          </p>
          <p className="text-sm md:text-base text-white/70">
            Make this Valentine's Day unforgettable with a playful, interactive
            proposal
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-morphism rounded-3xl p-6 md:p-8 shadow-2xl">
          <CreateLinkForm />
        </div>

        {/* Footer Text */}
        <p className="text-center text-white/60 mt-8 text-sm">
          Share the generated link with your special someone ✨
        </p>
      </div>
    </main>
  );
}
