import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe('Count recipient notification', () =>{
    test('Deve ser possivel contar as notificações por recebedor', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const countRecipientsNotifications = new CountRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(makeNotification({ recipientId: 'codigo-1'}));

        await notificationsRepository.create(makeNotification({ recipientId: 'codigo-1'}));

        await notificationsRepository.create(makeNotification({ recipientId: 'codigo-2'}));      
    

        const { count } = await countRecipientsNotifications.execute({
            recipientId: 'codigo-1'
        });

        expect(count).toEqual(2)
    })
})