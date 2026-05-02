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
        Academy — nicolas-luginbuhl
      </h1>
      <p className="mb-10 text-lg text-muted-foreground">
        Free practical courses
      </p>

      <Card>
        <CardHeader>
          <CardTitle>HubSpot, n8n, Claude Code, Ops &amp; Growth</CardTitle>
          <CardDescription>
            Free practical courses with structured progression — coming soon.
            Sign-in is optional; progress works without an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Phase 3 will ship the MDX engine, Phase 5 the first course.
        </CardContent>
        <CardFooter>
          <Button>Browse courses</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
