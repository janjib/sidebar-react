import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

const SidebarData = [{
    title:'Overview',
    path:'/sidebar-react',
    icon:<AiIcons.AiFillHome />,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title:'Users',
            path:'/overview/users',
            icon:<IoIcons.IoIosPaper />,
        },
        {
            title:'Revenue',
            path:'/overview/revenue',
            icon:<IoIcons.IoIosPaper />,
        },
        {
            title:'Users',
            path:'/overview/users',
            icon:<IoIcons.IoIosPaper />,
        }
    ]
},
{
    title:'Reports',
    path:'/reports',
    icon:<AiIcons.AiFillHome />,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title:'Reports',
            path:'/sidebar-react/reports1',
            icon:<IoIcons.IoIosPaper />,
        },
        {
            title:'Reports 2',
            path:'/overview/reports2',
            icon:<IoIcons.IoIosPaper />,
        },
        {
            title:'Reports 3',
            path:'/overview/reports3',
            icon:<IoIcons.IoIosPaper />,
        }
    ]
},{
    title:'Contacts',
    path:'/contacts',
    icon:<IoIcons.IoMdHelpCircle/>
}
]

export default SidebarData