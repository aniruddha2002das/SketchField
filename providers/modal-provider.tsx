"use client";

import { RenameModal } from "@/components/modals/rename-modal";
import { ProModal } from "@/components/modals/pro-modal";
import { useEffect, useState } from "react";

/**
 * @description The ModalProvider component avoid hydration error when displaying modals
 * @returns JSX Elements (Modals)
 */

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // if it is not mounted, it is not in the client side
  // therefore, do not render anything
  if (!isMounted) return null;

  return (
    <>
      <RenameModal />
      <ProModal />
    </>
  );
};
