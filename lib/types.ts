export interface Voucher {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  features: string[];
  termsAndConditions: string;
  expiryDate?: string;
  stockCount: number;
  rating: number;
  reviewCount: number;
  isPopular?: boolean;
  isNew?: boolean;
  deliveryTime: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
  featured?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  vouchers: {
    voucherId: string;
    quantity: number;
    price: number;
    codes: string[];
  }[];
  totalAmount: number;
  paymentMethod: 'stripe' | 'solana';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentIntent {
  amount: number;
  currency: string;
  paymentMethod: 'stripe' | 'solana';
  voucherIds: string[];
  userId?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}