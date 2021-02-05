export class Garage extends Array {
  constructor(
    public key: number,
    public owner: string,
    public address: string,
    public car: string[],
    public color: string,
    public dateOfBirth: string
  ) {
    super();
  }
}
