import { useCallback } from 'react';
import AlertCard from '@/components/AlertCard';

function useClipboard() {
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
        console.log('Texto copiado para a área de transferência');
      return true
    } catch (err) {
        console.log('Falha ao copiar o texto', err);
        return false
    }
  }, []);

  return copyToClipboard;
}

export default useClipboard;