import React from 'react'
import { Tab } from '../../../types'
import { motion } from 'framer-motion';

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({active, selectTab, children}: Tab) => {
    const ButtonClass = active ? 'text-white border-b border-[#ff0000]' : 'text-[#ADB7BE]'

    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white hover:border-[#ff0000] border-b-4  ${ButtonClass}`}>
            {children}
        </p>
        <motion.div
            animate={active ? "active" : "default"}
            variants={variants}
            className="h-1 bg-primary-500 mt-2 mr-3"
        ></motion.div>
    </button>
    )
}

export default TabButton