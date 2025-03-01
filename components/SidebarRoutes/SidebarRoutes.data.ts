import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar

} from 'lucide-react'


export const dataGeneralSidebar = [
    {
        icon : PanelsTopLeft,
        label : "Dashboard",
        href :"/"
    },
    {
        icon : Building2,
        label : "Politicas",
        href :"/politicas"
    },
    {
        icon : Calendar ,
        label : "Calendar",
        href :"/tasks"
    },
]

export const dataToolsSidebar = [
    {
        icon : CircleHelpIcon ,
        label : "Faqs",
        href :"/faqs"
    },
    {
        icon : BarChart4 ,
        label : "Companies",
        href :"/companies"
    },
]

export const dataSupportSidebar = [
    {
        icon : Settings ,
        label : "Settings",
        href :"/settings"
    },
    {
        icon : ShieldCheck ,
        label : "Security",
        href :"/security"
    },
]

