import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";

describe('Cancel Notification', () =>{
    test('Deve ser possivel cancelar uma notificação', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = makeNotification ()

        await notificationsRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(
            expect.any(Date),
        );
    })

    test('Não deve ser capaz de cancelar uma notificação quando ela não existe', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const cancelNotification = new CancelNotification(notificationsRepository);

        expect(() =>{
            return cancelNotification.execute({
                notificationId: 'id-falso'
            });
        }).rejects.toThrow(NotificationNotFound)
    })
})