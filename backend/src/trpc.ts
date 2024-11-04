import { initTRPC } from '@trpc/server';

const subs = [
    { id: '1', subscription: 'Subscription 1' },
    { id: '2', subscription: 'Subscription 2' },
    { id: '3', subscription: 'Subscription 3' },
    { id: '4', subscription: 'Subscription 4' },
    { id: '5', subscription: 'Subscription 5' },
  ]

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
    'get-subscriptions': trpc.procedure.query(() => {
        return { subs }
    }),
});

export type TrpcRouter = typeof trpcRouter;