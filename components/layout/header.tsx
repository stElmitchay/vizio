import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-primary-bg">
      <a href="#" className="text-2xl font-bold font-mono uppercase tracking-tighter text-text-primary no-underline">
        VIZIO
      </a>
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <ul className="flex items-center gap-8 list-none">
          <li>
            <a href="#" className="text-sm font-medium font-mono uppercase text-text-primary no-underline transition-colors hover:text-accent-purple">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium font-mono uppercase text-text-primary no-underline transition-colors hover:text-accent-purple">
              How it Works
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium font-mono uppercase text-text-primary no-underline transition-colors hover:text-accent-purple">
              Support
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </header>
  );
}
