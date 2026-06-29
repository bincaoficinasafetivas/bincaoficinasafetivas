import 'dotenv/config'

async function run() {
  const BASE = process.env.ASAAS_BASE_URL
  const KEY = process.env.ASAAS_API_KEY
  if (!BASE || !KEY) {
    console.error('Missing ASAAS_BASE_URL or ASAAS_API_KEY in env')
    process.exit(1)
  }

  console.log('BASE:', BASE)

  // Test 1: fetch customers
  const r1 = await fetch(`${BASE}/customers?limit=5`, {
    headers: { 'access_token': KEY, 'Content-Type': 'application/json' }
  })
  console.log('Customers status:', r1.status)
  console.log(await r1.json())

  // Test 2: create customer without cpfCnpj
  const r2 = await fetch(`${BASE}/customers`, {
    method: 'POST',
    headers: { 'access_token': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Cliente Teste Bincá',
      email: 'teste@binca.com.br',
      mobilePhone: '48988232351',
      cpfCnpj: '24971563792',
      notificationDisabled: false,
    })
  })
  console.log('Create customer status:', r2.status)
  const customer = await r2.json()
  console.log(customer)

  // Test 3: create PIX payment using externalReference
  if (customer.id) {
    const externalReference = `test-reservation-${Date.now()}`;
    const r3 = await fetch(`${BASE}/payments`, {
      method: 'POST',
      headers: { 'access_token': KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer: customer.id,
        billingType: 'PIX',
        value: 120.0,
        dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        externalReference,
        description: 'Inscrição - Teste Reserva Bincá'
      })
    })
    console.log('Create PIX payment status:', r3.status)
    const pixPayment = await r3.json()
    console.log(pixPayment)

    if (pixPayment.id) {
      const r4 = await fetch(`${BASE}/payments/${pixPayment.id}/pixQrCode`, {
        headers: { 'access_token': KEY }
      })
      console.log('PIX QR status:', r4.status)
      const pixQr = await r4.json()
      console.log(pixQr)
    }

    // Test 4: create credit card payment using externalReference
    const cardReference = `test-reservation-card-${Date.now()}`;
    const r5 = await fetch(`${BASE}/payments`, {
      method: 'POST',
      headers: { 'access_token': KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer: customer.id,
        billingType: 'CREDIT_CARD',
        value: 120.0,
        dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        externalReference: cardReference,
        description: 'Inscrição - Teste Reserva Bincá',
        installmentCount: 1,
        installmentValue: 120.0,
      })
    })
    console.log('Create card payment status:', r5.status)
    const cardPayment = await r5.json()
    console.log(cardPayment)
  }
}

run().catch((e) => { console.error(e); process.exit(1) })
