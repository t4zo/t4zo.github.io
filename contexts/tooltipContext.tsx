import { createContext, ReactNode, useState } from 'react';

type Props = {
  children: ReactNode;
}

type ITooltip = {
  visible: boolean;
  message: string;
}

type ITooltipContext = {
  tooltip: ITooltip;
  openTooltip: (message: string, seconds: number) => void;
  closeTooltip: () => void;
}

const TooltipContext = createContext<ITooltipContext>({
  tooltip: null,
  openTooltip: null,
  closeTooltip: null,
});

export function TooltipContextProvider({ children }: Props) {
  const [tooltip, setTooltip] = useState<ITooltip>({ visible: false, message: '' });

  function openTooltip(message: string, seconds: number) {
    setTooltip({ visible: true, message });
    setTimeout(() => {
      closeTooltip();
    }, seconds);
  }

  function closeTooltip() {
    setTooltip(prevState => ({ ...prevState, visible: false }));
  }

  return <TooltipContext.Provider value={{ tooltip, openTooltip, closeTooltip }}>{children}</TooltipContext.Provider>;
}

export default TooltipContext;
