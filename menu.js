 "use client";
import { useState } from "react";

export default function MenuClient({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
            {children}
        </div>
    );
}