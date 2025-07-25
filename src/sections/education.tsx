import { EducationCard } from '@/components/education-card';
import { getTranslations } from 'next-intl/server';

export async function Education() {
  const t = await getTranslations('sections');

  return (
    <>
      <h2 className="mt-6 mb-5 underline">{t('education.title')}</h2>
      <section>
        <EducationCard
          title="Educación Autodidacta en Desarrollo Web"
          institution="Mi laptop 💻"
          location="Argentina"
          description="Formación constante a través de documentación oficial, cursos en línea, proyectos personales y contribuciones reales. Profundicé en tecnologías modernas como JavaScript, TypeScript, React, Next.js y más."
          startDate="2023-01-01"
          isCurrent
        />
        <EducationCard
          title="Tecnicatura Universitaria en Programación"
          institution="Universidad Tecnológica Nacional (UTN)"
          location="Argentina"
          description="Carrera universitaria enfocada en la lógica de programación, algoritmos, estructuras de datos, bases de datos y paradigmas modernos. Complemento académico a mi formación práctica como desarrollador."
          startDate="2025-03-01"
          isCurrent
        />
      </section>
    </>
  );
}
