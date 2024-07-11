import { SidebarLink as SidebarLinkType } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type SidebarLinkProps = {
    link: SidebarLinkType;
    classes: Classes<'link' | 'label'>;
    imageSize: number;
    isActive: boolean;
};

const SidebarLink: FC<SidebarLinkProps> = ({ link, classes, imageSize, isActive }) => {
    return (
        <Link
            href={link.route}
            key={link.label}
            className={cn('flex gap-4 items-center p-4 rounded-lg', classes.link, {
                'bg-blue-1': isActive,
            })}
        >
            <Image src={link.imgUrl} alt={link.label} width={imageSize} height={imageSize} />
            <p className={classes.label}>{link.label}</p>
        </Link>
    );
};

export default SidebarLink;
