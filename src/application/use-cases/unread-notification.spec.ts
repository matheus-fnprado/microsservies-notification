import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";
import { UnreadNotification } from "./unread-notification";

describe('Unread Notification', () =>{
    test('Não deve ser possivel ler uma notificação', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const unreadNotification = new UnreadNotification(notificationsRepository);

        const notification = makeNotification ({
            readAt: new Date(),
        })

        await notificationsRepository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].readAt).toBeNull()
    })

    test('Não deve ser capaz de ler uma notificação quando ela não existe', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const unreadNotification = new UnreadNotification(notificationsRepository);

        expect(() =>{
            return unreadNotification.execute({
                notificationId: 'id-falso'
            });
        }).rejects.toThrow(NotificationNotFound)
    })
})