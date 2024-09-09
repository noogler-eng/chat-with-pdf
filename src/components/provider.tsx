'use client'
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function Provider({children}: {
    children: React.ReactNode
}){
    return <ClerkProvider appearance={{
        userButton: {
            elements: {}
        }
    }}>
        {children}
    </ClerkProvider>
}