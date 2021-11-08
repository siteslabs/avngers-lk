export type TCustomDrawer = {
  drawerWidth?: number;
  variant?: "permanent" | "persistent" | "temporary";
  children: React.ReactNode;
  display?: {
    xs: string;
    sm: string;
  };
  onClose?: () => void;
  open?: boolean;
  ModalProps?: {
    keepMounted: boolean;
  };
};
