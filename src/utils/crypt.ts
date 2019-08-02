export class Crypt {
  bcrypt = require('bcrypt');

  execute(text: string): string {
    return this.bcrypt.hashSync(text, 10);
  }

  compare(text: string, hash: string): boolean {
    return this.bcrypt.compareSync(text, hash);
  }
}
