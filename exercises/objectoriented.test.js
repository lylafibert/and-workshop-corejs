const calculator = (...args) => {
  return {
    sum: () => {
      return args.reduce((agg, curr) => agg + curr);
    },

    multiply: () => {
      return args.reduce((agg, curr) => agg * curr);
    },

    getValueOfPI: () => {
      return Math.PI;
    }
  };
};
// This is an exercise in design patterns

// Create a calculator object/constructor/class that takes some numbers

// And then exposes the following methods:

// * `sum`
// * `multiply`
// * `getValueOfPI`

// For this exercise... _you_ write the tests.

// ## Part 1: Module

// Implement the above using a JS object module.

// ## Part 2: Constructor

// Implement the above using a Constructor

// ## Part 3: Class

// Implement the above using a Class

// ## Part 4: Prototypes

// Modify your above example by using a Class

describe('Calculator', () => {
  describe('sum', () => {
    test('returns the sum of two numbers', () => {
      expect(calculator(3, 4).sum()).toBe(7);
      expect(calculator(77, 134).sum()).toBe(211);
      expect(calculator(9, 46).sum()).toBe(55);
    });

    test('returns the sum of multiple numbers', () => {
      expect(calculator(3, 4, 7, 8, 10).sum()).toBe(32);
      expect(calculator(76, 4, 12, 23, 10).sum()).toBe(125);
      expect(calculator(1, 4, 0, 8, 18).sum()).toBe(31);
    });
  });

  describe('multiply', () => {
    test('returns the product of two numbers', () => {
      expect(calculator(6, 5).multiply()).toBe(30);
      expect(calculator(12, 36).multiply()).toBe(432);
      expect(calculator(7, 73).multiply()).toBe(511);
    });

    test('returns the product of multiple numbers', () => {
      expect(calculator(6, 5, 12, 130).multiply()).toBe(46800);
      expect(calculator(12, 36, 1, 3, 5).multiply()).toBe(6480);
      expect(calculator(7, 8, 12, 73).multiply()).toBe(49056);
    });
  });

  describe('getValueOfPI', () => {
    test('returns PI', () => {
      expect(calculator().getValueOfPI()).toBe(Math.PI);
    });
  });
});

function CalculatorConstructor(...args) {
  this.sum = () => {
    return args.reduce((agg, curr) => agg + curr);
  };

  this.multiply = () => {
    return args.reduce((agg, curr) => agg * curr);
  };

  this.getValueOfPI = () => {
    return Math.PI;
  };
}

describe('CalculatorConstructor', () => {
  describe('sum', () => {
    test('returns the sum of two numbers', () => {
      const calculatorInstance = new CalculatorConstructor(3, 4);
      expect(calculatorInstance.sum()).toBe(7);
      const calculatorInstance2 = new CalculatorConstructor(77, 134);
      expect(calculatorInstance2.sum()).toBe(211);
      const calculatorInstance3 = new CalculatorConstructor(9, 46);
      expect(calculatorInstance3.sum()).toBe(55);
    });

    test('returns the sum of multiple numbers', () => {
      const mult1 = new CalculatorConstructor(3, 4, 7, 8, 10);
      expect(mult1.sum()).toBe(32);
      const mult2 = new CalculatorConstructor(76, 4, 12, 23, 10);
      expect(mult2.sum()).toBe(125);
    });
  });

  describe('multiply', () => {
    test('returns the product of two numbers', () => {
      const mult3 = new CalculatorConstructor(6, 5);
      expect(mult3.multiply()).toBe(30);
    });

    test('returns the product of multiple numbers', () => {
      const mult4 = new CalculatorConstructor(6, 5, 12, 130);
      expect(mult4.multiply()).toBe(46800);
    });
  });

  describe('getValueOfPI', () => {
    test('returns PI', () => {
      const pi = new CalculatorConstructor();
      expect(pi.getValueOfPI()).toBe(Math.PI);
    });
  });
});

class CalculatorClass {
  constructor(...args) {
    this.sum = () => {
      return args.reduce((agg, curr) => agg + curr);
    };

    this.multiply = () => {
      return args.reduce((agg, curr) => agg * curr);
    };

    this.getValueOfPI = () => {
      return Math.PI;
    };
  }
}

describe('CalculatorClass', () => {
  describe('sum', () => {
    test('returns the sum of two numbers', () => {
      const instance1 = new CalculatorClass(3, 4);
      expect(instance1.sum()).toBe(7);
    });

    test('returns the sum of multiple numbers', () => {
      const instance2 = new CalculatorClass(3, 4, 7, 8, 10);
      expect(instance2.sum()).toBe(32);
    });
  });

  describe('multiply', () => {
    test('returns the product of two numbers', () => {
      const instance3 = new CalculatorClass(6, 5);
      expect(instance3.multiply()).toBe(30);
    });

    test('returns the product of multiple numbers', () => {
      const instance4 = new CalculatorClass(6, 5, 12, 130);
      expect(instance4.multiply()).toBe(46800);
    });
  });

  describe('getValueOfPI', () => {
    test('returns PI', () => {
      const pi1 = new CalculatorClass();
      expect(pi1.getValueOfPI()).toBe(Math.PI);
    });
  });
});
