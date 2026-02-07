import CreateLinkForm from "@/components/CreateLinkForm";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-8 animate-float">
          <h1 className="text-6xl md:text-7xl romantic-text text-white text-shadow-glow mb-4">
            Valentine Proposal 💕
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            Create a magical proposal moment
          </p>
          <p className="text-base md:text-lg text-white/70">
            Make this Valentine's Day unforgettable with a playful, interactive
            proposal
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-morphism rounded-3xl p-8 md:p-12 shadow-2xl">
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
