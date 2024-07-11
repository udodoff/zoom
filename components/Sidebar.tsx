'use client';

import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import React from 'react';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive =
                        pathname === link.route || pathname.startsWith(`${link.route}/`);

                    return (
                        <SidebarLink
                            key={link.label}
                            link={link}
                            classes={{
                                link: 'justify-start',
                                label: 'text-lg font-semibold max-lg:hidden',
                            }}
                            imageSize={24}
                            isActive={isActive}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Sidebar;
