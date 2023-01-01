/* eslint-disable @typescript-eslint/no-unused-vars */
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories";
import { SendNotification } from "./send-notification";

describe('Send Notification', () =>{
    test('Deve ser possivel enviar uma notificação', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            content: 'Isso é uma notificação',
            category: 'social',
            recipientId: '1234'
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification)
    })
})