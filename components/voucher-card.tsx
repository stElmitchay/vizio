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
  voucher: Voucher;
  compact?: boolean;
}

export function VoucherCard({ voucher, compact = false }: VoucherCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart, isAuthenticated, setAuthModalOpen } = useAppStore();

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      setAuthModalOpen(true);
      return;
    }

    setIsLoading(true);
    try {
      addToCart({
        id: voucher.id,
        title: voucher.title,
        price: voucher.price,
        image: voucher.image,
        category: voucher.category,
      });
      toast.success('Added to cart!');
    } catch (error) {
      toast.error('Failed to add to cart');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: voucher.title,
        text: voucher.description,
        url: `/voucher/${voucher.id}`,
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/voucher/${voucher.id}`);
      toast.success('Link copied to clipboard!');
    }
  };

  if (compact) {
    return (
      <Card className="hover-lift glass-card group">
        <CardContent className="p-4">
          <div className="flex space-x-3">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={voucher.image}
                alt={voucher.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm truncate">{voucher.title}</h3>
              <p className="text-xs text-muted-foreground truncate">{voucher.brand}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-primary">${voucher.price}</span>
                <Button
                  size="sm"
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="h-7 px-3 text-xs"
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="voucher-card-override group relative overflow-hidden">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1">
        {voucher.isNew && (
          <Badge className="badge badge-accent">New</Badge>
        )}
        {voucher.isPopular && (
          <Badge className="badge">Popular</Badge>
        )}
        {voucher.discount && (
          <Badge className="badge">-{voucher.discount}%</Badge>
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon"
          className="btn btn-small"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
        <Button
          size="icon"
          className="btn btn-small"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Image */}
      <div className="placeholder-image">
        <Link href={`/voucher/${voucher.id}`}>
          {voucher.brand} Voucher
        </Link>
      </div>

      <CardContent className="p-4">
        <p className="type-label mb-sm">{voucher.brand}</p>

        <Link href={`/voucher/${voucher.id}`}>
          <h3 className="type-heading-3 mb-sm hover:text-primary transition-colors">
            {voucher.title}
          </h3>
        </Link>

        <p className="type-body-mono text-muted mb-md">${voucher.price} USD</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          <Button
            onClick={handleAddToCart}
            disabled={isLoading || voucher.stockCount === 0}
            className="btn btn-small btn-primary flex-1"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {voucher.stockCount === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
          <Button asChild className="btn btn-small btn-secondary">
            <Link href={`/voucher/${voucher.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}