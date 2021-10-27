export class CounterService{
    counter: number = 0;

    onCounterAdd(){
        this.counter++;
    }
}