export class Properties {
  text: string;
  x: number;
  y: number;
  r: number;
  o: number;
  s: number;
  refresh: boolean;

  constructor(
    text: string,
    x: number,
    y: number,
    r: number,
    o: number,
    s: number,
    refresh: boolean
  ) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.r = r;
    this.o = o;
    this.s = s;
    this.refresh = refresh;
  }
}
