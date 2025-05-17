import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation('sections');

  const contacts = [
    {
      title: 'Email',
      href: 'mailto:ignaciofigueroadev@gmail.com',
      label: 'ignaciofigueroadev@gmail.com',
    },
    { title: 'GitHub', href: 'https://github.com/figueroaignacio', label: 'figueroaignacio' },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/figueroa-ignacio',
      label: 'Ignacio (Nacho) Figueroa',
    },
  ];

  return (
    <section className="space-y-3">
      <div>
        <h2 className="font-extrabold">{t('contact.title')}</h2>
        <p className="text-muted-foreground">{t('contact.description')}</p>
      </div>
      <>
        {contacts.map((contact) => (
          <div className="grid grid-cols-2 gap-y-2 text-sm md:grid-cols-3">
            <h3>{contact.title}</h3>
            <a href={contact.href} target="_blank" className="hover:text-primary underline">
              {contact.label}
            </a>
          </div>
        ))}
      </>
    </section>
  );
}
