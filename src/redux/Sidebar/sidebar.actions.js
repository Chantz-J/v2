import { sidebarTypes } from './sidebar.types';

export const openSidebar = () => ({
    type: sidebarTypes.SIDEBAR_OPEN,
});

export const closeSidebar = () => ({
    type: sidebarTypes.SIDEBAR_CLOSED,
});