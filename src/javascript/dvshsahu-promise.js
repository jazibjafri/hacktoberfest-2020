
/*
    This file contains the custom class which implements promise,
    - it can used instead of inbuild promise library that we often use while writing API calls.

    - Following on the same lines, we can define promise to be function that will have the following features
        1. A promise can be resolved or rejected
        2. Can be resolved with value or can be rejected with reason
        3. Multiple promises can be chained
*/

const state = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

const isThenable = mayBePromise => mayBePromise && typeof mayBePromise.then === 'function';

const enableLogger = false;
const logger = (methodName, stateValue) => enableLogger && console.log(`Method : ${methodName}, \t\t\tCurrent State Value : ${stateValue}`);

class promise {
    constructor(computation) {

        this._state = state.PENDING;

        this._value = undefined;
        this._reason = undefined;

        // to store multiple promise
        this._thenQueue = [];

        // checking if the passed computation is valid function
        if (typeof computation === "function") {
            try {
                computation(
                    this._onFulfilled.bind(this),
                    this._onRejected.bind(this)
                )
            } catch (ex) {
                this._onRejected(ex)
            }
        }

    }

    // Returns a new promise that can be chained
    then(fulfilledFn, catchFn) {
        logger('then', this._state);
        const controlledPromise = new JSADPromise();

        this._thenQueue.push([controlledPromise, fulfilledFn, catchFn]);

        if (this._state === state.FULFILLED) {
            this._propogateFulfilled();
        } else if (this._state === state.REJECTED) {
            this._propogateRejected();
        }

        return controlledPromise;

    }

    catch() {
        return this.then(undefined, catchFn);
    }

    _onFulfilled(value) {
        logger('_onFulfilled', this._state);
        if (this._state === state.PENDING) {
            this._state = state.FULFILLED;
            this._value = value;
            this._propogateFulfilled();
        }

    }

    _onRejected(reason) {
        if (this._state === state.PENDING) {
            this._state = state.REJECTED;
            this._reason = reason;
            this._propogateRejected();
        }
    }

    _propogateFulfilled() {
        this._thenQueue.forEach(([controlledPromise, fulfilledFn]) => {
            logger('_propogateFulfilled', this._state);
            if (typeof fulfilledFn === 'function') {

                const valueOrPromise = fulfilledFn(this._value);

                if (isThenable(valueOrPromise)) {

                    valueOrPromise.then(
                        value => controlledPromise._onFulfilled(value),
                        reason => controlledPromise._onRejected(reason)
                    );

                } else {
                    controlledPromise._onFulfilled(valueOrPromise);
                }

            } else {
                return controlledPromise._onfulfilled(this._value);
            }
        });
    }

    _propogateRejected() {
        this._thenQueue.forEach(([controlledPromise, _, catchFn]) => {

            if (typeof catchFn === 'function') {
                const valueOrPromise = catchFn(this._reason);

                if (isThenable(valueOrPromise)) {
                    valueOrPromise.then(
                        value => controlledPromise._onFulfilled(value),
                        reason => controlledPromise._onRejected(reason)
                    );
                } else {
                    controlledPromise._onRejected(valueOrPromise);
                }
            } else {
                return controlledPromise._onRejected(this._reason);
            }

        })
    }

}

export default promise;