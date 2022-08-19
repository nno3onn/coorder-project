export default async function bootpay({ price, addr, phone, method }) {
  try {
    const Bootpay = (await import('@bootpay/client-js')).default;
    const order_id = Date.now();

    const { event } = await Bootpay.requestPayment({
      application_id: '626a35fd2701800023f6a684',
      price,
      order_name: '코오더 음식 주문',
      order_id,
      pg: '나이스페이',
      method,
      tax_free: 0,
      user: {
        phone,
        addr,
      },
      extra: {
        open_type: 'iframe',
      },
    });
    return event;
  } catch (err) {
    console.error(err);
    return err;
  }
}
