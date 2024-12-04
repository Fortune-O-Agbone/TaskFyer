import React from "react";
import Modal from "@/app/Components/Modal/Modal";

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="main-layout flex-1 bg-[#EDEDED] border-2 border-white rounded-[1.5rem] overflow-auto">
            <Modal />
            {children}
        </div>
    );
}

export default MainLayout;