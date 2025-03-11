import { Publisher, OrderCreatedEvent, Subjects } from '@zbahntickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
