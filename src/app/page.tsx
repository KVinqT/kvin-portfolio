import { KvinButton } from "@/kvin-components/ui/kvin-button";
import { KvinCard, KvinCardHeader, KvinCardTitle, KvinCardDescription, KvinCardContent } from "@/kvin-components/ui/kvin-card";

export default function KVinHomePage() {
  return (
    <main className="min-h-screen kvin-gradient-bg flex items-center justify-center p-8">
      <KvinCard className="max-w-3xl">
        <KvinCardHeader>
          <KvinCardTitle>Welcome to KVin's Portfolio</KvinCardTitle>
          <KvinCardDescription>
            My very very very first time portfolio in 2026! Built with Next.js App Router, 
            Tailwind CSS, and custom shadCN-inspired components.
          </KvinCardDescription>
        </KvinCardHeader>
        <KvinCardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              This portfolio showcases my journey into web development using modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <KvinButton appearance="primary" dimensions="medium">
                View Projects
              </KvinButton>
              <KvinButton appearance="secondary" dimensions="medium">
                Contact Me
              </KvinButton>
              <KvinButton appearance="outline" dimensions="medium">
                About Me
              </KvinButton>
            </div>
          </div>
        </KvinCardContent>
      </KvinCard>
    </main>
  );
}

