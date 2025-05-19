// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export function Contact() {
  const { t } = useTranslation('sections');

  const contacts = [
    {
      title: 'Email',
      href: 'mailto:ignaciofigueroadev@gmail.com',
      label: 'ignaciofigueroadev@gmail.com',
      icon: EnvelopeOpenIcon,
    },
    {
      title: 'GitHub',
      href: 'https://github.com/figueroaignacio',
      label: 'figueroaignacio',
      icon: GitHubLogoIcon,
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/figueroa-ignacio',
      label: 'Ignacio (Nacho) Figueroa',
      icon: LinkedInLogoIcon,
    },
  ];

  return (
    <section>
      <div className="my-5">
        <h2 className="font-extrabold">{t('contact.title')}</h2>
        <p className="text-muted-foreground">{t('contact.description')}</p>
      </div>
      <div className="flex flex-col gap-y-4">
        {contacts.map((contact) => (
          <div className="space-y-3" key={contact.href}>
            <div className="flex items-center gap-x-3">
              <contact.icon className="size-5" />
              <h3>{contact.title}</h3>
            </div>
            <a
              href={contact.href}
              target="_blank"
              className="hover:text-primary text-muted-foreground underline"
            >
              {contact.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
