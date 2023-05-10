class Barrier
{
	//constructor
	constructor(x, y, w, h)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	display()
	{
		fill(0, 0, 0);
		rect(this.x, this.y, this.w, this.h);
	}
}