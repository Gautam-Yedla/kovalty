'use client';

import { FC, ReactNode, useState } from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

interface IProps {
    children: ReactNode;
}

export const AppProviders: FC<IProps> = ({ children }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
