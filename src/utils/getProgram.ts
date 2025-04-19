import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program, Idl } from "@coral-xyz/anchor";
import { WalletContextState } from "@solana/wallet-adapter-react";
import idlJson from "../idl/XoloCoin.json";

const idl = idlJson as unknown as Idl;
const PROGRAM_ID = new PublicKey("93CCq4xaFrrEmoD8DtwD8rjuizZddBrnZYv3p7oQSSTz");

type AnchorWallet = {
    publicKey: PublicKey;
    signTransaction: (tx: any) => Promise<any>;
    signAllTransactions: (txs: any[]) => Promise<any[]>;
};

export const getProgram = (
    connection: Connection,
    walletContext: WalletContextState
): Program => {
    if (
        !walletContext.publicKey ||
        !walletContext.signTransaction ||
        !walletContext.signAllTransactions
    ) {
        throw new Error("Wallet not fully connected.");
    }

    const anchorWallet: AnchorWallet = {
        publicKey: walletContext.publicKey,
        signTransaction: walletContext.signTransaction,
        signAllTransactions: walletContext.signAllTransactions,
    };

    const provider = new AnchorProvider(connection, anchorWallet, {
        preflightCommitment: "processed",
    });

    return new Program(idl, PROGRAM_ID, provider); // ✅ Anchor 0.28.0 correct order
};

export default getProgram;

















