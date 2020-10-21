import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sumBuy(items: Buyable[], discount?: number): number {
        let result = 0;
        items.forEach((item) => { result += item.price });

        if (discount === undefined) {
            return result;
        }

        result = result - (result * (discount / 100));

        return (result < 0) ? 0 : result;
    }

    delete(id: number): void {
        let i = 0;

        this.items.forEach((item) => {
            (item.id === id) ? this._items.splice(i, 1) : i += 1;
        });

    }
}