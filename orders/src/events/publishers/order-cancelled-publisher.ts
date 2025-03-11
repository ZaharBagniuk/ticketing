import { Subjects, Publisher, OrderCancelledEvent } from '@zbahntickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
