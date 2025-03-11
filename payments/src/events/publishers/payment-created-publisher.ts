import { Subjects, Publisher, PaymentCreatedEvent } from '@zbahntickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
