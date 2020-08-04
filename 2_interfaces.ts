interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number 
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12346',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'

const rect3 = {} as Rect

// ======================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 25
    },
    getArea():number {
        return this.size.width * this.size.height
    }
}

// ========================

interface IClock {
    time: Data
    setTimeout(date: Data): void  
}

class Clock implements IClock {
    time: Date = new Date()
    setTimeout(date: Data): void {
        this.time = date
    } 
}

// ==========================

