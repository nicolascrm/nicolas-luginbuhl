import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Phase 1 / Plan 01-02 — Foundation
      </p>
      <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Site — nicolas-luginbuhl
      </h1>
      <p className="mb-10 text-lg text-muted-foreground">Builder Ops/Growth</p>

      <Card>
        <CardHeader>
          <CardTitle>HubSpot, n8n, automatisation, IA</CardTitle>
          <CardDescription>
            Site bilingue FR/EN — vitrine projets, services consulting, blog et
            contact. Construction en public, vélocité Claude Code.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Phase 2 ajoutera next-intl, layout/nav/footer et 5 pages réelles.
        </CardContent>
        <CardFooter>
          <Button>En savoir plus</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
