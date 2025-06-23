"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { Voucher } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Star,
  ShoppingCart,
  Clock,
  Users,
  Zap,
  Heart,
  Share2,
  Eye,
} from 'lucide-react';
import { toast } from 'sonner';

interface VoucherCardProps {
  brand: string;
  name: string;
  price: string;
}

export function VoucherCard({ brand, name, price }: VoucherCardProps) {
  return (
    <div className="bg-highlight-bright border-2 border-text-primary rounded-lg p-4 flex flex-col shadow-layer cursor-pointer">
      <div className="bg-secondary-bg h-32 rounded-md mb-4 flex items-center justify-center font-mono text-text-muted">
        {brand} Voucher
      </div>
      <p className="font-mono text-xs uppercase text-text-primary tracking-widest">{brand}</p>
      <h3 className="font-sans text-lg font-semibold my-1">{name}</h3>
      <p className="font-mono text-sm text-text-muted mb-4">{price}</p>
      <Button className="w-full mt-auto bg-accent-purple text-text-primary hover:bg-purple-400">View Details</Button>
    </div>
  );
}