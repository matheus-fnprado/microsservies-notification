import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories";
import { GetRecipientNotifications } from "./get-recipient-notifications";

describe('Get recipient notification', () =>{
    test('Deve ser possivel encontrar as notificações por recebedor', async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(makeNotification({ recipientId: 'codigo-1'}));

        await notificationsRepository.create(makeNotification({ recipientId: 'codigo-1'}));

        await notificationsRepository.create(makeNotification({ recipientId: '2'}));      
    

        const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'codigo-1'
        });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'codigo-1'}),
            expect.objectContaining({ recipientId: 'codigo-1'}),
        ]));

    })
})