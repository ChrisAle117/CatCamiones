import { motion } from 'framer-motion';
import type React from 'react';
import { MdSearch, MdClose } from 'react-icons/md';

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
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
};

export default function TabNavigation({
    options,
    activeTab,
    onTabChange,
    offsetTopPx = 132,
    className = '',
    searchQuery = '',
    onSearchChange,
}: TabNavigationProps) {
    return (
        <div className={`tab-nav ${className}`}>

            <div
                id="tab-nav-fixed"
                className="fixed inset-x-0 z-40 bg-white shadow-sm border-t-3 border-[#E11D48]"
                style={{ top: offsetTopPx }}
            >

                <div className="h-[2px] w-full bg-[#E11D48]" />

                <div className="max-w-[1920px] mx-auto px-4 md:px-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between min-h-[45px] py-2 md:py-0 gap-3 md:gap-6 border-b border-gray-100">
                        {/* Tabs */}
                        <div className="relative flex items-center justify-center md:justify-start overflow-x-auto scrollbar-hide">
                            <div className="flex items-center justify-center gap-5 md:gap-8 min-w-max px-1">
                                {options.map((tab) => {
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <motion.button
                                            key={tab.id}
                                            className={`relative flex h-[36px] md:h-[48px] items-center justify-center text-center cursor-pointer select-none appearance-none bg-transparent border-0 p-0 m-0 shadow-none whitespace-nowrap font-bold ${isActive ? 'text-[#E11D48]' : 'text-[#5E6C7C] hover:text-black'} text-[13px] sm:text-[14px] md:text-[16px] leading-none tracking-tight transition-colors`}
                                            onClick={() => onTabChange(tab.id)}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="sr-only">Mostrar categoría </span>
                                            {tab.label}

                                            {isActive && (
                                                <motion.span
                                                    layoutId="activeTabUnderline"
                                                    className="pointer-events-none absolute left-0 right-0 bottom-0 h-[2px] bg-[#E11D48] rounded-t-full"
                                                    transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Search Bar (Compact) */}
                        <div className="relative flex-1 md:max-w-sm w-full group">
                            <div className="relative w-full max-w-[400px] mx-auto md:mx-0">
                                <MdSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#E11D48] transition-colors" size={18} />
                                <input
                                    id="vehicle-search"
                                    name="vehicle-search"
                                    type="text"
                                    placeholder="Buscar..."
                                    value={searchQuery}
                                    onChange={(e) => onSearchChange?.(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-10 pr-10 text-xs font-bold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E11D48]/40 focus:bg-white transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => onSearchChange?.('')}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <MdClose size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
