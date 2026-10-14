export interface StreamCategory {
  id: number;
  number: string;
  title: string;
  badge: string;
  tag: string;
  headline: string;
  image: string;
  description: string;
  features: string[];
}

export interface Transaction {
  id: string;
  recipient: string;
  avatar: string;
  amount: number;
  category: string;
  date: string;
  status: 'completed' | 'processing';
}

export interface ToastNotification {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}
