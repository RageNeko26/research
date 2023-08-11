import { EventEmitter } from "stream"

interface ISubscribe {
    subscribe(
        event: string,
        executor: (payload: any) => any | Promise <any>,
    ): this
}

type OrderEvent = 'order-created' | 'order-paid'

class OrderPublisherSubscriber implements ISubscribe {
    constructor(private readonly emitter: EventEmitter) {}
    subscribe(event: string, executor: (payload: any) => any): this {
        this.emitter.on(event, executor)
        return this
    }   
}

class Order {
    constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _product: string,    
    ) {}
}