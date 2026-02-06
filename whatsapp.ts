// Serviço para enviar pedidos, reservas e eventos via WhatsApp

const WHATSAPP_NUMBER = '244935024242'; // Número do restaurante

// Formata preço em Kwanza
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA',
    minimumFractionDigits: 0
  }).format(price);
};

// Envia pedido via WhatsApp
export const sendOrderToWhatsApp = (orderData: {
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deliveryType: 'pickup' | 'delivery';
  address?: string;
  notes?: string;
}) => {
  const { items, total, customerName, customerPhone, customerEmail, deliveryType, address, notes } = orderData;

  let message = `🍖 *NOVO PEDIDO - THE GRILL HOUSE* 🍖\n\n`;
  message += `📅 Data: ${new Date().toLocaleString('pt-AO')}\n\n`;
  
  message += `👤 *CLIENTE:*\n`;
  message += `Nome: ${customerName}\n`;
  message += `Telefone: ${customerPhone}\n`;
  if (customerEmail) message += `Email: ${customerEmail}\n`;
  message += `\n`;

  message += `🛵 *TIPO DE ENTREGA:* ${deliveryType === 'delivery' ? 'Entrega' : 'Retirada no Local'}\n`;
  if (deliveryType === 'delivery' && address) {
    message += `📍 Endereço: ${address}\n`;
  }
  message += `\n`;

  message += `📝 *ITENS DO PEDIDO:*\n`;
  items.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    message += `${index + 1}. ${item.quantity}x ${item.name}\n`;
    message += `   ${formatPrice(item.price)} cada = ${formatPrice(itemTotal)}\n`;
  });
  message += `\n`;

  message += `💰 *TOTAL: ${formatPrice(total)}*\n\n`;

  if (notes) {
    message += `📝 *OBSERVAÇÕES:*\n${notes}\n\n`;
  }

  message += `---\n`;
  message += `✅ Confirmar pedido?`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

// Envia reserva via WhatsApp
export const sendReservationToWhatsApp = (reservationData: {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  occasion?: string;
  notes?: string;
}) => {
  const { date, time, guests, name, email, phone, occasion, notes } = reservationData;

  let message = `📅 *NOVA RESERVA - THE GRILL HOUSE* 📅\n\n`;
  
  message += `👤 *CLIENTE:*\n`;
  message += `Nome: ${name}\n`;
  message += `Telefone: ${phone}\n`;
  if (email) message += `Email: ${email}\n`;
  message += `\n`;

  message += `📆 *DETALHES DA RESERVA:*\n`;
  message += `Data: ${new Date(date).toLocaleDateString('pt-AO')}\n`;
  message += `Horário: ${time}\n`;
  message += `Nº de Pessoas: ${guests}\n`;
  if (occasion) message += `Ocasião: ${occasion}\n`;
  message += `\n`;

  if (notes) {
    message += `📝 *OBSERVAÇÕES:*\n${notes}\n\n`;
  }

  message += `---\n`;
  message += `✅ Confirmar reserva?`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

// Envia evento privado via WhatsApp
export const sendEventToWhatsApp = (eventData: {
  eventType: string;
  guests: number;
  date: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}) => {
  const { eventType, guests, date, name, email, phone, notes } = eventData;

  let message = `🎉 *NOVO EVENTO PRIVADO - THE GRILL HOUSE* 🎉\n\n`;
  
  message += `👤 *CLIENTE:*\n`;
  message += `Nome: ${name}\n`;
  message += `Telefone: ${phone}\n`;
  if (email) message += `Email: ${email}\n`;
  message += `\n`;

  message += `🎊 *DETALHES DO EVENTO:*\n`;
  message += `Tipo: ${eventType}\n`;
  message += `Data Pretendida: ${new Date(date).toLocaleDateString('pt-AO')}\n`;
  message += `Nº de Convidados: ${guests}\n`;
  message += `\n`;

  if (notes) {
    message += `📝 *DETALHES ADICIONAIS:*\n${notes}\n\n`;
  }

  message += `---\n`;
  message += `📞 Entrarei em contacto em breve para discutir o orçamento!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};
