import { createContext, useContext, useState, ReactNode } from 'react';
import AlertModal from '@/components/AlertModal';
import ConfirmModal from '@/components/ConfirmModal';

interface AlertContextType {
  showAlert: (message: string) => void;
  showConfirm: (title: string, description: string, onConfirm: () => void) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [confirmTitle, setConfirmTitle] = useState('');
  const [confirmDescription, setConfirmDescription] = useState('');
  const [onConfirm, setOnConfirm] = useState<(() => void) | null>(null);

  const showAlert = (message: string) => {
    setMessage(message);
    setIsOpen(true);
  };

  const showConfirm = (title: string, description: string, confirmCallback: () => void) => {
    setConfirmTitle(title);
    setConfirmDescription(description);
    setOnConfirm(() => confirmCallback);
    setIsConfirmOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirmClose = () => {
    setIsConfirmOpen(false);
    setOnConfirm(null);
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    handleConfirmClose();
  };

  return (
    <AlertContext.Provider value={{ showAlert, showConfirm }}>
      {children}
      <AlertModal
        isOpen={isOpen}
        message={message}
        onClose={handleClose}
      />
      <ConfirmModal
        isOpen={isConfirmOpen}
        title={confirmTitle}
        description={confirmDescription}
        onConfirm={handleConfirm}
        onCancel={handleConfirmClose}
      />
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
} 