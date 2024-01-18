import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { polygonMumbai, sepolia } from "wagmi/chains";
import MainLayout from "@/components/Layout/MainLayout";
import { Quicksand } from "next/font/google";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { theme_ghostie } from "@/styles/theme_ghostie";

const quicksand = Quicksand({ subsets: ["latin"] });
const chains = [polygonMumbai, sepolia];
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID, // or infuraId
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)

    chains,
  })
);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider customTheme={theme_ghostie}>
        <NextUIProvider className={`${quicksand.className}`}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </NextUIProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
