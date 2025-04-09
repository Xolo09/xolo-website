import { FC, ReactNode, useMemo } from "react";
import {
    PhantomWalletAdapter
} from "@solana/wallet-adapter-wallets";
import {
    ConnectionProvider,
    WalletProvider
} from "@solana/wallet-adapter-react";
import {
    WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles for wallet modal
require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletConnectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // Use a more reliable RPC endpoint for production
    const endpoint = useMemo(() => {
        // You can replace this with your preferred RPC endpoint
        return clusterApiUrl("devnet");
    }, []);

    // Check for browser environment before creating wallet adapters
    const wallets = useMemo(() =>
        typeof window !== 'undefined' ? [new PhantomWalletAdapter()] : [],
        []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect onError={(error) => console.error('Wallet error:', error)}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
