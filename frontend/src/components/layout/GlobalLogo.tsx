import { FC } from 'react';
import Image from 'next/image';

export const GlobalLogo: FC = () => {
    return (
        <div className="fixed top-6 left-6 z-[70] group transition-transform duration-300 hover:scale-105">
            <div className="relative p-2 bg-background/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Enterprise Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <Image
                    src="/kovalty_logo.png"
                    alt="Kovalty Logo"
                    width={160}
                    height={160}
                    className="w-32 h-32 object-contain filter brightness-110 contrast-110"
                    priority
                />
            </div>
        </div>
    );
};
