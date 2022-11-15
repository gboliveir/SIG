import { ReactNode } from "react";
import { Drawer } from "antd";

interface StandardizedDrawerProps {
  title: ReactNode,
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function StandardizedDrawer({
  title,
  open,
  onClose,
  children
}: StandardizedDrawerProps) {
  return (
    <Drawer
      title={title}
      placement='right'
      width={650}
      onClose={onClose}
      open={open}
    >
      {children}
    </Drawer>
  );
}