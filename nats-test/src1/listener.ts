import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
});

stan.on('connect', () => {
    stan.on('close', () => {
        console.log('NATS connection closed');
        process.exit();
    });

    console.log('Listener connected to NATS');

    const options = stan
        .subscriptionOptions()
        .setManualAckMode(true)
        .setDeliverAllAvailable()
        .setDurableName('accounting-service');
    const subscription = stan.subscribe(
        'ticket:created',
        'ordersServiceQueueGroup'
    );

    subscription.on('message', (msg: Message) => {
        const data = msg.getData();

        if (typeof data === 'string') {
            console.log(`Received event #${msg.getSequence()}, with data: ${(data)}`)
        }

        msg.ack();
    });
});

process.on('SIGINT', () => {
    stan.close();
});

process.on('SIGINT', () => {
    stan.close();
});
