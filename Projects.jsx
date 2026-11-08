import { ExternalLink, Github, FolderCode } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { projects } from '../data/profile';

function LinkButton({ href, icon: Icon, children }) {
  const cls = 'inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium';
  if (!href) return <span className={`${cls} cursor-not-allowed opacity-40`} aria-disabled="true"><Icon size={16} />{children}</span>;
  return <a href={href} target="_blank" rel="noreferrer" className={`${cls} text-white hover:bg-white/10`}><Icon size={16} />{children}</a>;
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col overflow-hidden !p-0">
            {p.image ? (
              <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-40 w-full object-cover" />
            ) : (
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-violet-600/40 to-blue-600/40"><FolderCode size={44} className="text-white/80" /></div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed">{p.description}</p>
              {p.tech.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => <li key={t} className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-200">{t}</li>)}
                </ul>
              )}
              <div className="mt-5 flex gap-3">
                <LinkButton href={p.live} icon={ExternalLink}>Live Demo</LinkButton>
                <LinkButton href={p.github} icon={Github}>GitHub</LinkButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
