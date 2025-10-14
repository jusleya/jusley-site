export function getExperiences(t: (key: string) => string) {
  return [
    {
      id: 0,
      company: t('experiences.wellhub.name'),
      period: t('experiences.wellhub.period'),
      role: t('experiences.wellhub.role'),
      description: t('experiences.wellhub.description'),
      tools: t('experiences.wellhub.tools'),
    },
    {
      id: 1,
      company: t('experiences.americanas.name'),
      period: t('experiences.americanas.period'),
      role: t('experiences.americanas.role'),
      description: t('experiences.americanas.description'),
      tools: t('experiences.americanas.tools'),
    },
    {
      id: 2,
      company: t('experiences.ioasys.name'),
      period: t('experiences.ioasys.period'),
      role: t('experiences.ioasys.role'),
      description: t('experiences.ioasys.description'),
      tools: t('experiences.ioasys.tools'),
    },
    {
      id: 3,
      company: t('experiences.getinfo.name'),
      period: t('experiences.getinfo.period'),
      role: t('experiences.getinfo.role'),
      description: t('experiences.getinfo.description'),
      tools: t('experiences.getinfo.tools'),
    },
    {
      id: 4,
      company: t('experiences.internchip.name'),
      period: t('experiences.internchip.period'),
      role: t('experiences.internchip.role'),
      description: t('experiences.internchip.description'),
      tools: t('experiences.internchip.tools'),
    },
  ];
}
