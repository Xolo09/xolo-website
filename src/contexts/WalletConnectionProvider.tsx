import { FC, ReactNode, useMemo } from "react";
// Removed duplicate import of WalletProvider
import {
    PhantomWalletAdapter
} from "@solana/wallet-adapter-wallets";
// Removed duplicate import of WalletModalProvider

require("@solana/wallet-adapter-react-ui/styles.css");

import {
    ConnectionProvider,
    WalletProvider
} from "@solana/wallet-adapter-react";
// Removed duplicate import of PhantomWalletAdapter
import {
    WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles for wallet modal
require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletConnectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const endpoint = useMemo(() => clusterApiUrl("devnet"), []);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
