import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor(){
        super({
            client: {
                clientId: 'notifications',
                brokers: ['kind-hippo-9771-us1-kafka.upstash.io:9092'],
                sasl: {
                  mechanism: 'scram-sha-256',
                  username: 'a2luZC1oaXBwby05NzcxJLpeiiZ5FSBNve47zwxznXvkme6M7s83cukxic3AoTA',
                  password: '1oN6MUS7cVX2BlebHSBevRh7XWEKrbJhDbDRAhVik63AYUBHWC7KvGmblBDWGCOVjcI6Ag==',
                },
                ssl: true,
            }
        })
    }

    async onModuleDestroy() {
        await this.close()
    }
}