export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  specs: Record<string, string>;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'MacBook Pro 14" M3 Pro',
    category: 'laptops',
    price: 85_000_000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=1000',
    rating: 4.8,
    reviews: 124,
    specs: { 'CPU': 'M3 Pro', 'RAM': '18GB', 'SSD': '512GB' }
  },
  {
    id: 'p2',
    title: 'iPhone 15 Pro Max',
    category: 'mobiles',
    price: 65_000_000,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9,
    reviews: 850,
    specs: { 'Color': 'Natural Titanium', 'Storage': '256GB' }
  },
  {
    id: 'p3',
    title: 'Sony WH-1000XM5',
    category: 'accessories',
    price: 14_500_000,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000',
    rating: 4.7,
    reviews: 320,
    specs: { 'Type': 'Noise Cancelling', 'Battery': '30 Hours' }
  },
  {
    id: 'p4',
    title: 'Samsung Galaxy S24 Ultra',
    category: 'mobiles',
    price: 62_000_000,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1000',
    rating: 4.8,
    reviews: 410,
    specs: { 'Screen': '6.8 AMOLED', 'Camera': '200MP' }
  },
  {
    id: 'p5',
    title: 'PlayStation 5 Slim',
    category: 'gaming',
    price: 24_000_000,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9,
    reviews: 1500,
    specs: { 'Storage': '1TB SSD', 'Edition': 'Digital' }
  },
  {
    id: 'p6',
    title: 'Asus TUF Gaming F15',
    category: 'laptops',
    price: 45_000_000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000',
    rating: 4.5,
    reviews: 89,
    specs: { 'GPU': 'RTX 4060', 'RAM': '16GB' }
  }
];

// --- DASHBOARD MOCK DATA ---

export interface Loan {
  id: string;
  title: string;
  totalAmount: number;
  remainingAmount: number;
  nextDueDate: string;
  monthlyPayment: number;
  status: 'active' | 'completed' | 'overdue';
  progress: number; // 0-100
}

export const LOANS: Loan[] = [
  {
    id: 'ln-1024',
    title: 'MacBook Pro Purchase',
    totalAmount: 85_000_000,
    remainingAmount: 64_000_000,
    nextDueDate: '2024-06-01',
    monthlyPayment: 7_500_000,
    status: 'active',
    progress: 25
  },
  {
    id: 'ln-1025',
    title: 'Home Appliances Bundle',
    totalAmount: 45_000_000,
    remainingAmount: 45_000_000,
    nextDueDate: '2024-06-15',
    monthlyPayment: 4_200_000,
    status: 'active',
    progress: 0
  }
];

export interface Installment {
  id: string;
  loanId: string;
  number: number;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
}

export const INSTALLMENTS: Installment[] = [
  { id: 'ins-1', loanId: 'ln-1024', number: 1, dueDate: '2024-04-01', amount: 7_500_000, status: 'paid' },
  { id: 'ins-2', loanId: 'ln-1024', number: 2, dueDate: '2024-05-01', amount: 7_500_000, status: 'paid' },
  { id: 'ins-3', loanId: 'ln-1024', number: 3, dueDate: '2024-06-01', amount: 7_500_000, status: 'pending' },
  { id: 'ins-4', loanId: 'ln-1024', number: 4, dueDate: '2024-07-01', amount: 7_500_000, status: 'pending' },
  { id: 'ins-5', loanId: 'ln-1024', number: 5, dueDate: '2024-08-01', amount: 7_500_000, status: 'pending' },
];

export const B2B_DATA = {
  companyName: 'Tech Innovators Co.',
  creditLimit: 2_000_000_000,
  usedCredit: 450_000_000,
  activeEmployees: 12,
  rfqs: [
    { id: 'rfq-01', title: '20x Laptops for Dev Team', date: '2024-05-10', status: 'approved' },
    { id: 'rfq-02', title: 'Office Furniture Upgrade', date: '2024-05-12', status: 'pending' },
  ]
};