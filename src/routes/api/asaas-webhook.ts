import { createServerFn } from '@tanstack/react-start'
import { processAsaasWebhook } from '@/lib/payments.server'

export const asaasWebhook = createServerFn({ method: 'POST' })
  .handler(async ({ request }) => {
    const payload = await request.json();
    await processAsaasWebhook(payload);
    return { received: true };
  });
