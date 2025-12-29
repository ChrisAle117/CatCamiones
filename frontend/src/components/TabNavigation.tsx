import { motion } from 'framer-motion';
import type React from 'react';

type Tab = {
    id: string;
    label: string;
    content?: React.ReactNode;
};

type TabNavigationProps = {
    options: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
    offsetTopPx?: number;
    className?: string;
};

export default function TabNavigation({
    options,
    activeTab,
    onTabChange,
    offsetTopPx = 132,
    className = '',
}: TabNavigationProps) {
    return (
        <div className={`tab-nav ${className}`}>

            <div
                id="tab-nav-fixed"
                className="fixed inset-x-0 z-40 bg-white shadow-sm border-t-3 border-[#E11D48] hidden md:block"
                style={{ top: offsetTopPx }}
            >

                <div className="h-[2px] w-full bg-[#E11D48]" />

                <div className="w-full">
                    <div className="relative grid grid-flow-col auto-cols-fr items-center h-[55px] px-6 w-full border-b border-gray-200">
                        {options.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <motion.button
                                    key={tab.id}
                                    className={`relative inline-flex h-full items-center justify-center text-center cursor-pointer select-none appearance-none bg-transparent border-0 p-0 m-0 shadow-none ${isActive ? 'text-[#E11D48]' : 'text-[#5E6C7C] hover:text-black'}  text-[16px] md:text-[17px] leading-none tracking-[0.2px]`}
                                    onClick={() => onTabChange(tab.id)}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {tab.label}

                                    <span
                                        className={`pointer-events-none absolute left-1/2 -translate-x-1/2
                                bottom-0 h-[2px] w-[120px] bg-[#E11D48]
                                transition-opacity duration-150
                                ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
