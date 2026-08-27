'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CopyReleaseButtonProps {
  textToCopy: string;
}

export const CopyReleaseButton: React.FC<CopyReleaseButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Falha ao copiar texto:', err);
    }
  };

  return (
    <Button
      type="button"
      variant={copied ? 'secondary' : 'primary'}
      size="sm"
      onClick={handleCopy}
      className="gap-2 text-xs font-bold uppercase tracking-wider transition-all"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Release Copiado!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>Copiar Release</span>
        </>
      )}
    </Button>
  );
};
