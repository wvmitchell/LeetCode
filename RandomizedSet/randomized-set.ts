export default class RandomizedSet {
  set: Set<number>
  constructor() {
    this.set = new Set()
  }

  insert(val: number): boolean {
    let size = this.set.size
    this.set.add(val)
    return this.set.size !== size
  }

  remove(val: number): boolean {
    let size = this.set.size
    this.set.delete(val)
    return this.set.size !== size
  }

  getRandom(): number {
    let index = Math.floor(Math.random() * this.set.size)
    return [...this.set.values()][index]
  }
}
