import logo from "./logo.png";
import login_bg from "./Login_bg.png";
import {Coins, FunnelPlus, LayoutDashboard, List, Wallet} from "lucide-react";

export const assets = {
    logo,
    login_bg,
};

export const SIDEBAR_DATA = [
    {
        id: '01',
        label: 'Dashboard',
        icon: LayoutDashboard,
        link: '/dashboard',
    }, {
        id: '02',
        label: 'Category',
        icon: List,
        link: '/category',
    }, {
        id: '03',
        label: 'Income',
        icon: Wallet,
        link: '/income',
    }, {
        id: '04',
        label: 'Expense',
        icon: Coins,
        link: '/expense',
    }, {
        id: '05',
        label: 'Filter',
        icon: FunnelPlus,
        link: '/filter',
    },

]
