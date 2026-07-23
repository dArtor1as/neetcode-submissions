class MinStack {
    constructor(
        private stack: number[] = [],
        private minVal: number[] = [],
    ) {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
         if (this.minVal.length === 0 || this.minVal[this.minVal.length - 1] >= val) {
            this.minVal.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length === 0) {
            return null;
        } else if (this.stack.length !== 0) {
            const poppedVal = this.stack.pop();
            if (poppedVal === this.minVal[this.minVal.length - 1]) {
                this.minVal.pop();
            }
            
            
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        if (this.stack.length === 0) {
            return null;
        } else if (this.stack.length !== 0) {
            return this.stack[this.stack.length - 1];
        }
    }

    /**
     * @return {number}
     */
    getMin(): number {
        if (this.stack.length === 0) {
            return null;
        } else if (this.stack.length !== 0) {
            return this.minVal[this.minVal.length - 1];
        }
    }
}
