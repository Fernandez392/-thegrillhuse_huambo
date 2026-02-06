export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'steaks' | 'sauces' | 'sides' | 'desserts' | 'drinks';
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Reservation {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  occasion?: string;
  notes?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}
