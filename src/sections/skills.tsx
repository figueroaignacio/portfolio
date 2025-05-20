// Consts
import { skills } from '@/lib/constants';

export function Skills() {
  return (
    <div className="space-y-5">
      <h2 className="font-bold">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            className="border-border bg-card flex gap-2 rounded-xl border px-4 py-1"
            key={skill.title}
          >
            <skill.icon />
            <span className="text-sm">{skill.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
