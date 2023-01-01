import { SendNotification } from "@application/use-cases/send-notification";
import { DataBaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { NotificationsController } from "./kafka/controllers/notification.controller";
import { KafkaConsumerService } from "./kafka/kafka-consumer.service";

@Module({
    imports: [DataBaseModule],
    providers: [
        KafkaConsumerService,
        SendNotification
    ],
    controllers: [NotificationsController],
})

export class MessagingModule{

}