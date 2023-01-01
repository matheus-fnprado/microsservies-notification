import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";
import { ReadNotification } from "./read-notification";

describe('Read Notification', () =>{
    test('Deve ser possivel ler uma notificação', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const readNotification = new ReadNotification(notificationsRepository);

        const notification = makeNotification ()

        await notificationsRepository.create(notification);

        await readNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].readAt).toEqual(
            expect.any(Date),
        );
    })

    test('Não deve ser capaz de ler uma notificação quando ela não existe', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const readNotification = new ReadNotification(notificationsRepository);

        expect(() =>{
            return readNotification.execute({
                notificationId: 'id-falso'
            });
        }).rejects.toThrow(NotificationNotFound)
    })
})