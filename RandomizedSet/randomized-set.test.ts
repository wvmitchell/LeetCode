import RandomizedSet from './randomized-set';

describe('RandomizedSet', () => {
  describe('insert', () => {
    it('should insert a value', () => {
      const randomizedSet = new RandomizedSet();
      expect(randomizedSet.insert(1)).toBe(true);
      expect(randomizedSet.set.size).toBe(1);
    })

    it('should not insert a value that already exists', () => {
      const randomizedSet = new RandomizedSet();
      randomizedSet.insert(1);
      expect(randomizedSet.insert(1)).toBe(false);
    })
  })

  describe('remove', () => {
    it('should remove a value', () => {
      const randomizedSet = new RandomizedSet();
      randomizedSet.insert(1);
      expect(randomizedSet.remove(1)).toBe(true);
      expect(randomizedSet.set.size).toBe(0);
    })

    it('should not remove a value that does not exist', () => {
      const randomizedSet = new RandomizedSet();
      expect(randomizedSet.remove(1)).toBe(false);
    })
  })

  describe('getRandom', () => {
    it('should get a random value when there is only one', () => {
      const randomizedSet = new RandomizedSet();
      randomizedSet.insert(1);
      expect(randomizedSet.getRandom()).toBe(1);
    })

    it('should get a random value when there are multiple', () => {
      const randomizedSet = new RandomizedSet();
      randomizedSet.insert(1);
      randomizedSet.insert(2);
      randomizedSet.insert(3);
      expect([1, 2, 3]).toContain(randomizedSet.getRandom());
    })
  })
})
