class Car
{
    constructor()
    {
        this.x=275;
        this.width=85;
        this.height=150;
        this.y=750-10-this.height;
        this.image=document.getElementById('player');
    }
    moveLeft()
    {
        this.x-=2;
        if(this.x<=0) this.x+=2;
    }
    moveRight()
    {
        this.x+=2;
        if(this.x>=600-this.width) this.x-=2;
    }
    moveTop()
    {
        this.y-=2;
        if(this.y<=0) this.y+=2;
    }
    moveDown()
    {
        this.y+=2;
        if(this.y>=750-this.height) this.y-=2;
    }
}