"use strict"

class Info{
    logging(info){
        console.info(info);
    }
}

class Warn {
     logging(warn){
        console.warn(warn);
    }

}

class Error {
     logging(error){
        console.error(error);
    }
}

class Table {
     logging(table){
            console.table(table);  
    }
}


class Strategy {  
    setStrategy(strategy){
        this.strategy = strategy;
    }

    logging(message){
        this.strategy.logging(message);
    }
}


const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);