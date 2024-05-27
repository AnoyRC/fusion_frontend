import WalletProvider from "@/provider/WalletProvider";

import QRcodeModal from "@/components/modal/QRcodeModal";

import QR from "@/components/ui/QR";
import Gas from "@/components/ui/Gas";
import Menu from "@/components/ui/Menu";

import ChainSelector from "@/components/ui/ChainSelector";
import TokenModal from "@/components/modal/TokenModal";
import TxProofModal from "@/components/modal/TxProofModal";
import RecoveryProofModal from "@/components/modal/RecoveryProofModal";
import ClaimModal from "@/components/modal/ClaimModal";
import FusionHeader from "@/components/ui/FusionHeader";

const mainLayout = ({ children }) => {
  return (
    <>
      <QRcodeModal />
      <TokenModal />
      <TxProofModal />
      <RecoveryProofModal />
      <ClaimModal />

      <WalletProvider>
        <main className="bg-gray-200 relative flex min-h-screen flex-col items-center px-2 py-10">
          <ChainSelector />

          <div className="flex flex-col max-w-[29rem] w-full gap-y-4 flex-grow">
            <div className="flex justify-between items-center mt-16">
              <FusionHeader />

              <div className="flex space-x-2">
                <Gas />
                <QR />
                <Menu />
              </div>
            </div>

            {children}
          </div>
        </main>
      </WalletProvider>
    </>
  );
};

export default mainLayout;
