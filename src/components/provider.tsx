'use client'
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

export default function Provider({children}: {
    children: React.ReactNode
}){

    // providing an access to data cache
    const queryClient = new QueryClient()

    return <ClerkProvider>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </ClerkProvider>
}