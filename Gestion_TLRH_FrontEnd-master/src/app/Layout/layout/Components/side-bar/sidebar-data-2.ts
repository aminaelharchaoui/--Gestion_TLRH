import { NavItem } from './nav-item/nav-item';

export const navItems2: NavItem[] = [
    {
        navCap: 'Espace Actors ',
    },
   
    {
        displayName: 'collaborateurs',
        iconName: 'list',
        route: '/dashboard/listofcollaboratorstoupdate',
    },  {
        displayName: 'managers',
        iconName: 'list',
        route: '/dashboard/managers',
    }, {
        displayName: 'nonManagers',
        iconName: 'list',
        route: '/dashboard/nonManagers',
    }, 
    {
        displayName: 'Desactiver Manager',
      iconName: 'lock',
        route: '/dashboard/ManagersRH/Activated',
    },
    {
    displayName: 'Activer Manager',
     iconName: 'lock-open',
    route: '/dashboard/ManagersRH/Desactivated',
    },
    {
        navCap: 'reporting',
    }, 
    {
        displayName: 'TurnOver',
        iconName: 'chart-line',
        route: '/dashboard/TurnOver',
    }, 
    {
        displayName: 'diplomeRatio',
        iconName: 'chart-donut',
        route: '/dashboard/diplomeRatio',
    },
    {
        displayName: 'recruitment',
        iconName: 'trending-up',
        route: '/dashboard/recruitment',
    },{
        displayName: 'PourcentageEcole',
        iconName: 'percentage',
        route: '/dashboard/PourcentageEcole',
    },
    {
        displayName: 'MaleFemaleRatio',
        iconName: 'chart-donut',
        route: '/dashboard/MaleFemaleRatio',
    },
    

]