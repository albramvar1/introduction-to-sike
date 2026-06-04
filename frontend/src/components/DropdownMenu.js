// source: https://seraui.com/docs/dropdown
"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

const DropdownMenu = ({
                          children,
                          trigger
                      }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = event => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleTriggerClick = e => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };
    return <div ref={dropdownRef}>
        <div onClick={handleTriggerClick} className="cursor-pointer">
            {trigger}
        </div>
        {isOpen && <div className="dropdown-menu" role="menu" aria-orientation="vertical">
            {children}
        </div>}
    </div>;
};
const DropdownMenuItem = ({
                              children,
                              onClick,
                              id = "",
                              active = false
                          }) => <a href="#" onClick={e => {
    e.preventDefault();
    if (onClick) onClick();
}} className="dropdown-menu-item" id={id} role="menuitem">
    {children}
</a>;

export { DropdownMenu, DropdownMenuItem };