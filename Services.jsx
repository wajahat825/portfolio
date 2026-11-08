import { Layers, Smartphone, Server, Database, ShieldCheck, LayoutDashboard } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { services } from '../data/profile';

const icons = { Layers, Smartphone, Server, Database, ShieldCheck, LayoutDashboard };

export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <Card key={s.title}>
              <Icon className="mb-4 text-violet-400" size={30} />
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm">{s.text}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
