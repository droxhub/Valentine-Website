import CreateLinkForm from "@/components/CreateLinkForm";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-6 md:py-8">
      <div className="relative z-10 max-w-2xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-6 md:mb-8 animate-float-slow">
          <h1 className="text-fluid-h1 romantic-text text-white text-shadow-glow mb-3 md:mb-4 leading-tight">
            Valentine Proposal 💕
          </h1>
          <p className="text-fluid-lg text-white/95 mb-2 md:mb-3 font-medium px-4">
            Create a magical proposal moment
          </p>
          <p className="text-fluid-sm text-white/75 max-w-lg mx-auto px-6 leading-relaxed">
            Make this Valentine's Day unforgettable with a playful, interactive
            proposal that they'll cherish forever
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-premium rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl transition-all duration-500 hover:scale-[1.01]">
          <CreateLinkForm />
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6 md:mt-8 space-y-2">
          <p className="text-fluid-xs text-white/60 px-4">
            Share the generated link with your special someone ✨
          </p>
          
        </div>
      </div>
    </main>
  );
}
