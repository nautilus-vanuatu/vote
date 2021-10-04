export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Permissões',
    href: '#',
  },
  {
    label: 'Votações',
    children: [
      {
        label: 'Carga',
        subLabel: 'Carga de votações',
        href: '#',
      },
      {
        label: 'Ajustes',
        subLabel: 'Ajustes nas cargas / Entrada manual',
        href: '#',
      },
      {
        label: 'Gerenciamento',
        subLabel: '',
        href: '#',
      },
      {
        label: 'Relatórios',
        subLabel: 'Relatórios disponíveis',
        href: '#',
      },
    ],
  },
  {
    label: 'Cadastros',
    children: [
      {
        label: 'Grupos de votações',
        subLabel: 'Grupos para as votações',
        href: '#',
      },
    ],
  },
];

export default NAV_ITEMS;
