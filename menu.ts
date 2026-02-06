import type { MenuItem, Review } from '@/types';

export const menuItems: MenuItem[] = [
  // Starters
  { id: 's1', name: 'Burrata com Tomate Assado', description: 'Burrata fresca, tomates cereja assados, manjericão, azeite extravirgem', price: 4500, category: 'starters', popular: true },
  { id: 's2', name: 'Carpaccio de Filé Mignon', description: 'Finas fatias de filé mignon, rúcula, alcaparras, parmesão', price: 5200, category: 'starters' },
  { id: 's3', name: 'Camarão ao Alho', description: 'Camarões salteados com alho, manteiga e ervas, servidos com pão artesanal', price: 5800, category: 'starters', popular: true },
  { id: 's4', name: 'Bruschetta Italiana', description: 'Pão italiano grelhado com tomate fresco, alho, manjericão', price: 3200, category: 'starters' },
  
  // Steaks
  { id: 'st1', name: 'Picanha na Brasa', description: 'Picanha premium grelhada na brasa, servida com arroz, feijão e farofa (600g)', price: 12500, category: 'steaks', popular: true },
  { id: 'st2', name: 'Filé Mignon ao Molho Madeira', description: 'Filé mignon grelhado com molho madeira, purê de batata trufado (300g)', price: 14500, category: 'steaks', popular: true },
  { id: 'st3', name: 'Ribeye Angus', description: 'Corte ribeye Angus grelhado, marmorizado, com legumes grelhados (400g)', price: 16800, category: 'steaks' },
  { id: 'st4', name: 'T-Bone Steak', description: 'Imponente T-Bone grelhado na brasa, com batatas rústicas (800g)', price: 18900, category: 'steaks', popular: true },
  { id: 'st5', name: 'Costela de Cordeiro', description: 'Costela de cordeiro assada lentamente com ervas provençais (400g)', price: 13200, category: 'steaks' },
  { id: 'st6', name: 'Fraldinha na Mostarda', description: 'Fraldinha grelhada com crosta de mostarda dijon e mel (500g)', price: 11800, category: 'steaks' },
  
  // Sauces
  { id: 'sa1', name: 'Molho Madeira', description: 'Molho tradicional de vinho madeira com cogumelos', price: 1500, category: 'sauces' },
  { id: 'sa2', name: 'Molho de Pimenta Verde', description: 'Molho cremoso de pimenta verde com conhaque', price: 1500, category: 'sauces', popular: true },
  { id: 'sa3', name: 'Molho Barbecue', description: 'Molho barbecue caseiro defumado', price: 1200, category: 'sauces' },
  { id: 'sa4', name: 'Manteiga de Ervas', description: 'Manteiga composta com ervas frescas e alho', price: 1000, category: 'sauces' },
  
  // Sides
  { id: 'sd1', name: 'Batatas Fritas Trufadas', description: 'Batatas fritas crocantes com azeite trufado e parmesão', price: 2800, category: 'sides', popular: true },
  { id: 'sd2', name: 'Purê de Batata', description: 'Purê de batata cremoso com manteiga', price: 2200, category: 'sides' },
  { id: 'sd3', name: 'Legumes Grelhados', description: 'Mix de legumes da estação grelhados', price: 2500, category: 'sides' },
  { id: 'sd4', name: 'Arroz de Alho', description: 'Arroz salteado com alho e azeite', price: 1800, category: 'sides' },
  { id: 'sd5', name: 'Salada Caesar', description: 'Alface romana, croutons, parmesão e molho caesar', price: 3200, category: 'sides' },
  
  // Desserts
  { id: 'd1', name: 'Tiramisù', description: 'Clássico italiano com café, mascarpone e cacau', price: 3500, category: 'desserts', popular: true },
  { id: 'd2', name: 'Petit Gâteau', description: 'Bolo de chocolate com centro derretido e sorvete de baunilha', price: 3800, category: 'desserts', popular: true },
  { id: 'd3', name: 'Crème Brûlée', description: 'Creme de baunilha com crosta de açúcar caramelizado', price: 3200, category: 'desserts' },
  { id: 'd4', name: 'Panna Cotta', description: 'Panna cotta italiana com calda de frutas vermelhas', price: 3000, category: 'desserts' },
  
  // Drinks
  { id: 'dr1', name: 'Caipirinha', description: 'Clássica caipirinha com limão fresco', price: 2500, category: 'drinks', popular: true },
  { id: 'dr2', name: 'Old Fashioned', description: 'Whiskey, açúcar, angostura e casca de laranja', price: 3500, category: 'drinks', popular: true },
  { id: 'dr3', name: 'Gin Tônica', description: 'Gin premium com água tônica e especiarias', price: 3200, category: 'drinks' },
  { id: 'dr4', name: 'Margarita', description: 'Tequila, triple sec e suco de limão', price: 3000, category: 'drinks' },
  { id: 'dr5', name: 'Suco Natural', description: 'Suco de laranja, maracujá ou limão fresco', price: 1800, category: 'drinks' },
  { id: 'dr6', name: 'Refrigerante', description: 'Coca-Cola, Coca-Cola Zero, Sprite ou Fanta', price: 1200, category: 'drinks' }
];

export const reviews: Review[] = [
  { id: 'r1', name: 'Maria Santos', rating: 5, text: 'A picanha estava impecável! O atendimento foi silencioso, preciso e caloroso. Voltarei com certeza!', date: '2024-12-15' },
  { id: 'r2', name: 'João Pedro', rating: 5, text: 'Melhor lugar para um jantar romântico em Huambo. A luz do fogo muda tudo.', date: '2024-11-28' },
  { id: 'r3', name: 'Ana Luísa', rating: 4, text: 'Celebramos nosso aniversário aqui. Eles pensaram em cada detalhe. Experiência inesquecível!', date: '2024-12-02' },
  { id: 'r4', name: 'Carlos Mendes', rating: 5, text: 'O ribeye Angus é simplesmente perfeito. O molho de pimenta verde é divino!', date: '2024-12-20' },
  { id: 'r5', name: 'Fernanda Costa', rating: 5, text: 'Ambiente sofisticado, comida excelente e drinks incríveis. Recomendo demais!', date: '2024-11-15' }
];

export const categoryNames: Record<string, string> = {
  starters: 'Entradas',
  steaks: 'Carnes & Churrascos',
  sauces: 'Molhos',
  sides: 'Acompanhamentos',
  desserts: 'Sobremesas',
  drinks: 'Bebidas'
};
