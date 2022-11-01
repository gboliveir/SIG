import { ReactNode } from "react";
import { StandardizedDrawer } from "../../../components/StandardizedDrawer";

interface ObligationDrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ObligationDrawer({ 
  open,
  onClose,
  children
}: ObligationDrawerProps) {
  return (
    <StandardizedDrawer
      title="Empresa 1"
      onClose={onClose}
      open={open}
    >
      {children}
    </StandardizedDrawer>      
  );
}