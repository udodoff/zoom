export type SidebarLink = {
    imgUrl: string;
    route: string;
    label: string;
};

export const sidebarLinks: SidebarLink[] = [
    {
        imgUrl: '/icons/home.svg',
        route: '/',
        label: 'Home',
    },
    {
        imgUrl: '/icons/upcoming.svg',
        route: '/upcoming',
        label: 'Upcoming',
    },
    {
        imgUrl: '/icons/previous.svg',
        route: '/previous',
        label: 'Previous',
    },
    {
        imgUrl: '/icons/recordings.svg',
        route: '/recordings',
        label: 'Recordings',
    },
    {
        imgUrl: '/icons/add-personal.svg',
        route: '/personal-room',
        label: 'Personal Room',
    },
];
