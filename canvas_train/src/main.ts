const c = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = c.getContext('2d')!;
//画框
ctx.strokeStyle = '#3498db';
ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.strokeRect(50,50,200,200)
